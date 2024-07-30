import React, { useState } from 'react';

import {ChakraProvider,Box,Flex,Heading,Table,Thead,Tbody,Tr,Th,Td,Text,Button,IconButton,Tooltip, ButtonGroup,RadioGroup,Radio, Icon} from '@chakra-ui/react';

import {FaHome,FaMoneyCheckAlt,FaFileInvoice,FaAddressBook, FaUserFriends,FaClipboardCheck,FaLink,FaRegCreditCard,FaChartBar} from 'react-icons/fa';

const PayoutTable = ()=>{
  const[isSidebarOpen,setSidebarOpen]=useState(false);
  const [filter,setFilter]= useState('allPayouts');

  const handleMouseEnter= ()=>{
    setSidebarOpen(true);
  }
  const handleMouseLeave= ()=>{
    setSidebarOpen(false);
  };

  const payouts= [
      { id: 1, date: 'Fri 9 Feb, 2:32 PM', amount: '₹10,000.00', status: 'Queued', contact: 'Shivam Arora', createdBy: 'Aditya Sharma' },
    { id: 2, date: 'Fri 9 Feb, 1:25 PM', amount: '₹10,000.00', status: 'Queued', contact: 'Ujjwal', createdBy: 'Aditya Sharma' },
    { id: 3, date: 'Fri 9 Feb, 12:04 PM', amount: '₹10,000.00', status: 'Queued', contact: 'Amit Kumar', createdBy: 'Aditya Sharma' },
    { id: 4, date: 'Thu 8 Feb, 3:52 PM', amount: '₹50,000.00', status: 'Queued', contact: 'Harsh', createdBy: 'Aditya Sharma' },
    { id: 5, date: 'Tue 6 Feb, 4:09 PM', amount: '₹10,000.00', status: 'Queued', contact: 'Random Verma', createdBy: 'Aditya Sharma' },
  ];

  const menuItems = [
    { icon: FaHome, label: 'Home' },
    { icon: FaMoneyCheckAlt, label: 'Payouts' },
    { icon: FaFileInvoice, label: 'Account Statement' },
    { icon: FaAddressBook, label: 'Contacts' },
    { icon: FaUserFriends, label: 'Vendor Payments' },
    { icon: FaClipboardCheck, label: 'Tax Payments' },
    { icon: FaLink, label: 'Payout Links' },
    { icon: FaRegCreditCard, label: 'Payroll' },
    { icon: FaChartBar, label: 'Reports' },
  ]

  return(
    <ChakraProvider>
      <Flex direction='column' bg= 'gray.800' color='white' minH='100vh'>
        <Box bg='gray.900' p={4}>
          <Heading size='md'>
            RazorPay
          </Heading>
        </Box>
        <Flex>
          <Box w={isSidebarOpen? '250px': '70px'}
          bg='gray.700'
          p={4}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          transition='width 0.2s'>
            {menuItems.map((item)=>{
              <Tooltip label= {item.label} placement='right' key={item.label}>
                <Flex
                align='center'
                mb={2}
                p={2}
                borderRadius='md'
                _hover={{bg: 'gray.600', cursor: 'pointer'}}>
                  <IconButton 
                  icon={<item.icon/>}
                  isRound
                  size='lg'
                  bg= 'transparent'
                  aria-label= {item.label}
                  mr= {isSidebarOpen? 4:0}/>
                  {isSidebarOpen && <Text>{item.label}</Text>}
                </Flex>
              </Tooltip>
            })}
          </Box>

          <Box flex= '1' p= {6}>
            <Heading size= 'lg' mb= {4}>Payouts</Heading>
            <Flex justify='space-between' mb={4}>
              <Button colorScheme='blue' mx={2}>Singke</Button>
              <Button colorScheme='blue' mx={2}>Bulk</Button>
              <Button colorScheme='blue' mx={2}>Tally</Button>
              <Button colorScheme='blue' mx={2}>Payout Links</Button>
            </Flex>
            <Box bg= "gray.900" p={4} borderRadius='md' mb={4}>
              <Text mb={2}>Quick Filters:</Text>
              <RadioGroup onChange={setFilter} value={filter} colorScheme='teal'>
                <Flex>
                  <Radio valye= 'allPayouts' mr={4}>All Payouts</Radio>
                  <Radio valye= 'scheduled' mr={4}>scheduled for next 2 Days</Radio>
                  <Radio valye= 'queued' mr={4}>Queued (RazorPay A/C)</Radio>
                </Flex>
              </RadioGroup>
            </Box>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>Date</Th>
                    <Th>Amout</Th>
                    <Th>Status</Th>
                    <Th>Contact</Th>
                    <Th>Created By</Th>
                    <Th>UTR</Th>
                  </Tr>
                </Thead>

                <Tbody>
                {payouts.map((payout) => (
                  <Tr key={payout.id}>
                    <Td>{payout.date}</Td>
                    <Td>{payout.amount}</Td>
                    <Td>{payout.status}</Td>
                    <Td>{payout.contact}</Td>
                    <Td>{payout.createdBy}</Td>
                    <Td>--</Td>
                  </Tr>
                ))}
                </Tbody>
              </Table>
              <Flex justify='space-between' mt={4}>
                <Button colorScheme='blue'>Export</Button>
                <Button colorScheme='blue'>+ Payout</Button>
              </Flex>
          </Box>
        </Flex>
      </Flex>
    </ChakraProvider>
  )
}

export default PayoutTable;
