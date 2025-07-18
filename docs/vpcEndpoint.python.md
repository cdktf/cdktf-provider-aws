# `vpcEndpoint` Submodule <a name="`vpcEndpoint` Submodule" id="@cdktf/provider-aws.vpcEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcEndpoint <a name="VpcEndpoint" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint aws_vpc_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_endpoint

vpcEndpoint.VpcEndpoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  vpc_id: str,
  auto_accept: typing.Union[bool, IResolvable] = None,
  dns_options: VpcEndpointDnsOptions = None,
  id: str = None,
  ip_address_type: str = None,
  policy: str = None,
  private_dns_enabled: typing.Union[bool, IResolvable] = None,
  region: str = None,
  resource_configuration_arn: str = None,
  route_table_ids: typing.List[str] = None,
  security_group_ids: typing.List[str] = None,
  service_name: str = None,
  service_network_arn: str = None,
  service_region: str = None,
  subnet_configuration: typing.Union[IResolvable, typing.List[VpcEndpointSubnetConfiguration]] = None,
  subnet_ids: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: VpcEndpointTimeouts = None,
  vpc_endpoint_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#vpc_id VpcEndpoint#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.autoAccept">auto_accept</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#auto_accept VpcEndpoint#auto_accept}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.dnsOptions">dns_options</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptions">VpcEndpointDnsOptions</a></code> | dns_options block. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#id VpcEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.ipAddressType">ip_address_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#ip_address_type VpcEndpoint#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#policy VpcEndpoint#policy}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.privateDnsEnabled">private_dns_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#private_dns_enabled VpcEndpoint#private_dns_enabled}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.resourceConfigurationArn">resource_configuration_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#resource_configuration_arn VpcEndpoint#resource_configuration_arn}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.routeTableIds">route_table_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#route_table_ids VpcEndpoint#route_table_ids}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#security_group_ids VpcEndpoint#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#service_name VpcEndpoint#service_name}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.serviceNetworkArn">service_network_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#service_network_arn VpcEndpoint#service_network_arn}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.serviceRegion">service_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#service_region VpcEndpoint#service_region}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.subnetConfiguration">subnet_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfiguration">VpcEndpointSubnetConfiguration</a>]]</code> | subnet_configuration block. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#subnet_ids VpcEndpoint#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#tags VpcEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#tags_all VpcEndpoint#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeouts">VpcEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.vpcEndpointType">vpc_endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#vpc_endpoint_type VpcEndpoint#vpc_endpoint_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#vpc_id VpcEndpoint#vpc_id}.

---

##### `auto_accept`<sup>Optional</sup> <a name="auto_accept" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.autoAccept"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#auto_accept VpcEndpoint#auto_accept}.

---

##### `dns_options`<sup>Optional</sup> <a name="dns_options" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.dnsOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptions">VpcEndpointDnsOptions</a>

dns_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#dns_options VpcEndpoint#dns_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#id VpcEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.ipAddressType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#ip_address_type VpcEndpoint#ip_address_type}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.policy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#policy VpcEndpoint#policy}.

---

##### `private_dns_enabled`<sup>Optional</sup> <a name="private_dns_enabled" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.privateDnsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#private_dns_enabled VpcEndpoint#private_dns_enabled}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#region VpcEndpoint#region}

---

##### `resource_configuration_arn`<sup>Optional</sup> <a name="resource_configuration_arn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.resourceConfigurationArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#resource_configuration_arn VpcEndpoint#resource_configuration_arn}.

---

##### `route_table_ids`<sup>Optional</sup> <a name="route_table_ids" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.routeTableIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#route_table_ids VpcEndpoint#route_table_ids}.

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#security_group_ids VpcEndpoint#security_group_ids}.

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.serviceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#service_name VpcEndpoint#service_name}.

---

##### `service_network_arn`<sup>Optional</sup> <a name="service_network_arn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.serviceNetworkArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#service_network_arn VpcEndpoint#service_network_arn}.

---

##### `service_region`<sup>Optional</sup> <a name="service_region" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.serviceRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#service_region VpcEndpoint#service_region}.

---

##### `subnet_configuration`<sup>Optional</sup> <a name="subnet_configuration" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.subnetConfiguration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfiguration">VpcEndpointSubnetConfiguration</a>]]

subnet_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#subnet_configuration VpcEndpoint#subnet_configuration}

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#subnet_ids VpcEndpoint#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#tags VpcEndpoint#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#tags_all VpcEndpoint#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeouts">VpcEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#timeouts VpcEndpoint#timeouts}

---

##### `vpc_endpoint_type`<sup>Optional</sup> <a name="vpc_endpoint_type" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.vpcEndpointType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#vpc_endpoint_type VpcEndpoint#vpc_endpoint_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.putDnsOptions">put_dns_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.putSubnetConfiguration">put_subnet_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetAutoAccept">reset_auto_accept</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetDnsOptions">reset_dns_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetIpAddressType">reset_ip_address_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetPolicy">reset_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetPrivateDnsEnabled">reset_private_dns_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetResourceConfigurationArn">reset_resource_configuration_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetRouteTableIds">reset_route_table_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetServiceName">reset_service_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetServiceNetworkArn">reset_service_network_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetServiceRegion">reset_service_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetSubnetConfiguration">reset_subnet_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetVpcEndpointType">reset_vpc_endpoint_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_dns_options` <a name="put_dns_options" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.putDnsOptions"></a>

```python
def put_dns_options(
  dns_record_ip_type: str = None,
  private_dns_only_for_inbound_resolver_endpoint: typing.Union[bool, IResolvable] = None
) -> None
```

###### `dns_record_ip_type`<sup>Optional</sup> <a name="dns_record_ip_type" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.putDnsOptions.parameter.dnsRecordIpType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#dns_record_ip_type VpcEndpoint#dns_record_ip_type}.

---

###### `private_dns_only_for_inbound_resolver_endpoint`<sup>Optional</sup> <a name="private_dns_only_for_inbound_resolver_endpoint" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.putDnsOptions.parameter.privateDnsOnlyForInboundResolverEndpoint"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#private_dns_only_for_inbound_resolver_endpoint VpcEndpoint#private_dns_only_for_inbound_resolver_endpoint}.

---

##### `put_subnet_configuration` <a name="put_subnet_configuration" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.putSubnetConfiguration"></a>

```python
def put_subnet_configuration(
  value: typing.Union[IResolvable, typing.List[VpcEndpointSubnetConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.putSubnetConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfiguration">VpcEndpointSubnetConfiguration</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#create VpcEndpoint#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#delete VpcEndpoint#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#update VpcEndpoint#update}.

---

##### `reset_auto_accept` <a name="reset_auto_accept" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetAutoAccept"></a>

```python
def reset_auto_accept() -> None
```

##### `reset_dns_options` <a name="reset_dns_options" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetDnsOptions"></a>

```python
def reset_dns_options() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_address_type` <a name="reset_ip_address_type" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetIpAddressType"></a>

```python
def reset_ip_address_type() -> None
```

##### `reset_policy` <a name="reset_policy" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetPolicy"></a>

```python
def reset_policy() -> None
```

##### `reset_private_dns_enabled` <a name="reset_private_dns_enabled" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetPrivateDnsEnabled"></a>

```python
def reset_private_dns_enabled() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_resource_configuration_arn` <a name="reset_resource_configuration_arn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetResourceConfigurationArn"></a>

```python
def reset_resource_configuration_arn() -> None
```

##### `reset_route_table_ids` <a name="reset_route_table_ids" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetRouteTableIds"></a>

```python
def reset_route_table_ids() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_service_name` <a name="reset_service_name" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetServiceName"></a>

```python
def reset_service_name() -> None
```

##### `reset_service_network_arn` <a name="reset_service_network_arn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetServiceNetworkArn"></a>

```python
def reset_service_network_arn() -> None
```

##### `reset_service_region` <a name="reset_service_region" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetServiceRegion"></a>

```python
def reset_service_region() -> None
```

##### `reset_subnet_configuration` <a name="reset_subnet_configuration" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetSubnetConfiguration"></a>

```python
def reset_subnet_configuration() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vpc_endpoint_type` <a name="reset_vpc_endpoint_type" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetVpcEndpointType"></a>

```python
def reset_vpc_endpoint_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VpcEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import vpc_endpoint

vpcEndpoint.VpcEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import vpc_endpoint

vpcEndpoint.VpcEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import vpc_endpoint

vpcEndpoint.VpcEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import vpc_endpoint

vpcEndpoint.VpcEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VpcEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VpcEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VpcEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpcEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.cidrBlocks">cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.dnsEntry">dns_entry</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList">VpcEndpointDnsEntryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.dnsOptions">dns_options</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference">VpcEndpointDnsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.networkInterfaceIds">network_interface_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.prefixListId">prefix_list_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.requesterManaged">requester_managed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.subnetConfiguration">subnet_configuration</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList">VpcEndpointSubnetConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference">VpcEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.autoAcceptInput">auto_accept_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.dnsOptionsInput">dns_options_input</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptions">VpcEndpointDnsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.ipAddressTypeInput">ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.privateDnsEnabledInput">private_dns_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.resourceConfigurationArnInput">resource_configuration_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.routeTableIdsInput">route_table_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.serviceNetworkArnInput">service_network_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.serviceRegionInput">service_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.subnetConfigurationInput">subnet_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfiguration">VpcEndpointSubnetConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeouts">VpcEndpointTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.vpcEndpointTypeInput">vpc_endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.autoAccept">auto_accept</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.privateDnsEnabled">private_dns_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.resourceConfigurationArn">resource_configuration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.routeTableIds">route_table_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.serviceNetworkArn">service_network_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.serviceRegion">service_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.vpcEndpointType">vpc_endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `cidr_blocks`<sup>Required</sup> <a name="cidr_blocks" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.cidrBlocks"></a>

```python
cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dns_entry`<sup>Required</sup> <a name="dns_entry" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.dnsEntry"></a>

```python
dns_entry: VpcEndpointDnsEntryList
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList">VpcEndpointDnsEntryList</a>

---

##### `dns_options`<sup>Required</sup> <a name="dns_options" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.dnsOptions"></a>

```python
dns_options: VpcEndpointDnsOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference">VpcEndpointDnsOptionsOutputReference</a>

---

##### `network_interface_ids`<sup>Required</sup> <a name="network_interface_ids" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.networkInterfaceIds"></a>

```python
network_interface_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `prefix_list_id`<sup>Required</sup> <a name="prefix_list_id" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.prefixListId"></a>

```python
prefix_list_id: str
```

- *Type:* str

---

##### `requester_managed`<sup>Required</sup> <a name="requester_managed" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.requesterManaged"></a>

```python
requester_managed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_configuration`<sup>Required</sup> <a name="subnet_configuration" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.subnetConfiguration"></a>

```python
subnet_configuration: VpcEndpointSubnetConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList">VpcEndpointSubnetConfigurationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.timeouts"></a>

```python
timeouts: VpcEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference">VpcEndpointTimeoutsOutputReference</a>

---

##### `auto_accept_input`<sup>Optional</sup> <a name="auto_accept_input" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.autoAcceptInput"></a>

```python
auto_accept_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dns_options_input`<sup>Optional</sup> <a name="dns_options_input" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.dnsOptionsInput"></a>

```python
dns_options_input: VpcEndpointDnsOptions
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptions">VpcEndpointDnsOptions</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_address_type_input`<sup>Optional</sup> <a name="ip_address_type_input" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.ipAddressTypeInput"></a>

```python
ip_address_type_input: str
```

- *Type:* str

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `private_dns_enabled_input`<sup>Optional</sup> <a name="private_dns_enabled_input" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.privateDnsEnabledInput"></a>

```python
private_dns_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `resource_configuration_arn_input`<sup>Optional</sup> <a name="resource_configuration_arn_input" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.resourceConfigurationArnInput"></a>

```python
resource_configuration_arn_input: str
```

- *Type:* str

---

##### `route_table_ids_input`<sup>Optional</sup> <a name="route_table_ids_input" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.routeTableIdsInput"></a>

```python
route_table_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `service_network_arn_input`<sup>Optional</sup> <a name="service_network_arn_input" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.serviceNetworkArnInput"></a>

```python
service_network_arn_input: str
```

- *Type:* str

---

##### `service_region_input`<sup>Optional</sup> <a name="service_region_input" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.serviceRegionInput"></a>

```python
service_region_input: str
```

- *Type:* str

---

##### `subnet_configuration_input`<sup>Optional</sup> <a name="subnet_configuration_input" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.subnetConfigurationInput"></a>

```python
subnet_configuration_input: typing.Union[IResolvable, typing.List[VpcEndpointSubnetConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfiguration">VpcEndpointSubnetConfiguration</a>]]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VpcEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeouts">VpcEndpointTimeouts</a>]

---

##### `vpc_endpoint_type_input`<sup>Optional</sup> <a name="vpc_endpoint_type_input" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.vpcEndpointTypeInput"></a>

```python
vpc_endpoint_type_input: str
```

- *Type:* str

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `auto_accept`<sup>Required</sup> <a name="auto_accept" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.autoAccept"></a>

```python
auto_accept: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `private_dns_enabled`<sup>Required</sup> <a name="private_dns_enabled" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.privateDnsEnabled"></a>

```python
private_dns_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `resource_configuration_arn`<sup>Required</sup> <a name="resource_configuration_arn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.resourceConfigurationArn"></a>

```python
resource_configuration_arn: str
```

- *Type:* str

---

##### `route_table_ids`<sup>Required</sup> <a name="route_table_ids" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.routeTableIds"></a>

```python
route_table_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `service_network_arn`<sup>Required</sup> <a name="service_network_arn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.serviceNetworkArn"></a>

```python
service_network_arn: str
```

- *Type:* str

---

##### `service_region`<sup>Required</sup> <a name="service_region" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.serviceRegion"></a>

```python
service_region: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_endpoint_type`<sup>Required</sup> <a name="vpc_endpoint_type" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.vpcEndpointType"></a>

```python
vpc_endpoint_type: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VpcEndpointConfig <a name="VpcEndpointConfig" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_endpoint

vpcEndpoint.VpcEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  vpc_id: str,
  auto_accept: typing.Union[bool, IResolvable] = None,
  dns_options: VpcEndpointDnsOptions = None,
  id: str = None,
  ip_address_type: str = None,
  policy: str = None,
  private_dns_enabled: typing.Union[bool, IResolvable] = None,
  region: str = None,
  resource_configuration_arn: str = None,
  route_table_ids: typing.List[str] = None,
  security_group_ids: typing.List[str] = None,
  service_name: str = None,
  service_network_arn: str = None,
  service_region: str = None,
  subnet_configuration: typing.Union[IResolvable, typing.List[VpcEndpointSubnetConfiguration]] = None,
  subnet_ids: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: VpcEndpointTimeouts = None,
  vpc_endpoint_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#vpc_id VpcEndpoint#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.autoAccept">auto_accept</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#auto_accept VpcEndpoint#auto_accept}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.dnsOptions">dns_options</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptions">VpcEndpointDnsOptions</a></code> | dns_options block. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#id VpcEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#ip_address_type VpcEndpoint#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#policy VpcEndpoint#policy}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.privateDnsEnabled">private_dns_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#private_dns_enabled VpcEndpoint#private_dns_enabled}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.resourceConfigurationArn">resource_configuration_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#resource_configuration_arn VpcEndpoint#resource_configuration_arn}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.routeTableIds">route_table_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#route_table_ids VpcEndpoint#route_table_ids}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#security_group_ids VpcEndpoint#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#service_name VpcEndpoint#service_name}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.serviceNetworkArn">service_network_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#service_network_arn VpcEndpoint#service_network_arn}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.serviceRegion">service_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#service_region VpcEndpoint#service_region}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.subnetConfiguration">subnet_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfiguration">VpcEndpointSubnetConfiguration</a>]]</code> | subnet_configuration block. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#subnet_ids VpcEndpoint#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#tags VpcEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#tags_all VpcEndpoint#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeouts">VpcEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.vpcEndpointType">vpc_endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#vpc_endpoint_type VpcEndpoint#vpc_endpoint_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#vpc_id VpcEndpoint#vpc_id}.

---

##### `auto_accept`<sup>Optional</sup> <a name="auto_accept" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.autoAccept"></a>

```python
auto_accept: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#auto_accept VpcEndpoint#auto_accept}.

---

##### `dns_options`<sup>Optional</sup> <a name="dns_options" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.dnsOptions"></a>

```python
dns_options: VpcEndpointDnsOptions
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptions">VpcEndpointDnsOptions</a>

dns_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#dns_options VpcEndpoint#dns_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#id VpcEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#ip_address_type VpcEndpoint#ip_address_type}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.policy"></a>

```python
policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#policy VpcEndpoint#policy}.

---

##### `private_dns_enabled`<sup>Optional</sup> <a name="private_dns_enabled" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.privateDnsEnabled"></a>

```python
private_dns_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#private_dns_enabled VpcEndpoint#private_dns_enabled}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#region VpcEndpoint#region}

---

##### `resource_configuration_arn`<sup>Optional</sup> <a name="resource_configuration_arn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.resourceConfigurationArn"></a>

```python
resource_configuration_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#resource_configuration_arn VpcEndpoint#resource_configuration_arn}.

---

##### `route_table_ids`<sup>Optional</sup> <a name="route_table_ids" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.routeTableIds"></a>

```python
route_table_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#route_table_ids VpcEndpoint#route_table_ids}.

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#security_group_ids VpcEndpoint#security_group_ids}.

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#service_name VpcEndpoint#service_name}.

---

##### `service_network_arn`<sup>Optional</sup> <a name="service_network_arn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.serviceNetworkArn"></a>

```python
service_network_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#service_network_arn VpcEndpoint#service_network_arn}.

---

##### `service_region`<sup>Optional</sup> <a name="service_region" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.serviceRegion"></a>

```python
service_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#service_region VpcEndpoint#service_region}.

---

##### `subnet_configuration`<sup>Optional</sup> <a name="subnet_configuration" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.subnetConfiguration"></a>

```python
subnet_configuration: typing.Union[IResolvable, typing.List[VpcEndpointSubnetConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfiguration">VpcEndpointSubnetConfiguration</a>]]

subnet_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#subnet_configuration VpcEndpoint#subnet_configuration}

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#subnet_ids VpcEndpoint#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#tags VpcEndpoint#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#tags_all VpcEndpoint#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.timeouts"></a>

```python
timeouts: VpcEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeouts">VpcEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#timeouts VpcEndpoint#timeouts}

---

##### `vpc_endpoint_type`<sup>Optional</sup> <a name="vpc_endpoint_type" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.vpcEndpointType"></a>

```python
vpc_endpoint_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#vpc_endpoint_type VpcEndpoint#vpc_endpoint_type}.

---

### VpcEndpointDnsEntry <a name="VpcEndpointDnsEntry" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntry.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_endpoint

vpcEndpoint.VpcEndpointDnsEntry()
```


### VpcEndpointDnsOptions <a name="VpcEndpointDnsOptions" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_endpoint

vpcEndpoint.VpcEndpointDnsOptions(
  dns_record_ip_type: str = None,
  private_dns_only_for_inbound_resolver_endpoint: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptions.property.dnsRecordIpType">dns_record_ip_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#dns_record_ip_type VpcEndpoint#dns_record_ip_type}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptions.property.privateDnsOnlyForInboundResolverEndpoint">private_dns_only_for_inbound_resolver_endpoint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#private_dns_only_for_inbound_resolver_endpoint VpcEndpoint#private_dns_only_for_inbound_resolver_endpoint}. |

---

##### `dns_record_ip_type`<sup>Optional</sup> <a name="dns_record_ip_type" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptions.property.dnsRecordIpType"></a>

```python
dns_record_ip_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#dns_record_ip_type VpcEndpoint#dns_record_ip_type}.

---

##### `private_dns_only_for_inbound_resolver_endpoint`<sup>Optional</sup> <a name="private_dns_only_for_inbound_resolver_endpoint" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptions.property.privateDnsOnlyForInboundResolverEndpoint"></a>

```python
private_dns_only_for_inbound_resolver_endpoint: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#private_dns_only_for_inbound_resolver_endpoint VpcEndpoint#private_dns_only_for_inbound_resolver_endpoint}.

---

### VpcEndpointSubnetConfiguration <a name="VpcEndpointSubnetConfiguration" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_endpoint

vpcEndpoint.VpcEndpointSubnetConfiguration(
  ipv4: str = None,
  ipv6: str = None,
  subnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfiguration.property.ipv4">ipv4</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#ipv4 VpcEndpoint#ipv4}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfiguration.property.ipv6">ipv6</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#ipv6 VpcEndpoint#ipv6}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfiguration.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#subnet_id VpcEndpoint#subnet_id}. |

---

##### `ipv4`<sup>Optional</sup> <a name="ipv4" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfiguration.property.ipv4"></a>

```python
ipv4: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#ipv4 VpcEndpoint#ipv4}.

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfiguration.property.ipv6"></a>

```python
ipv6: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#ipv6 VpcEndpoint#ipv6}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfiguration.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#subnet_id VpcEndpoint#subnet_id}.

---

### VpcEndpointTimeouts <a name="VpcEndpointTimeouts" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_endpoint

vpcEndpoint.VpcEndpointTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#create VpcEndpoint#create}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#delete VpcEndpoint#delete}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#update VpcEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#create VpcEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#delete VpcEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_endpoint#update VpcEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcEndpointDnsEntryList <a name="VpcEndpointDnsEntryList" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_endpoint

vpcEndpoint.VpcEndpointDnsEntryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VpcEndpointDnsEntryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### VpcEndpointDnsEntryOutputReference <a name="VpcEndpointDnsEntryOutputReference" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_endpoint

vpcEndpoint.VpcEndpointDnsEntryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntry">VpcEndpointDnsEntry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `hosted_zone_id`<sup>Required</sup> <a name="hosted_zone_id" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.property.internalValue"></a>

```python
internal_value: VpcEndpointDnsEntry
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntry">VpcEndpointDnsEntry</a>

---


### VpcEndpointDnsOptionsOutputReference <a name="VpcEndpointDnsOptionsOutputReference" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_endpoint

vpcEndpoint.VpcEndpointDnsOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.resetDnsRecordIpType">reset_dns_record_ip_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.resetPrivateDnsOnlyForInboundResolverEndpoint">reset_private_dns_only_for_inbound_resolver_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dns_record_ip_type` <a name="reset_dns_record_ip_type" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.resetDnsRecordIpType"></a>

```python
def reset_dns_record_ip_type() -> None
```

##### `reset_private_dns_only_for_inbound_resolver_endpoint` <a name="reset_private_dns_only_for_inbound_resolver_endpoint" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.resetPrivateDnsOnlyForInboundResolverEndpoint"></a>

```python
def reset_private_dns_only_for_inbound_resolver_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.property.dnsRecordIpTypeInput">dns_record_ip_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.property.privateDnsOnlyForInboundResolverEndpointInput">private_dns_only_for_inbound_resolver_endpoint_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.property.dnsRecordIpType">dns_record_ip_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.property.privateDnsOnlyForInboundResolverEndpoint">private_dns_only_for_inbound_resolver_endpoint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptions">VpcEndpointDnsOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_record_ip_type_input`<sup>Optional</sup> <a name="dns_record_ip_type_input" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.property.dnsRecordIpTypeInput"></a>

```python
dns_record_ip_type_input: str
```

- *Type:* str

---

##### `private_dns_only_for_inbound_resolver_endpoint_input`<sup>Optional</sup> <a name="private_dns_only_for_inbound_resolver_endpoint_input" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.property.privateDnsOnlyForInboundResolverEndpointInput"></a>

```python
private_dns_only_for_inbound_resolver_endpoint_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dns_record_ip_type`<sup>Required</sup> <a name="dns_record_ip_type" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.property.dnsRecordIpType"></a>

```python
dns_record_ip_type: str
```

- *Type:* str

---

##### `private_dns_only_for_inbound_resolver_endpoint`<sup>Required</sup> <a name="private_dns_only_for_inbound_resolver_endpoint" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.property.privateDnsOnlyForInboundResolverEndpoint"></a>

```python
private_dns_only_for_inbound_resolver_endpoint: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.property.internalValue"></a>

```python
internal_value: VpcEndpointDnsOptions
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptions">VpcEndpointDnsOptions</a>

---


### VpcEndpointSubnetConfigurationList <a name="VpcEndpointSubnetConfigurationList" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_endpoint

vpcEndpoint.VpcEndpointSubnetConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VpcEndpointSubnetConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfiguration">VpcEndpointSubnetConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VpcEndpointSubnetConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfiguration">VpcEndpointSubnetConfiguration</a>]]

---


### VpcEndpointSubnetConfigurationOutputReference <a name="VpcEndpointSubnetConfigurationOutputReference" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_endpoint

vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.resetIpv4">reset_ipv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.resetIpv6">reset_ipv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ipv4` <a name="reset_ipv4" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.resetIpv4"></a>

```python
def reset_ipv4() -> None
```

##### `reset_ipv6` <a name="reset_ipv6" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.resetIpv6"></a>

```python
def reset_ipv6() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.ipv4Input">ipv4_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.ipv6Input">ipv6_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.ipv4">ipv4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.ipv6">ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfiguration">VpcEndpointSubnetConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv4_input`<sup>Optional</sup> <a name="ipv4_input" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.ipv4Input"></a>

```python
ipv4_input: str
```

- *Type:* str

---

##### `ipv6_input`<sup>Optional</sup> <a name="ipv6_input" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.ipv6Input"></a>

```python
ipv6_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.ipv4"></a>

```python
ipv4: str
```

- *Type:* str

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.ipv6"></a>

```python
ipv6: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VpcEndpointSubnetConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfiguration">VpcEndpointSubnetConfiguration</a>]

---


### VpcEndpointTimeoutsOutputReference <a name="VpcEndpointTimeoutsOutputReference" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_endpoint

vpcEndpoint.VpcEndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeouts">VpcEndpointTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VpcEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeouts">VpcEndpointTimeouts</a>]

---



