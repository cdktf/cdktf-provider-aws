# `subnet` Submodule <a name="`subnet` Submodule" id="@cdktf/provider-aws.subnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Subnet <a name="Subnet" id="@cdktf/provider-aws.subnet.Subnet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/subnet aws_subnet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.subnet.Subnet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.subnet.Subnet;

Subnet.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .vpcId(java.lang.String)
//  .assignIpv6AddressOnCreation(java.lang.Boolean)
//  .assignIpv6AddressOnCreation(IResolvable)
//  .availabilityZone(java.lang.String)
//  .availabilityZoneId(java.lang.String)
//  .cidrBlock(java.lang.String)
//  .customerOwnedIpv4Pool(java.lang.String)
//  .enableDns64(java.lang.Boolean)
//  .enableDns64(IResolvable)
//  .enableResourceNameDnsAaaaRecordOnLaunch(java.lang.Boolean)
//  .enableResourceNameDnsAaaaRecordOnLaunch(IResolvable)
//  .enableResourceNameDnsARecordOnLaunch(java.lang.Boolean)
//  .enableResourceNameDnsARecordOnLaunch(IResolvable)
//  .id(java.lang.String)
//  .ipv6CidrBlock(java.lang.String)
//  .ipv6Native(java.lang.Boolean)
//  .ipv6Native(IResolvable)
//  .mapCustomerOwnedIpOnLaunch(java.lang.Boolean)
//  .mapCustomerOwnedIpOnLaunch(IResolvable)
//  .mapPublicIpOnLaunch(java.lang.Boolean)
//  .mapPublicIpOnLaunch(IResolvable)
//  .outpostArn(java.lang.String)
//  .privateDnsHostnameTypeOnLaunch(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SubnetTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#vpc_id Subnet#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.assignIpv6AddressOnCreation">assignIpv6AddressOnCreation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#assign_ipv6_address_on_creation Subnet#assign_ipv6_address_on_creation}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#availability_zone Subnet#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.availabilityZoneId">availabilityZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#availability_zone_id Subnet#availability_zone_id}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#cidr_block Subnet#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.customerOwnedIpv4Pool">customerOwnedIpv4Pool</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#customer_owned_ipv4_pool Subnet#customer_owned_ipv4_pool}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.enableDns64">enableDns64</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#enable_dns64 Subnet#enable_dns64}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.enableResourceNameDnsAaaaRecordOnLaunch">enableResourceNameDnsAaaaRecordOnLaunch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#enable_resource_name_dns_aaaa_record_on_launch Subnet#enable_resource_name_dns_aaaa_record_on_launch}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.enableResourceNameDnsARecordOnLaunch">enableResourceNameDnsARecordOnLaunch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#enable_resource_name_dns_a_record_on_launch Subnet#enable_resource_name_dns_a_record_on_launch}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#id Subnet#id}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#ipv6_cidr_block Subnet#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.ipv6Native">ipv6Native</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#ipv6_native Subnet#ipv6_native}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.mapCustomerOwnedIpOnLaunch">mapCustomerOwnedIpOnLaunch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#map_customer_owned_ip_on_launch Subnet#map_customer_owned_ip_on_launch}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.mapPublicIpOnLaunch">mapPublicIpOnLaunch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#map_public_ip_on_launch Subnet#map_public_ip_on_launch}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.outpostArn">outpostArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#outpost_arn Subnet#outpost_arn}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.privateDnsHostnameTypeOnLaunch">privateDnsHostnameTypeOnLaunch</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#private_dns_hostname_type_on_launch Subnet#private_dns_hostname_type_on_launch}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#tags Subnet#tags}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#tags_all Subnet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeouts">SubnetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#vpc_id Subnet#vpc_id}.

---

##### `assignIpv6AddressOnCreation`<sup>Optional</sup> <a name="assignIpv6AddressOnCreation" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.assignIpv6AddressOnCreation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#assign_ipv6_address_on_creation Subnet#assign_ipv6_address_on_creation}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.availabilityZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#availability_zone Subnet#availability_zone}.

---

##### `availabilityZoneId`<sup>Optional</sup> <a name="availabilityZoneId" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.availabilityZoneId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#availability_zone_id Subnet#availability_zone_id}.

---

##### `cidrBlock`<sup>Optional</sup> <a name="cidrBlock" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.cidrBlock"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#cidr_block Subnet#cidr_block}.

---

##### `customerOwnedIpv4Pool`<sup>Optional</sup> <a name="customerOwnedIpv4Pool" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.customerOwnedIpv4Pool"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#customer_owned_ipv4_pool Subnet#customer_owned_ipv4_pool}.

---

##### `enableDns64`<sup>Optional</sup> <a name="enableDns64" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.enableDns64"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#enable_dns64 Subnet#enable_dns64}.

---

##### `enableResourceNameDnsAaaaRecordOnLaunch`<sup>Optional</sup> <a name="enableResourceNameDnsAaaaRecordOnLaunch" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.enableResourceNameDnsAaaaRecordOnLaunch"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#enable_resource_name_dns_aaaa_record_on_launch Subnet#enable_resource_name_dns_aaaa_record_on_launch}.

---

##### `enableResourceNameDnsARecordOnLaunch`<sup>Optional</sup> <a name="enableResourceNameDnsARecordOnLaunch" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.enableResourceNameDnsARecordOnLaunch"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#enable_resource_name_dns_a_record_on_launch Subnet#enable_resource_name_dns_a_record_on_launch}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#id Subnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6CidrBlock`<sup>Optional</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.ipv6CidrBlock"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#ipv6_cidr_block Subnet#ipv6_cidr_block}.

---

##### `ipv6Native`<sup>Optional</sup> <a name="ipv6Native" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.ipv6Native"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#ipv6_native Subnet#ipv6_native}.

---

##### `mapCustomerOwnedIpOnLaunch`<sup>Optional</sup> <a name="mapCustomerOwnedIpOnLaunch" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.mapCustomerOwnedIpOnLaunch"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#map_customer_owned_ip_on_launch Subnet#map_customer_owned_ip_on_launch}.

---

##### `mapPublicIpOnLaunch`<sup>Optional</sup> <a name="mapPublicIpOnLaunch" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.mapPublicIpOnLaunch"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#map_public_ip_on_launch Subnet#map_public_ip_on_launch}.

---

##### `outpostArn`<sup>Optional</sup> <a name="outpostArn" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.outpostArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#outpost_arn Subnet#outpost_arn}.

---

##### `privateDnsHostnameTypeOnLaunch`<sup>Optional</sup> <a name="privateDnsHostnameTypeOnLaunch" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.privateDnsHostnameTypeOnLaunch"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#private_dns_hostname_type_on_launch Subnet#private_dns_hostname_type_on_launch}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#tags Subnet#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#tags_all Subnet#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.subnet.SubnetTimeouts">SubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#timeouts Subnet#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetAssignIpv6AddressOnCreation">resetAssignIpv6AddressOnCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetAvailabilityZoneId">resetAvailabilityZoneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetCidrBlock">resetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetCustomerOwnedIpv4Pool">resetCustomerOwnedIpv4Pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetEnableDns64">resetEnableDns64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetEnableResourceNameDnsAaaaRecordOnLaunch">resetEnableResourceNameDnsAaaaRecordOnLaunch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetEnableResourceNameDnsARecordOnLaunch">resetEnableResourceNameDnsARecordOnLaunch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetIpv6CidrBlock">resetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetIpv6Native">resetIpv6Native</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetMapCustomerOwnedIpOnLaunch">resetMapCustomerOwnedIpOnLaunch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetMapPublicIpOnLaunch">resetMapPublicIpOnLaunch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetOutpostArn">resetOutpostArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetPrivateDnsHostnameTypeOnLaunch">resetPrivateDnsHostnameTypeOnLaunch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.subnet.Subnet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.subnet.Subnet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.subnet.Subnet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.subnet.Subnet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.subnet.Subnet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.subnet.Subnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.subnet.Subnet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.subnet.Subnet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.subnet.Subnet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.subnet.Subnet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.subnet.Subnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.subnet.Subnet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.subnet.Subnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.subnet.Subnet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.subnet.Subnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.subnet.Subnet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.subnet.Subnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.subnet.Subnet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.subnet.Subnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.subnet.Subnet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.subnet.Subnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.subnet.Subnet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.subnet.Subnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.subnet.Subnet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.subnet.Subnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.subnet.Subnet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.subnet.Subnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.subnet.Subnet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.subnet.Subnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.subnet.Subnet.putTimeouts"></a>

```java
public void putTimeouts(SubnetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.subnet.Subnet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.subnet.SubnetTimeouts">SubnetTimeouts</a>

---

##### `resetAssignIpv6AddressOnCreation` <a name="resetAssignIpv6AddressOnCreation" id="@cdktf/provider-aws.subnet.Subnet.resetAssignIpv6AddressOnCreation"></a>

```java
public void resetAssignIpv6AddressOnCreation()
```

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-aws.subnet.Subnet.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetAvailabilityZoneId` <a name="resetAvailabilityZoneId" id="@cdktf/provider-aws.subnet.Subnet.resetAvailabilityZoneId"></a>

```java
public void resetAvailabilityZoneId()
```

##### `resetCidrBlock` <a name="resetCidrBlock" id="@cdktf/provider-aws.subnet.Subnet.resetCidrBlock"></a>

```java
public void resetCidrBlock()
```

##### `resetCustomerOwnedIpv4Pool` <a name="resetCustomerOwnedIpv4Pool" id="@cdktf/provider-aws.subnet.Subnet.resetCustomerOwnedIpv4Pool"></a>

```java
public void resetCustomerOwnedIpv4Pool()
```

##### `resetEnableDns64` <a name="resetEnableDns64" id="@cdktf/provider-aws.subnet.Subnet.resetEnableDns64"></a>

```java
public void resetEnableDns64()
```

##### `resetEnableResourceNameDnsAaaaRecordOnLaunch` <a name="resetEnableResourceNameDnsAaaaRecordOnLaunch" id="@cdktf/provider-aws.subnet.Subnet.resetEnableResourceNameDnsAaaaRecordOnLaunch"></a>

```java
public void resetEnableResourceNameDnsAaaaRecordOnLaunch()
```

##### `resetEnableResourceNameDnsARecordOnLaunch` <a name="resetEnableResourceNameDnsARecordOnLaunch" id="@cdktf/provider-aws.subnet.Subnet.resetEnableResourceNameDnsARecordOnLaunch"></a>

```java
public void resetEnableResourceNameDnsARecordOnLaunch()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.subnet.Subnet.resetId"></a>

```java
public void resetId()
```

##### `resetIpv6CidrBlock` <a name="resetIpv6CidrBlock" id="@cdktf/provider-aws.subnet.Subnet.resetIpv6CidrBlock"></a>

```java
public void resetIpv6CidrBlock()
```

##### `resetIpv6Native` <a name="resetIpv6Native" id="@cdktf/provider-aws.subnet.Subnet.resetIpv6Native"></a>

```java
public void resetIpv6Native()
```

##### `resetMapCustomerOwnedIpOnLaunch` <a name="resetMapCustomerOwnedIpOnLaunch" id="@cdktf/provider-aws.subnet.Subnet.resetMapCustomerOwnedIpOnLaunch"></a>

```java
public void resetMapCustomerOwnedIpOnLaunch()
```

##### `resetMapPublicIpOnLaunch` <a name="resetMapPublicIpOnLaunch" id="@cdktf/provider-aws.subnet.Subnet.resetMapPublicIpOnLaunch"></a>

```java
public void resetMapPublicIpOnLaunch()
```

##### `resetOutpostArn` <a name="resetOutpostArn" id="@cdktf/provider-aws.subnet.Subnet.resetOutpostArn"></a>

```java
public void resetOutpostArn()
```

##### `resetPrivateDnsHostnameTypeOnLaunch` <a name="resetPrivateDnsHostnameTypeOnLaunch" id="@cdktf/provider-aws.subnet.Subnet.resetPrivateDnsHostnameTypeOnLaunch"></a>

```java
public void resetPrivateDnsHostnameTypeOnLaunch()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.subnet.Subnet.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.subnet.Subnet.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.subnet.Subnet.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.subnet.Subnet.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.subnet.Subnet;

Subnet.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.subnet.Subnet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.subnet.Subnet.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.subnet.Subnet;

Subnet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.subnet.Subnet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.subnet.Subnet.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.subnet.Subnet;

Subnet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.subnet.Subnet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.ipv6CidrBlockAssociationId">ipv6CidrBlockAssociationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference">SubnetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.assignIpv6AddressOnCreationInput">assignIpv6AddressOnCreationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.availabilityZoneIdInput">availabilityZoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.cidrBlockInput">cidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.customerOwnedIpv4PoolInput">customerOwnedIpv4PoolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.enableDns64Input">enableDns64Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.enableResourceNameDnsAaaaRecordOnLaunchInput">enableResourceNameDnsAaaaRecordOnLaunchInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.enableResourceNameDnsARecordOnLaunchInput">enableResourceNameDnsARecordOnLaunchInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.ipv6CidrBlockInput">ipv6CidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.ipv6NativeInput">ipv6NativeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.mapCustomerOwnedIpOnLaunchInput">mapCustomerOwnedIpOnLaunchInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.mapPublicIpOnLaunchInput">mapPublicIpOnLaunchInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.outpostArnInput">outpostArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.privateDnsHostnameTypeOnLaunchInput">privateDnsHostnameTypeOnLaunchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeouts">SubnetTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.assignIpv6AddressOnCreation">assignIpv6AddressOnCreation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.availabilityZoneId">availabilityZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.customerOwnedIpv4Pool">customerOwnedIpv4Pool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.enableDns64">enableDns64</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.enableResourceNameDnsAaaaRecordOnLaunch">enableResourceNameDnsAaaaRecordOnLaunch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.enableResourceNameDnsARecordOnLaunch">enableResourceNameDnsARecordOnLaunch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.ipv6Native">ipv6Native</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.mapCustomerOwnedIpOnLaunch">mapCustomerOwnedIpOnLaunch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.mapPublicIpOnLaunch">mapPublicIpOnLaunch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.outpostArn">outpostArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.privateDnsHostnameTypeOnLaunch">privateDnsHostnameTypeOnLaunch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.subnet.Subnet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.subnet.Subnet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.subnet.Subnet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.subnet.Subnet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.subnet.Subnet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.subnet.Subnet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.subnet.Subnet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.subnet.Subnet.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.subnet.Subnet.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.subnet.Subnet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.subnet.Subnet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.subnet.Subnet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.subnet.Subnet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.subnet.Subnet.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.subnet.Subnet.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `ipv6CidrBlockAssociationId`<sup>Required</sup> <a name="ipv6CidrBlockAssociationId" id="@cdktf/provider-aws.subnet.Subnet.property.ipv6CidrBlockAssociationId"></a>

```java
public java.lang.String getIpv6CidrBlockAssociationId();
```

- *Type:* java.lang.String

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.subnet.Subnet.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.subnet.Subnet.property.timeouts"></a>

```java
public SubnetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference">SubnetTimeoutsOutputReference</a>

---

##### `assignIpv6AddressOnCreationInput`<sup>Optional</sup> <a name="assignIpv6AddressOnCreationInput" id="@cdktf/provider-aws.subnet.Subnet.property.assignIpv6AddressOnCreationInput"></a>

```java
public java.lang.Object getAssignIpv6AddressOnCreationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityZoneIdInput`<sup>Optional</sup> <a name="availabilityZoneIdInput" id="@cdktf/provider-aws.subnet.Subnet.property.availabilityZoneIdInput"></a>

```java
public java.lang.String getAvailabilityZoneIdInput();
```

- *Type:* java.lang.String

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-aws.subnet.Subnet.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `cidrBlockInput`<sup>Optional</sup> <a name="cidrBlockInput" id="@cdktf/provider-aws.subnet.Subnet.property.cidrBlockInput"></a>

```java
public java.lang.String getCidrBlockInput();
```

- *Type:* java.lang.String

---

##### `customerOwnedIpv4PoolInput`<sup>Optional</sup> <a name="customerOwnedIpv4PoolInput" id="@cdktf/provider-aws.subnet.Subnet.property.customerOwnedIpv4PoolInput"></a>

```java
public java.lang.String getCustomerOwnedIpv4PoolInput();
```

- *Type:* java.lang.String

---

##### `enableDns64Input`<sup>Optional</sup> <a name="enableDns64Input" id="@cdktf/provider-aws.subnet.Subnet.property.enableDns64Input"></a>

```java
public java.lang.Object getEnableDns64Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableResourceNameDnsAaaaRecordOnLaunchInput`<sup>Optional</sup> <a name="enableResourceNameDnsAaaaRecordOnLaunchInput" id="@cdktf/provider-aws.subnet.Subnet.property.enableResourceNameDnsAaaaRecordOnLaunchInput"></a>

```java
public java.lang.Object getEnableResourceNameDnsAaaaRecordOnLaunchInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableResourceNameDnsARecordOnLaunchInput`<sup>Optional</sup> <a name="enableResourceNameDnsARecordOnLaunchInput" id="@cdktf/provider-aws.subnet.Subnet.property.enableResourceNameDnsARecordOnLaunchInput"></a>

```java
public java.lang.Object getEnableResourceNameDnsARecordOnLaunchInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.subnet.Subnet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipv6CidrBlockInput`<sup>Optional</sup> <a name="ipv6CidrBlockInput" id="@cdktf/provider-aws.subnet.Subnet.property.ipv6CidrBlockInput"></a>

```java
public java.lang.String getIpv6CidrBlockInput();
```

- *Type:* java.lang.String

---

##### `ipv6NativeInput`<sup>Optional</sup> <a name="ipv6NativeInput" id="@cdktf/provider-aws.subnet.Subnet.property.ipv6NativeInput"></a>

```java
public java.lang.Object getIpv6NativeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mapCustomerOwnedIpOnLaunchInput`<sup>Optional</sup> <a name="mapCustomerOwnedIpOnLaunchInput" id="@cdktf/provider-aws.subnet.Subnet.property.mapCustomerOwnedIpOnLaunchInput"></a>

```java
public java.lang.Object getMapCustomerOwnedIpOnLaunchInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mapPublicIpOnLaunchInput`<sup>Optional</sup> <a name="mapPublicIpOnLaunchInput" id="@cdktf/provider-aws.subnet.Subnet.property.mapPublicIpOnLaunchInput"></a>

```java
public java.lang.Object getMapPublicIpOnLaunchInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `outpostArnInput`<sup>Optional</sup> <a name="outpostArnInput" id="@cdktf/provider-aws.subnet.Subnet.property.outpostArnInput"></a>

```java
public java.lang.String getOutpostArnInput();
```

- *Type:* java.lang.String

---

##### `privateDnsHostnameTypeOnLaunchInput`<sup>Optional</sup> <a name="privateDnsHostnameTypeOnLaunchInput" id="@cdktf/provider-aws.subnet.Subnet.property.privateDnsHostnameTypeOnLaunchInput"></a>

```java
public java.lang.String getPrivateDnsHostnameTypeOnLaunchInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.subnet.Subnet.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.subnet.Subnet.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.subnet.Subnet.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.subnet.SubnetTimeouts">SubnetTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.subnet.Subnet.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `assignIpv6AddressOnCreation`<sup>Required</sup> <a name="assignIpv6AddressOnCreation" id="@cdktf/provider-aws.subnet.Subnet.property.assignIpv6AddressOnCreation"></a>

```java
public java.lang.Object getAssignIpv6AddressOnCreation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.subnet.Subnet.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktf/provider-aws.subnet.Subnet.property.availabilityZoneId"></a>

```java
public java.lang.String getAvailabilityZoneId();
```

- *Type:* java.lang.String

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktf/provider-aws.subnet.Subnet.property.cidrBlock"></a>

```java
public java.lang.String getCidrBlock();
```

- *Type:* java.lang.String

---

##### `customerOwnedIpv4Pool`<sup>Required</sup> <a name="customerOwnedIpv4Pool" id="@cdktf/provider-aws.subnet.Subnet.property.customerOwnedIpv4Pool"></a>

```java
public java.lang.String getCustomerOwnedIpv4Pool();
```

- *Type:* java.lang.String

---

##### `enableDns64`<sup>Required</sup> <a name="enableDns64" id="@cdktf/provider-aws.subnet.Subnet.property.enableDns64"></a>

```java
public java.lang.Object getEnableDns64();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableResourceNameDnsAaaaRecordOnLaunch`<sup>Required</sup> <a name="enableResourceNameDnsAaaaRecordOnLaunch" id="@cdktf/provider-aws.subnet.Subnet.property.enableResourceNameDnsAaaaRecordOnLaunch"></a>

```java
public java.lang.Object getEnableResourceNameDnsAaaaRecordOnLaunch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableResourceNameDnsARecordOnLaunch`<sup>Required</sup> <a name="enableResourceNameDnsARecordOnLaunch" id="@cdktf/provider-aws.subnet.Subnet.property.enableResourceNameDnsARecordOnLaunch"></a>

```java
public java.lang.Object getEnableResourceNameDnsARecordOnLaunch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.subnet.Subnet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipv6CidrBlock`<sup>Required</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-aws.subnet.Subnet.property.ipv6CidrBlock"></a>

```java
public java.lang.String getIpv6CidrBlock();
```

- *Type:* java.lang.String

---

##### `ipv6Native`<sup>Required</sup> <a name="ipv6Native" id="@cdktf/provider-aws.subnet.Subnet.property.ipv6Native"></a>

```java
public java.lang.Object getIpv6Native();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mapCustomerOwnedIpOnLaunch`<sup>Required</sup> <a name="mapCustomerOwnedIpOnLaunch" id="@cdktf/provider-aws.subnet.Subnet.property.mapCustomerOwnedIpOnLaunch"></a>

```java
public java.lang.Object getMapCustomerOwnedIpOnLaunch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mapPublicIpOnLaunch`<sup>Required</sup> <a name="mapPublicIpOnLaunch" id="@cdktf/provider-aws.subnet.Subnet.property.mapPublicIpOnLaunch"></a>

```java
public java.lang.Object getMapPublicIpOnLaunch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `outpostArn`<sup>Required</sup> <a name="outpostArn" id="@cdktf/provider-aws.subnet.Subnet.property.outpostArn"></a>

```java
public java.lang.String getOutpostArn();
```

- *Type:* java.lang.String

---

##### `privateDnsHostnameTypeOnLaunch`<sup>Required</sup> <a name="privateDnsHostnameTypeOnLaunch" id="@cdktf/provider-aws.subnet.Subnet.property.privateDnsHostnameTypeOnLaunch"></a>

```java
public java.lang.String getPrivateDnsHostnameTypeOnLaunch();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.subnet.Subnet.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.subnet.Subnet.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.subnet.Subnet.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.subnet.Subnet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SubnetConfig <a name="SubnetConfig" id="@cdktf/provider-aws.subnet.SubnetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.subnet.SubnetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.subnet.SubnetConfig;

SubnetConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .vpcId(java.lang.String)
//  .assignIpv6AddressOnCreation(java.lang.Boolean)
//  .assignIpv6AddressOnCreation(IResolvable)
//  .availabilityZone(java.lang.String)
//  .availabilityZoneId(java.lang.String)
//  .cidrBlock(java.lang.String)
//  .customerOwnedIpv4Pool(java.lang.String)
//  .enableDns64(java.lang.Boolean)
//  .enableDns64(IResolvable)
//  .enableResourceNameDnsAaaaRecordOnLaunch(java.lang.Boolean)
//  .enableResourceNameDnsAaaaRecordOnLaunch(IResolvable)
//  .enableResourceNameDnsARecordOnLaunch(java.lang.Boolean)
//  .enableResourceNameDnsARecordOnLaunch(IResolvable)
//  .id(java.lang.String)
//  .ipv6CidrBlock(java.lang.String)
//  .ipv6Native(java.lang.Boolean)
//  .ipv6Native(IResolvable)
//  .mapCustomerOwnedIpOnLaunch(java.lang.Boolean)
//  .mapCustomerOwnedIpOnLaunch(IResolvable)
//  .mapPublicIpOnLaunch(java.lang.Boolean)
//  .mapPublicIpOnLaunch(IResolvable)
//  .outpostArn(java.lang.String)
//  .privateDnsHostnameTypeOnLaunch(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SubnetTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#vpc_id Subnet#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.assignIpv6AddressOnCreation">assignIpv6AddressOnCreation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#assign_ipv6_address_on_creation Subnet#assign_ipv6_address_on_creation}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#availability_zone Subnet#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.availabilityZoneId">availabilityZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#availability_zone_id Subnet#availability_zone_id}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#cidr_block Subnet#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.customerOwnedIpv4Pool">customerOwnedIpv4Pool</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#customer_owned_ipv4_pool Subnet#customer_owned_ipv4_pool}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.enableDns64">enableDns64</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#enable_dns64 Subnet#enable_dns64}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.enableResourceNameDnsAaaaRecordOnLaunch">enableResourceNameDnsAaaaRecordOnLaunch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#enable_resource_name_dns_aaaa_record_on_launch Subnet#enable_resource_name_dns_aaaa_record_on_launch}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.enableResourceNameDnsARecordOnLaunch">enableResourceNameDnsARecordOnLaunch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#enable_resource_name_dns_a_record_on_launch Subnet#enable_resource_name_dns_a_record_on_launch}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#id Subnet#id}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#ipv6_cidr_block Subnet#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.ipv6Native">ipv6Native</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#ipv6_native Subnet#ipv6_native}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.mapCustomerOwnedIpOnLaunch">mapCustomerOwnedIpOnLaunch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#map_customer_owned_ip_on_launch Subnet#map_customer_owned_ip_on_launch}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.mapPublicIpOnLaunch">mapPublicIpOnLaunch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#map_public_ip_on_launch Subnet#map_public_ip_on_launch}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.outpostArn">outpostArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#outpost_arn Subnet#outpost_arn}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.privateDnsHostnameTypeOnLaunch">privateDnsHostnameTypeOnLaunch</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#private_dns_hostname_type_on_launch Subnet#private_dns_hostname_type_on_launch}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#tags Subnet#tags}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#tags_all Subnet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeouts">SubnetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.subnet.SubnetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.subnet.SubnetConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.subnet.SubnetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.subnet.SubnetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.subnet.SubnetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.subnet.SubnetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.subnet.SubnetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.subnet.SubnetConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#vpc_id Subnet#vpc_id}.

---

##### `assignIpv6AddressOnCreation`<sup>Optional</sup> <a name="assignIpv6AddressOnCreation" id="@cdktf/provider-aws.subnet.SubnetConfig.property.assignIpv6AddressOnCreation"></a>

```java
public java.lang.Object getAssignIpv6AddressOnCreation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#assign_ipv6_address_on_creation Subnet#assign_ipv6_address_on_creation}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-aws.subnet.SubnetConfig.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#availability_zone Subnet#availability_zone}.

---

##### `availabilityZoneId`<sup>Optional</sup> <a name="availabilityZoneId" id="@cdktf/provider-aws.subnet.SubnetConfig.property.availabilityZoneId"></a>

```java
public java.lang.String getAvailabilityZoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#availability_zone_id Subnet#availability_zone_id}.

---

##### `cidrBlock`<sup>Optional</sup> <a name="cidrBlock" id="@cdktf/provider-aws.subnet.SubnetConfig.property.cidrBlock"></a>

```java
public java.lang.String getCidrBlock();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#cidr_block Subnet#cidr_block}.

---

##### `customerOwnedIpv4Pool`<sup>Optional</sup> <a name="customerOwnedIpv4Pool" id="@cdktf/provider-aws.subnet.SubnetConfig.property.customerOwnedIpv4Pool"></a>

```java
public java.lang.String getCustomerOwnedIpv4Pool();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#customer_owned_ipv4_pool Subnet#customer_owned_ipv4_pool}.

---

##### `enableDns64`<sup>Optional</sup> <a name="enableDns64" id="@cdktf/provider-aws.subnet.SubnetConfig.property.enableDns64"></a>

```java
public java.lang.Object getEnableDns64();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#enable_dns64 Subnet#enable_dns64}.

---

##### `enableResourceNameDnsAaaaRecordOnLaunch`<sup>Optional</sup> <a name="enableResourceNameDnsAaaaRecordOnLaunch" id="@cdktf/provider-aws.subnet.SubnetConfig.property.enableResourceNameDnsAaaaRecordOnLaunch"></a>

```java
public java.lang.Object getEnableResourceNameDnsAaaaRecordOnLaunch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#enable_resource_name_dns_aaaa_record_on_launch Subnet#enable_resource_name_dns_aaaa_record_on_launch}.

---

##### `enableResourceNameDnsARecordOnLaunch`<sup>Optional</sup> <a name="enableResourceNameDnsARecordOnLaunch" id="@cdktf/provider-aws.subnet.SubnetConfig.property.enableResourceNameDnsARecordOnLaunch"></a>

```java
public java.lang.Object getEnableResourceNameDnsARecordOnLaunch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#enable_resource_name_dns_a_record_on_launch Subnet#enable_resource_name_dns_a_record_on_launch}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.subnet.SubnetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#id Subnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6CidrBlock`<sup>Optional</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-aws.subnet.SubnetConfig.property.ipv6CidrBlock"></a>

```java
public java.lang.String getIpv6CidrBlock();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#ipv6_cidr_block Subnet#ipv6_cidr_block}.

---

##### `ipv6Native`<sup>Optional</sup> <a name="ipv6Native" id="@cdktf/provider-aws.subnet.SubnetConfig.property.ipv6Native"></a>

```java
public java.lang.Object getIpv6Native();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#ipv6_native Subnet#ipv6_native}.

---

##### `mapCustomerOwnedIpOnLaunch`<sup>Optional</sup> <a name="mapCustomerOwnedIpOnLaunch" id="@cdktf/provider-aws.subnet.SubnetConfig.property.mapCustomerOwnedIpOnLaunch"></a>

```java
public java.lang.Object getMapCustomerOwnedIpOnLaunch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#map_customer_owned_ip_on_launch Subnet#map_customer_owned_ip_on_launch}.

---

##### `mapPublicIpOnLaunch`<sup>Optional</sup> <a name="mapPublicIpOnLaunch" id="@cdktf/provider-aws.subnet.SubnetConfig.property.mapPublicIpOnLaunch"></a>

```java
public java.lang.Object getMapPublicIpOnLaunch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#map_public_ip_on_launch Subnet#map_public_ip_on_launch}.

---

##### `outpostArn`<sup>Optional</sup> <a name="outpostArn" id="@cdktf/provider-aws.subnet.SubnetConfig.property.outpostArn"></a>

```java
public java.lang.String getOutpostArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#outpost_arn Subnet#outpost_arn}.

---

##### `privateDnsHostnameTypeOnLaunch`<sup>Optional</sup> <a name="privateDnsHostnameTypeOnLaunch" id="@cdktf/provider-aws.subnet.SubnetConfig.property.privateDnsHostnameTypeOnLaunch"></a>

```java
public java.lang.String getPrivateDnsHostnameTypeOnLaunch();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#private_dns_hostname_type_on_launch Subnet#private_dns_hostname_type_on_launch}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.subnet.SubnetConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#tags Subnet#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.subnet.SubnetConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#tags_all Subnet#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.subnet.SubnetConfig.property.timeouts"></a>

```java
public SubnetTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.subnet.SubnetTimeouts">SubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#timeouts Subnet#timeouts}

---

### SubnetTimeouts <a name="SubnetTimeouts" id="@cdktf/provider-aws.subnet.SubnetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.subnet.SubnetTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.subnet.SubnetTimeouts;

SubnetTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#create Subnet#create}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#delete Subnet#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.subnet.SubnetTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#create Subnet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.subnet.SubnetTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#delete Subnet#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SubnetTimeoutsOutputReference <a name="SubnetTimeoutsOutputReference" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.subnet.SubnetTimeoutsOutputReference;

new SubnetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeouts">SubnetTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.subnet.SubnetTimeouts">SubnetTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



