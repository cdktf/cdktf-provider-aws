# `subnet` Submodule <a name="`subnet` Submodule" id="@cdktf/provider-aws.subnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Subnet <a name="Subnet" id="@cdktf/provider-aws.subnet.Subnet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/subnet aws_subnet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.subnet.Subnet.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import subnet

subnet.Subnet(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  vpc_id: str,
  assign_ipv6_address_on_creation: typing.Union[bool, IResolvable] = None,
  availability_zone: str = None,
  availability_zone_id: str = None,
  cidr_block: str = None,
  customer_owned_ipv4_pool: str = None,
  enable_dns64: typing.Union[bool, IResolvable] = None,
  enable_resource_name_dns_aaaa_record_on_launch: typing.Union[bool, IResolvable] = None,
  enable_resource_name_dns_a_record_on_launch: typing.Union[bool, IResolvable] = None,
  id: str = None,
  ipv6_cidr_block: str = None,
  ipv6_native: typing.Union[bool, IResolvable] = None,
  map_customer_owned_ip_on_launch: typing.Union[bool, IResolvable] = None,
  map_public_ip_on_launch: typing.Union[bool, IResolvable] = None,
  outpost_arn: str = None,
  private_dns_hostname_type_on_launch: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: SubnetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#vpc_id Subnet#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.assignIpv6AddressOnCreation">assign_ipv6_address_on_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#assign_ipv6_address_on_creation Subnet#assign_ipv6_address_on_creation}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#availability_zone Subnet#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#availability_zone_id Subnet#availability_zone_id}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.cidrBlock">cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#cidr_block Subnet#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.customerOwnedIpv4Pool">customer_owned_ipv4_pool</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#customer_owned_ipv4_pool Subnet#customer_owned_ipv4_pool}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.enableDns64">enable_dns64</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#enable_dns64 Subnet#enable_dns64}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.enableResourceNameDnsAaaaRecordOnLaunch">enable_resource_name_dns_aaaa_record_on_launch</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#enable_resource_name_dns_aaaa_record_on_launch Subnet#enable_resource_name_dns_aaaa_record_on_launch}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.enableResourceNameDnsARecordOnLaunch">enable_resource_name_dns_a_record_on_launch</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#enable_resource_name_dns_a_record_on_launch Subnet#enable_resource_name_dns_a_record_on_launch}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#id Subnet#id}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#ipv6_cidr_block Subnet#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.ipv6Native">ipv6_native</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#ipv6_native Subnet#ipv6_native}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.mapCustomerOwnedIpOnLaunch">map_customer_owned_ip_on_launch</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#map_customer_owned_ip_on_launch Subnet#map_customer_owned_ip_on_launch}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.mapPublicIpOnLaunch">map_public_ip_on_launch</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#map_public_ip_on_launch Subnet#map_public_ip_on_launch}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.outpostArn">outpost_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#outpost_arn Subnet#outpost_arn}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.privateDnsHostnameTypeOnLaunch">private_dns_hostname_type_on_launch</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#private_dns_hostname_type_on_launch Subnet#private_dns_hostname_type_on_launch}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#tags Subnet#tags}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#tags_all Subnet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeouts">SubnetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#vpc_id Subnet#vpc_id}.

---

##### `assign_ipv6_address_on_creation`<sup>Optional</sup> <a name="assign_ipv6_address_on_creation" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.assignIpv6AddressOnCreation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#assign_ipv6_address_on_creation Subnet#assign_ipv6_address_on_creation}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#availability_zone Subnet#availability_zone}.

---

##### `availability_zone_id`<sup>Optional</sup> <a name="availability_zone_id" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.availabilityZoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#availability_zone_id Subnet#availability_zone_id}.

---

##### `cidr_block`<sup>Optional</sup> <a name="cidr_block" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.cidrBlock"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#cidr_block Subnet#cidr_block}.

---

##### `customer_owned_ipv4_pool`<sup>Optional</sup> <a name="customer_owned_ipv4_pool" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.customerOwnedIpv4Pool"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#customer_owned_ipv4_pool Subnet#customer_owned_ipv4_pool}.

---

##### `enable_dns64`<sup>Optional</sup> <a name="enable_dns64" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.enableDns64"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#enable_dns64 Subnet#enable_dns64}.

---

##### `enable_resource_name_dns_aaaa_record_on_launch`<sup>Optional</sup> <a name="enable_resource_name_dns_aaaa_record_on_launch" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.enableResourceNameDnsAaaaRecordOnLaunch"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#enable_resource_name_dns_aaaa_record_on_launch Subnet#enable_resource_name_dns_aaaa_record_on_launch}.

---

##### `enable_resource_name_dns_a_record_on_launch`<sup>Optional</sup> <a name="enable_resource_name_dns_a_record_on_launch" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.enableResourceNameDnsARecordOnLaunch"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#enable_resource_name_dns_a_record_on_launch Subnet#enable_resource_name_dns_a_record_on_launch}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#id Subnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6_cidr_block`<sup>Optional</sup> <a name="ipv6_cidr_block" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.ipv6CidrBlock"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#ipv6_cidr_block Subnet#ipv6_cidr_block}.

---

##### `ipv6_native`<sup>Optional</sup> <a name="ipv6_native" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.ipv6Native"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#ipv6_native Subnet#ipv6_native}.

---

##### `map_customer_owned_ip_on_launch`<sup>Optional</sup> <a name="map_customer_owned_ip_on_launch" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.mapCustomerOwnedIpOnLaunch"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#map_customer_owned_ip_on_launch Subnet#map_customer_owned_ip_on_launch}.

---

##### `map_public_ip_on_launch`<sup>Optional</sup> <a name="map_public_ip_on_launch" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.mapPublicIpOnLaunch"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#map_public_ip_on_launch Subnet#map_public_ip_on_launch}.

---

##### `outpost_arn`<sup>Optional</sup> <a name="outpost_arn" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.outpostArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#outpost_arn Subnet#outpost_arn}.

---

##### `private_dns_hostname_type_on_launch`<sup>Optional</sup> <a name="private_dns_hostname_type_on_launch" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.privateDnsHostnameTypeOnLaunch"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#private_dns_hostname_type_on_launch Subnet#private_dns_hostname_type_on_launch}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#tags Subnet#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.subnet.Subnet.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

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
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetAssignIpv6AddressOnCreation">reset_assign_ipv6_address_on_creation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetAvailabilityZoneId">reset_availability_zone_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetCidrBlock">reset_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetCustomerOwnedIpv4Pool">reset_customer_owned_ipv4_pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetEnableDns64">reset_enable_dns64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetEnableResourceNameDnsAaaaRecordOnLaunch">reset_enable_resource_name_dns_aaaa_record_on_launch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetEnableResourceNameDnsARecordOnLaunch">reset_enable_resource_name_dns_a_record_on_launch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetIpv6CidrBlock">reset_ipv6_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetIpv6Native">reset_ipv6_native</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetMapCustomerOwnedIpOnLaunch">reset_map_customer_owned_ip_on_launch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetMapPublicIpOnLaunch">reset_map_public_ip_on_launch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetOutpostArn">reset_outpost_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetPrivateDnsHostnameTypeOnLaunch">reset_private_dns_hostname_type_on_launch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.subnet.Subnet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.subnet.Subnet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.subnet.Subnet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.subnet.Subnet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.subnet.Subnet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.subnet.Subnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.subnet.Subnet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.subnet.Subnet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.subnet.Subnet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.subnet.Subnet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.subnet.Subnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.subnet.Subnet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.subnet.Subnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.subnet.Subnet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.subnet.Subnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.subnet.Subnet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.subnet.Subnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.subnet.Subnet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.subnet.Subnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.subnet.Subnet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.subnet.Subnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.subnet.Subnet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.subnet.Subnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.subnet.Subnet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.subnet.Subnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.subnet.Subnet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.subnet.Subnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.subnet.Subnet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.subnet.Subnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.subnet.Subnet.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.subnet.Subnet.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#create Subnet#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.subnet.Subnet.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#delete Subnet#delete}.

---

##### `reset_assign_ipv6_address_on_creation` <a name="reset_assign_ipv6_address_on_creation" id="@cdktf/provider-aws.subnet.Subnet.resetAssignIpv6AddressOnCreation"></a>

```python
def reset_assign_ipv6_address_on_creation() -> None
```

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktf/provider-aws.subnet.Subnet.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_availability_zone_id` <a name="reset_availability_zone_id" id="@cdktf/provider-aws.subnet.Subnet.resetAvailabilityZoneId"></a>

```python
def reset_availability_zone_id() -> None
```

##### `reset_cidr_block` <a name="reset_cidr_block" id="@cdktf/provider-aws.subnet.Subnet.resetCidrBlock"></a>

```python
def reset_cidr_block() -> None
```

##### `reset_customer_owned_ipv4_pool` <a name="reset_customer_owned_ipv4_pool" id="@cdktf/provider-aws.subnet.Subnet.resetCustomerOwnedIpv4Pool"></a>

```python
def reset_customer_owned_ipv4_pool() -> None
```

##### `reset_enable_dns64` <a name="reset_enable_dns64" id="@cdktf/provider-aws.subnet.Subnet.resetEnableDns64"></a>

```python
def reset_enable_dns64() -> None
```

##### `reset_enable_resource_name_dns_aaaa_record_on_launch` <a name="reset_enable_resource_name_dns_aaaa_record_on_launch" id="@cdktf/provider-aws.subnet.Subnet.resetEnableResourceNameDnsAaaaRecordOnLaunch"></a>

```python
def reset_enable_resource_name_dns_aaaa_record_on_launch() -> None
```

##### `reset_enable_resource_name_dns_a_record_on_launch` <a name="reset_enable_resource_name_dns_a_record_on_launch" id="@cdktf/provider-aws.subnet.Subnet.resetEnableResourceNameDnsARecordOnLaunch"></a>

```python
def reset_enable_resource_name_dns_a_record_on_launch() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.subnet.Subnet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ipv6_cidr_block` <a name="reset_ipv6_cidr_block" id="@cdktf/provider-aws.subnet.Subnet.resetIpv6CidrBlock"></a>

```python
def reset_ipv6_cidr_block() -> None
```

##### `reset_ipv6_native` <a name="reset_ipv6_native" id="@cdktf/provider-aws.subnet.Subnet.resetIpv6Native"></a>

```python
def reset_ipv6_native() -> None
```

##### `reset_map_customer_owned_ip_on_launch` <a name="reset_map_customer_owned_ip_on_launch" id="@cdktf/provider-aws.subnet.Subnet.resetMapCustomerOwnedIpOnLaunch"></a>

```python
def reset_map_customer_owned_ip_on_launch() -> None
```

##### `reset_map_public_ip_on_launch` <a name="reset_map_public_ip_on_launch" id="@cdktf/provider-aws.subnet.Subnet.resetMapPublicIpOnLaunch"></a>

```python
def reset_map_public_ip_on_launch() -> None
```

##### `reset_outpost_arn` <a name="reset_outpost_arn" id="@cdktf/provider-aws.subnet.Subnet.resetOutpostArn"></a>

```python
def reset_outpost_arn() -> None
```

##### `reset_private_dns_hostname_type_on_launch` <a name="reset_private_dns_hostname_type_on_launch" id="@cdktf/provider-aws.subnet.Subnet.resetPrivateDnsHostnameTypeOnLaunch"></a>

```python
def reset_private_dns_hostname_type_on_launch() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.subnet.Subnet.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.subnet.Subnet.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.subnet.Subnet.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.subnet.Subnet.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import subnet

subnet.Subnet.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.subnet.Subnet.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import subnet

subnet.Subnet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.subnet.Subnet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.subnet.Subnet.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import subnet

subnet.Subnet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.subnet.Subnet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.ipv6CidrBlockAssociationId">ipv6_cidr_block_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference">SubnetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.assignIpv6AddressOnCreationInput">assign_ipv6_address_on_creation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.availabilityZoneIdInput">availability_zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.cidrBlockInput">cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.customerOwnedIpv4PoolInput">customer_owned_ipv4_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.enableDns64Input">enable_dns64_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.enableResourceNameDnsAaaaRecordOnLaunchInput">enable_resource_name_dns_aaaa_record_on_launch_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.enableResourceNameDnsARecordOnLaunchInput">enable_resource_name_dns_a_record_on_launch_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.ipv6CidrBlockInput">ipv6_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.ipv6NativeInput">ipv6_native_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.mapCustomerOwnedIpOnLaunchInput">map_customer_owned_ip_on_launch_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.mapPublicIpOnLaunchInput">map_public_ip_on_launch_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.outpostArnInput">outpost_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.privateDnsHostnameTypeOnLaunchInput">private_dns_hostname_type_on_launch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.subnet.SubnetTimeouts">SubnetTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.assignIpv6AddressOnCreation">assign_ipv6_address_on_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.customerOwnedIpv4Pool">customer_owned_ipv4_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.enableDns64">enable_dns64</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.enableResourceNameDnsAaaaRecordOnLaunch">enable_resource_name_dns_aaaa_record_on_launch</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.enableResourceNameDnsARecordOnLaunch">enable_resource_name_dns_a_record_on_launch</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.ipv6Native">ipv6_native</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.mapCustomerOwnedIpOnLaunch">map_customer_owned_ip_on_launch</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.mapPublicIpOnLaunch">map_public_ip_on_launch</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.outpostArn">outpost_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.privateDnsHostnameTypeOnLaunch">private_dns_hostname_type_on_launch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.subnet.Subnet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.subnet.Subnet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.subnet.Subnet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.subnet.Subnet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.subnet.Subnet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.subnet.Subnet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.subnet.Subnet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.subnet.Subnet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.subnet.Subnet.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.subnet.Subnet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.subnet.Subnet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.subnet.Subnet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.subnet.Subnet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.subnet.Subnet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.subnet.Subnet.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `ipv6_cidr_block_association_id`<sup>Required</sup> <a name="ipv6_cidr_block_association_id" id="@cdktf/provider-aws.subnet.Subnet.property.ipv6CidrBlockAssociationId"></a>

```python
ipv6_cidr_block_association_id: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.subnet.Subnet.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.subnet.Subnet.property.timeouts"></a>

```python
timeouts: SubnetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference">SubnetTimeoutsOutputReference</a>

---

##### `assign_ipv6_address_on_creation_input`<sup>Optional</sup> <a name="assign_ipv6_address_on_creation_input" id="@cdktf/provider-aws.subnet.Subnet.property.assignIpv6AddressOnCreationInput"></a>

```python
assign_ipv6_address_on_creation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `availability_zone_id_input`<sup>Optional</sup> <a name="availability_zone_id_input" id="@cdktf/provider-aws.subnet.Subnet.property.availabilityZoneIdInput"></a>

```python
availability_zone_id_input: str
```

- *Type:* str

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-aws.subnet.Subnet.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `cidr_block_input`<sup>Optional</sup> <a name="cidr_block_input" id="@cdktf/provider-aws.subnet.Subnet.property.cidrBlockInput"></a>

```python
cidr_block_input: str
```

- *Type:* str

---

##### `customer_owned_ipv4_pool_input`<sup>Optional</sup> <a name="customer_owned_ipv4_pool_input" id="@cdktf/provider-aws.subnet.Subnet.property.customerOwnedIpv4PoolInput"></a>

```python
customer_owned_ipv4_pool_input: str
```

- *Type:* str

---

##### `enable_dns64_input`<sup>Optional</sup> <a name="enable_dns64_input" id="@cdktf/provider-aws.subnet.Subnet.property.enableDns64Input"></a>

```python
enable_dns64_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_resource_name_dns_aaaa_record_on_launch_input`<sup>Optional</sup> <a name="enable_resource_name_dns_aaaa_record_on_launch_input" id="@cdktf/provider-aws.subnet.Subnet.property.enableResourceNameDnsAaaaRecordOnLaunchInput"></a>

```python
enable_resource_name_dns_aaaa_record_on_launch_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_resource_name_dns_a_record_on_launch_input`<sup>Optional</sup> <a name="enable_resource_name_dns_a_record_on_launch_input" id="@cdktf/provider-aws.subnet.Subnet.property.enableResourceNameDnsARecordOnLaunchInput"></a>

```python
enable_resource_name_dns_a_record_on_launch_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.subnet.Subnet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ipv6_cidr_block_input`<sup>Optional</sup> <a name="ipv6_cidr_block_input" id="@cdktf/provider-aws.subnet.Subnet.property.ipv6CidrBlockInput"></a>

```python
ipv6_cidr_block_input: str
```

- *Type:* str

---

##### `ipv6_native_input`<sup>Optional</sup> <a name="ipv6_native_input" id="@cdktf/provider-aws.subnet.Subnet.property.ipv6NativeInput"></a>

```python
ipv6_native_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `map_customer_owned_ip_on_launch_input`<sup>Optional</sup> <a name="map_customer_owned_ip_on_launch_input" id="@cdktf/provider-aws.subnet.Subnet.property.mapCustomerOwnedIpOnLaunchInput"></a>

```python
map_customer_owned_ip_on_launch_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `map_public_ip_on_launch_input`<sup>Optional</sup> <a name="map_public_ip_on_launch_input" id="@cdktf/provider-aws.subnet.Subnet.property.mapPublicIpOnLaunchInput"></a>

```python
map_public_ip_on_launch_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `outpost_arn_input`<sup>Optional</sup> <a name="outpost_arn_input" id="@cdktf/provider-aws.subnet.Subnet.property.outpostArnInput"></a>

```python
outpost_arn_input: str
```

- *Type:* str

---

##### `private_dns_hostname_type_on_launch_input`<sup>Optional</sup> <a name="private_dns_hostname_type_on_launch_input" id="@cdktf/provider-aws.subnet.Subnet.property.privateDnsHostnameTypeOnLaunchInput"></a>

```python
private_dns_hostname_type_on_launch_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.subnet.Subnet.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.subnet.Subnet.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.subnet.Subnet.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[SubnetTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.subnet.SubnetTimeouts">SubnetTimeouts</a>, cdktf.IResolvable]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-aws.subnet.Subnet.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `assign_ipv6_address_on_creation`<sup>Required</sup> <a name="assign_ipv6_address_on_creation" id="@cdktf/provider-aws.subnet.Subnet.property.assignIpv6AddressOnCreation"></a>

```python
assign_ipv6_address_on_creation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-aws.subnet.Subnet.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `availability_zone_id`<sup>Required</sup> <a name="availability_zone_id" id="@cdktf/provider-aws.subnet.Subnet.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="@cdktf/provider-aws.subnet.Subnet.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `customer_owned_ipv4_pool`<sup>Required</sup> <a name="customer_owned_ipv4_pool" id="@cdktf/provider-aws.subnet.Subnet.property.customerOwnedIpv4Pool"></a>

```python
customer_owned_ipv4_pool: str
```

- *Type:* str

---

##### `enable_dns64`<sup>Required</sup> <a name="enable_dns64" id="@cdktf/provider-aws.subnet.Subnet.property.enableDns64"></a>

```python
enable_dns64: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_resource_name_dns_aaaa_record_on_launch`<sup>Required</sup> <a name="enable_resource_name_dns_aaaa_record_on_launch" id="@cdktf/provider-aws.subnet.Subnet.property.enableResourceNameDnsAaaaRecordOnLaunch"></a>

```python
enable_resource_name_dns_aaaa_record_on_launch: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_resource_name_dns_a_record_on_launch`<sup>Required</sup> <a name="enable_resource_name_dns_a_record_on_launch" id="@cdktf/provider-aws.subnet.Subnet.property.enableResourceNameDnsARecordOnLaunch"></a>

```python
enable_resource_name_dns_a_record_on_launch: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.subnet.Subnet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ipv6_cidr_block`<sup>Required</sup> <a name="ipv6_cidr_block" id="@cdktf/provider-aws.subnet.Subnet.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

---

##### `ipv6_native`<sup>Required</sup> <a name="ipv6_native" id="@cdktf/provider-aws.subnet.Subnet.property.ipv6Native"></a>

```python
ipv6_native: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `map_customer_owned_ip_on_launch`<sup>Required</sup> <a name="map_customer_owned_ip_on_launch" id="@cdktf/provider-aws.subnet.Subnet.property.mapCustomerOwnedIpOnLaunch"></a>

```python
map_customer_owned_ip_on_launch: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `map_public_ip_on_launch`<sup>Required</sup> <a name="map_public_ip_on_launch" id="@cdktf/provider-aws.subnet.Subnet.property.mapPublicIpOnLaunch"></a>

```python
map_public_ip_on_launch: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `outpost_arn`<sup>Required</sup> <a name="outpost_arn" id="@cdktf/provider-aws.subnet.Subnet.property.outpostArn"></a>

```python
outpost_arn: str
```

- *Type:* str

---

##### `private_dns_hostname_type_on_launch`<sup>Required</sup> <a name="private_dns_hostname_type_on_launch" id="@cdktf/provider-aws.subnet.Subnet.property.privateDnsHostnameTypeOnLaunch"></a>

```python
private_dns_hostname_type_on_launch: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.subnet.Subnet.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.subnet.Subnet.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.subnet.Subnet.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.subnet.Subnet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.subnet.Subnet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SubnetConfig <a name="SubnetConfig" id="@cdktf/provider-aws.subnet.SubnetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.subnet.SubnetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import subnet

subnet.SubnetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  vpc_id: str,
  assign_ipv6_address_on_creation: typing.Union[bool, IResolvable] = None,
  availability_zone: str = None,
  availability_zone_id: str = None,
  cidr_block: str = None,
  customer_owned_ipv4_pool: str = None,
  enable_dns64: typing.Union[bool, IResolvable] = None,
  enable_resource_name_dns_aaaa_record_on_launch: typing.Union[bool, IResolvable] = None,
  enable_resource_name_dns_a_record_on_launch: typing.Union[bool, IResolvable] = None,
  id: str = None,
  ipv6_cidr_block: str = None,
  ipv6_native: typing.Union[bool, IResolvable] = None,
  map_customer_owned_ip_on_launch: typing.Union[bool, IResolvable] = None,
  map_public_ip_on_launch: typing.Union[bool, IResolvable] = None,
  outpost_arn: str = None,
  private_dns_hostname_type_on_launch: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: SubnetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#vpc_id Subnet#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.assignIpv6AddressOnCreation">assign_ipv6_address_on_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#assign_ipv6_address_on_creation Subnet#assign_ipv6_address_on_creation}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#availability_zone Subnet#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#availability_zone_id Subnet#availability_zone_id}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.cidrBlock">cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#cidr_block Subnet#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.customerOwnedIpv4Pool">customer_owned_ipv4_pool</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#customer_owned_ipv4_pool Subnet#customer_owned_ipv4_pool}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.enableDns64">enable_dns64</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#enable_dns64 Subnet#enable_dns64}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.enableResourceNameDnsAaaaRecordOnLaunch">enable_resource_name_dns_aaaa_record_on_launch</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#enable_resource_name_dns_aaaa_record_on_launch Subnet#enable_resource_name_dns_aaaa_record_on_launch}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.enableResourceNameDnsARecordOnLaunch">enable_resource_name_dns_a_record_on_launch</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#enable_resource_name_dns_a_record_on_launch Subnet#enable_resource_name_dns_a_record_on_launch}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#id Subnet#id}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#ipv6_cidr_block Subnet#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.ipv6Native">ipv6_native</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#ipv6_native Subnet#ipv6_native}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.mapCustomerOwnedIpOnLaunch">map_customer_owned_ip_on_launch</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#map_customer_owned_ip_on_launch Subnet#map_customer_owned_ip_on_launch}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.mapPublicIpOnLaunch">map_public_ip_on_launch</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#map_public_ip_on_launch Subnet#map_public_ip_on_launch}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.outpostArn">outpost_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#outpost_arn Subnet#outpost_arn}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.privateDnsHostnameTypeOnLaunch">private_dns_hostname_type_on_launch</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#private_dns_hostname_type_on_launch Subnet#private_dns_hostname_type_on_launch}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#tags Subnet#tags}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#tags_all Subnet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeouts">SubnetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.subnet.SubnetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.subnet.SubnetConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.subnet.SubnetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.subnet.SubnetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.subnet.SubnetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.subnet.SubnetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.subnet.SubnetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.subnet.SubnetConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#vpc_id Subnet#vpc_id}.

---

##### `assign_ipv6_address_on_creation`<sup>Optional</sup> <a name="assign_ipv6_address_on_creation" id="@cdktf/provider-aws.subnet.SubnetConfig.property.assignIpv6AddressOnCreation"></a>

```python
assign_ipv6_address_on_creation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#assign_ipv6_address_on_creation Subnet#assign_ipv6_address_on_creation}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-aws.subnet.SubnetConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#availability_zone Subnet#availability_zone}.

---

##### `availability_zone_id`<sup>Optional</sup> <a name="availability_zone_id" id="@cdktf/provider-aws.subnet.SubnetConfig.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#availability_zone_id Subnet#availability_zone_id}.

---

##### `cidr_block`<sup>Optional</sup> <a name="cidr_block" id="@cdktf/provider-aws.subnet.SubnetConfig.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#cidr_block Subnet#cidr_block}.

---

##### `customer_owned_ipv4_pool`<sup>Optional</sup> <a name="customer_owned_ipv4_pool" id="@cdktf/provider-aws.subnet.SubnetConfig.property.customerOwnedIpv4Pool"></a>

```python
customer_owned_ipv4_pool: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#customer_owned_ipv4_pool Subnet#customer_owned_ipv4_pool}.

---

##### `enable_dns64`<sup>Optional</sup> <a name="enable_dns64" id="@cdktf/provider-aws.subnet.SubnetConfig.property.enableDns64"></a>

```python
enable_dns64: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#enable_dns64 Subnet#enable_dns64}.

---

##### `enable_resource_name_dns_aaaa_record_on_launch`<sup>Optional</sup> <a name="enable_resource_name_dns_aaaa_record_on_launch" id="@cdktf/provider-aws.subnet.SubnetConfig.property.enableResourceNameDnsAaaaRecordOnLaunch"></a>

```python
enable_resource_name_dns_aaaa_record_on_launch: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#enable_resource_name_dns_aaaa_record_on_launch Subnet#enable_resource_name_dns_aaaa_record_on_launch}.

---

##### `enable_resource_name_dns_a_record_on_launch`<sup>Optional</sup> <a name="enable_resource_name_dns_a_record_on_launch" id="@cdktf/provider-aws.subnet.SubnetConfig.property.enableResourceNameDnsARecordOnLaunch"></a>

```python
enable_resource_name_dns_a_record_on_launch: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#enable_resource_name_dns_a_record_on_launch Subnet#enable_resource_name_dns_a_record_on_launch}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.subnet.SubnetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#id Subnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6_cidr_block`<sup>Optional</sup> <a name="ipv6_cidr_block" id="@cdktf/provider-aws.subnet.SubnetConfig.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#ipv6_cidr_block Subnet#ipv6_cidr_block}.

---

##### `ipv6_native`<sup>Optional</sup> <a name="ipv6_native" id="@cdktf/provider-aws.subnet.SubnetConfig.property.ipv6Native"></a>

```python
ipv6_native: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#ipv6_native Subnet#ipv6_native}.

---

##### `map_customer_owned_ip_on_launch`<sup>Optional</sup> <a name="map_customer_owned_ip_on_launch" id="@cdktf/provider-aws.subnet.SubnetConfig.property.mapCustomerOwnedIpOnLaunch"></a>

```python
map_customer_owned_ip_on_launch: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#map_customer_owned_ip_on_launch Subnet#map_customer_owned_ip_on_launch}.

---

##### `map_public_ip_on_launch`<sup>Optional</sup> <a name="map_public_ip_on_launch" id="@cdktf/provider-aws.subnet.SubnetConfig.property.mapPublicIpOnLaunch"></a>

```python
map_public_ip_on_launch: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#map_public_ip_on_launch Subnet#map_public_ip_on_launch}.

---

##### `outpost_arn`<sup>Optional</sup> <a name="outpost_arn" id="@cdktf/provider-aws.subnet.SubnetConfig.property.outpostArn"></a>

```python
outpost_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#outpost_arn Subnet#outpost_arn}.

---

##### `private_dns_hostname_type_on_launch`<sup>Optional</sup> <a name="private_dns_hostname_type_on_launch" id="@cdktf/provider-aws.subnet.SubnetConfig.property.privateDnsHostnameTypeOnLaunch"></a>

```python
private_dns_hostname_type_on_launch: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#private_dns_hostname_type_on_launch Subnet#private_dns_hostname_type_on_launch}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.subnet.SubnetConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#tags Subnet#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.subnet.SubnetConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#tags_all Subnet#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.subnet.SubnetConfig.property.timeouts"></a>

```python
timeouts: SubnetTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.subnet.SubnetTimeouts">SubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#timeouts Subnet#timeouts}

---

### SubnetTimeouts <a name="SubnetTimeouts" id="@cdktf/provider-aws.subnet.SubnetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.subnet.SubnetTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import subnet

subnet.SubnetTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#create Subnet#create}. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#delete Subnet#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.subnet.SubnetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#create Subnet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.subnet.SubnetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet#delete Subnet#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SubnetTimeoutsOutputReference <a name="SubnetTimeoutsOutputReference" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import subnet

subnet.SubnetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.subnet.SubnetTimeouts">SubnetTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.subnet.SubnetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SubnetTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.subnet.SubnetTimeouts">SubnetTimeouts</a>, cdktf.IResolvable]

---



