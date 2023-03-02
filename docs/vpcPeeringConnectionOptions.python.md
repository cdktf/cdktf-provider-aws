# `vpcPeeringConnectionOptions` Submodule <a name="`vpcPeeringConnectionOptions` Submodule" id="@cdktf/provider-aws.vpcPeeringConnectionOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcPeeringConnectionOptions <a name="VpcPeeringConnectionOptions" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options aws_vpc_peering_connection_options}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_peering_connection_options

vpcPeeringConnectionOptions.VpcPeeringConnectionOptions(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  vpc_peering_connection_id: str,
  accepter: VpcPeeringConnectionOptionsAccepter = None,
  id: str = None,
  requester: VpcPeeringConnectionOptionsRequester = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.vpcPeeringConnectionId">vpc_peering_connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#vpc_peering_connection_id VpcPeeringConnectionOptions#vpc_peering_connection_id}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.accepter">accepter</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter">VpcPeeringConnectionOptionsAccepter</a></code> | accepter block. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#id VpcPeeringConnectionOptions#id}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.requester">requester</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester">VpcPeeringConnectionOptionsRequester</a></code> | requester block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `vpc_peering_connection_id`<sup>Required</sup> <a name="vpc_peering_connection_id" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.vpcPeeringConnectionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#vpc_peering_connection_id VpcPeeringConnectionOptions#vpc_peering_connection_id}.

---

##### `accepter`<sup>Optional</sup> <a name="accepter" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.accepter"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter">VpcPeeringConnectionOptionsAccepter</a>

accepter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#accepter VpcPeeringConnectionOptions#accepter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#id VpcPeeringConnectionOptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `requester`<sup>Optional</sup> <a name="requester" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.Initializer.parameter.requester"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester">VpcPeeringConnectionOptionsRequester</a>

requester block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#requester VpcPeeringConnectionOptions#requester}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.putAccepter">put_accepter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.putRequester">put_requester</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.resetAccepter">reset_accepter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.resetRequester">reset_requester</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_accepter` <a name="put_accepter" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.putAccepter"></a>

```python
def put_accepter(
  allow_classic_link_to_remote_vpc: typing.Union[bool, IResolvable] = None,
  allow_remote_vpc_dns_resolution: typing.Union[bool, IResolvable] = None,
  allow_vpc_to_remote_classic_link: typing.Union[bool, IResolvable] = None
) -> None
```

###### `allow_classic_link_to_remote_vpc`<sup>Optional</sup> <a name="allow_classic_link_to_remote_vpc" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.putAccepter.parameter.allowClassicLinkToRemoteVpc"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_classic_link_to_remote_vpc VpcPeeringConnectionOptions#allow_classic_link_to_remote_vpc}.

---

###### `allow_remote_vpc_dns_resolution`<sup>Optional</sup> <a name="allow_remote_vpc_dns_resolution" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.putAccepter.parameter.allowRemoteVpcDnsResolution"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_remote_vpc_dns_resolution VpcPeeringConnectionOptions#allow_remote_vpc_dns_resolution}.

---

###### `allow_vpc_to_remote_classic_link`<sup>Optional</sup> <a name="allow_vpc_to_remote_classic_link" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.putAccepter.parameter.allowVpcToRemoteClassicLink"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_vpc_to_remote_classic_link VpcPeeringConnectionOptions#allow_vpc_to_remote_classic_link}.

---

##### `put_requester` <a name="put_requester" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.putRequester"></a>

```python
def put_requester(
  allow_classic_link_to_remote_vpc: typing.Union[bool, IResolvable] = None,
  allow_remote_vpc_dns_resolution: typing.Union[bool, IResolvable] = None,
  allow_vpc_to_remote_classic_link: typing.Union[bool, IResolvable] = None
) -> None
```

###### `allow_classic_link_to_remote_vpc`<sup>Optional</sup> <a name="allow_classic_link_to_remote_vpc" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.putRequester.parameter.allowClassicLinkToRemoteVpc"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_classic_link_to_remote_vpc VpcPeeringConnectionOptions#allow_classic_link_to_remote_vpc}.

---

###### `allow_remote_vpc_dns_resolution`<sup>Optional</sup> <a name="allow_remote_vpc_dns_resolution" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.putRequester.parameter.allowRemoteVpcDnsResolution"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_remote_vpc_dns_resolution VpcPeeringConnectionOptions#allow_remote_vpc_dns_resolution}.

---

###### `allow_vpc_to_remote_classic_link`<sup>Optional</sup> <a name="allow_vpc_to_remote_classic_link" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.putRequester.parameter.allowVpcToRemoteClassicLink"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_vpc_to_remote_classic_link VpcPeeringConnectionOptions#allow_vpc_to_remote_classic_link}.

---

##### `reset_accepter` <a name="reset_accepter" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.resetAccepter"></a>

```python
def reset_accepter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_requester` <a name="reset_requester" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.resetRequester"></a>

```python
def reset_requester() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import vpc_peering_connection_options

vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import vpc_peering_connection_options

vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import vpc_peering_connection_options

vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.accepter">accepter</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference">VpcPeeringConnectionOptionsAccepterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.requester">requester</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference">VpcPeeringConnectionOptionsRequesterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.accepterInput">accepter_input</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter">VpcPeeringConnectionOptionsAccepter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.requesterInput">requester_input</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester">VpcPeeringConnectionOptionsRequester</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.vpcPeeringConnectionIdInput">vpc_peering_connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.vpcPeeringConnectionId">vpc_peering_connection_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accepter`<sup>Required</sup> <a name="accepter" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.accepter"></a>

```python
accepter: VpcPeeringConnectionOptionsAccepterOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference">VpcPeeringConnectionOptionsAccepterOutputReference</a>

---

##### `requester`<sup>Required</sup> <a name="requester" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.requester"></a>

```python
requester: VpcPeeringConnectionOptionsRequesterOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference">VpcPeeringConnectionOptionsRequesterOutputReference</a>

---

##### `accepter_input`<sup>Optional</sup> <a name="accepter_input" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.accepterInput"></a>

```python
accepter_input: VpcPeeringConnectionOptionsAccepter
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter">VpcPeeringConnectionOptionsAccepter</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `requester_input`<sup>Optional</sup> <a name="requester_input" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.requesterInput"></a>

```python
requester_input: VpcPeeringConnectionOptionsRequester
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester">VpcPeeringConnectionOptionsRequester</a>

---

##### `vpc_peering_connection_id_input`<sup>Optional</sup> <a name="vpc_peering_connection_id_input" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.vpcPeeringConnectionIdInput"></a>

```python
vpc_peering_connection_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `vpc_peering_connection_id`<sup>Required</sup> <a name="vpc_peering_connection_id" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.vpcPeeringConnectionId"></a>

```python
vpc_peering_connection_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VpcPeeringConnectionOptionsAccepter <a name="VpcPeeringConnectionOptionsAccepter" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_peering_connection_options

vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter(
  allow_classic_link_to_remote_vpc: typing.Union[bool, IResolvable] = None,
  allow_remote_vpc_dns_resolution: typing.Union[bool, IResolvable] = None,
  allow_vpc_to_remote_classic_link: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter.property.allowClassicLinkToRemoteVpc">allow_classic_link_to_remote_vpc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_classic_link_to_remote_vpc VpcPeeringConnectionOptions#allow_classic_link_to_remote_vpc}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter.property.allowRemoteVpcDnsResolution">allow_remote_vpc_dns_resolution</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_remote_vpc_dns_resolution VpcPeeringConnectionOptions#allow_remote_vpc_dns_resolution}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter.property.allowVpcToRemoteClassicLink">allow_vpc_to_remote_classic_link</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_vpc_to_remote_classic_link VpcPeeringConnectionOptions#allow_vpc_to_remote_classic_link}. |

---

##### `allow_classic_link_to_remote_vpc`<sup>Optional</sup> <a name="allow_classic_link_to_remote_vpc" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter.property.allowClassicLinkToRemoteVpc"></a>

```python
allow_classic_link_to_remote_vpc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_classic_link_to_remote_vpc VpcPeeringConnectionOptions#allow_classic_link_to_remote_vpc}.

---

##### `allow_remote_vpc_dns_resolution`<sup>Optional</sup> <a name="allow_remote_vpc_dns_resolution" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter.property.allowRemoteVpcDnsResolution"></a>

```python
allow_remote_vpc_dns_resolution: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_remote_vpc_dns_resolution VpcPeeringConnectionOptions#allow_remote_vpc_dns_resolution}.

---

##### `allow_vpc_to_remote_classic_link`<sup>Optional</sup> <a name="allow_vpc_to_remote_classic_link" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter.property.allowVpcToRemoteClassicLink"></a>

```python
allow_vpc_to_remote_classic_link: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_vpc_to_remote_classic_link VpcPeeringConnectionOptions#allow_vpc_to_remote_classic_link}.

---

### VpcPeeringConnectionOptionsConfig <a name="VpcPeeringConnectionOptionsConfig" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_peering_connection_options

vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  vpc_peering_connection_id: str,
  accepter: VpcPeeringConnectionOptionsAccepter = None,
  id: str = None,
  requester: VpcPeeringConnectionOptionsRequester = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.vpcPeeringConnectionId">vpc_peering_connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#vpc_peering_connection_id VpcPeeringConnectionOptions#vpc_peering_connection_id}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.accepter">accepter</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter">VpcPeeringConnectionOptionsAccepter</a></code> | accepter block. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#id VpcPeeringConnectionOptions#id}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.requester">requester</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester">VpcPeeringConnectionOptionsRequester</a></code> | requester block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `vpc_peering_connection_id`<sup>Required</sup> <a name="vpc_peering_connection_id" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.vpcPeeringConnectionId"></a>

```python
vpc_peering_connection_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#vpc_peering_connection_id VpcPeeringConnectionOptions#vpc_peering_connection_id}.

---

##### `accepter`<sup>Optional</sup> <a name="accepter" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.accepter"></a>

```python
accepter: VpcPeeringConnectionOptionsAccepter
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter">VpcPeeringConnectionOptionsAccepter</a>

accepter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#accepter VpcPeeringConnectionOptions#accepter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#id VpcPeeringConnectionOptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `requester`<sup>Optional</sup> <a name="requester" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsConfig.property.requester"></a>

```python
requester: VpcPeeringConnectionOptionsRequester
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester">VpcPeeringConnectionOptionsRequester</a>

requester block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#requester VpcPeeringConnectionOptions#requester}

---

### VpcPeeringConnectionOptionsRequester <a name="VpcPeeringConnectionOptionsRequester" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_peering_connection_options

vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester(
  allow_classic_link_to_remote_vpc: typing.Union[bool, IResolvable] = None,
  allow_remote_vpc_dns_resolution: typing.Union[bool, IResolvable] = None,
  allow_vpc_to_remote_classic_link: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester.property.allowClassicLinkToRemoteVpc">allow_classic_link_to_remote_vpc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_classic_link_to_remote_vpc VpcPeeringConnectionOptions#allow_classic_link_to_remote_vpc}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester.property.allowRemoteVpcDnsResolution">allow_remote_vpc_dns_resolution</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_remote_vpc_dns_resolution VpcPeeringConnectionOptions#allow_remote_vpc_dns_resolution}. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester.property.allowVpcToRemoteClassicLink">allow_vpc_to_remote_classic_link</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_vpc_to_remote_classic_link VpcPeeringConnectionOptions#allow_vpc_to_remote_classic_link}. |

---

##### `allow_classic_link_to_remote_vpc`<sup>Optional</sup> <a name="allow_classic_link_to_remote_vpc" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester.property.allowClassicLinkToRemoteVpc"></a>

```python
allow_classic_link_to_remote_vpc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_classic_link_to_remote_vpc VpcPeeringConnectionOptions#allow_classic_link_to_remote_vpc}.

---

##### `allow_remote_vpc_dns_resolution`<sup>Optional</sup> <a name="allow_remote_vpc_dns_resolution" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester.property.allowRemoteVpcDnsResolution"></a>

```python
allow_remote_vpc_dns_resolution: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_remote_vpc_dns_resolution VpcPeeringConnectionOptions#allow_remote_vpc_dns_resolution}.

---

##### `allow_vpc_to_remote_classic_link`<sup>Optional</sup> <a name="allow_vpc_to_remote_classic_link" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester.property.allowVpcToRemoteClassicLink"></a>

```python
allow_vpc_to_remote_classic_link: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options#allow_vpc_to_remote_classic_link VpcPeeringConnectionOptions#allow_vpc_to_remote_classic_link}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcPeeringConnectionOptionsAccepterOutputReference <a name="VpcPeeringConnectionOptionsAccepterOutputReference" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_peering_connection_options

vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.resetAllowClassicLinkToRemoteVpc">reset_allow_classic_link_to_remote_vpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.resetAllowRemoteVpcDnsResolution">reset_allow_remote_vpc_dns_resolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.resetAllowVpcToRemoteClassicLink">reset_allow_vpc_to_remote_classic_link</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_classic_link_to_remote_vpc` <a name="reset_allow_classic_link_to_remote_vpc" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.resetAllowClassicLinkToRemoteVpc"></a>

```python
def reset_allow_classic_link_to_remote_vpc() -> None
```

##### `reset_allow_remote_vpc_dns_resolution` <a name="reset_allow_remote_vpc_dns_resolution" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.resetAllowRemoteVpcDnsResolution"></a>

```python
def reset_allow_remote_vpc_dns_resolution() -> None
```

##### `reset_allow_vpc_to_remote_classic_link` <a name="reset_allow_vpc_to_remote_classic_link" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.resetAllowVpcToRemoteClassicLink"></a>

```python
def reset_allow_vpc_to_remote_classic_link() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowClassicLinkToRemoteVpcInput">allow_classic_link_to_remote_vpc_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowRemoteVpcDnsResolutionInput">allow_remote_vpc_dns_resolution_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowVpcToRemoteClassicLinkInput">allow_vpc_to_remote_classic_link_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowClassicLinkToRemoteVpc">allow_classic_link_to_remote_vpc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowRemoteVpcDnsResolution">allow_remote_vpc_dns_resolution</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowVpcToRemoteClassicLink">allow_vpc_to_remote_classic_link</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter">VpcPeeringConnectionOptionsAccepter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_classic_link_to_remote_vpc_input`<sup>Optional</sup> <a name="allow_classic_link_to_remote_vpc_input" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowClassicLinkToRemoteVpcInput"></a>

```python
allow_classic_link_to_remote_vpc_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_remote_vpc_dns_resolution_input`<sup>Optional</sup> <a name="allow_remote_vpc_dns_resolution_input" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowRemoteVpcDnsResolutionInput"></a>

```python
allow_remote_vpc_dns_resolution_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_vpc_to_remote_classic_link_input`<sup>Optional</sup> <a name="allow_vpc_to_remote_classic_link_input" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowVpcToRemoteClassicLinkInput"></a>

```python
allow_vpc_to_remote_classic_link_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_classic_link_to_remote_vpc`<sup>Required</sup> <a name="allow_classic_link_to_remote_vpc" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowClassicLinkToRemoteVpc"></a>

```python
allow_classic_link_to_remote_vpc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_remote_vpc_dns_resolution`<sup>Required</sup> <a name="allow_remote_vpc_dns_resolution" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowRemoteVpcDnsResolution"></a>

```python
allow_remote_vpc_dns_resolution: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_vpc_to_remote_classic_link`<sup>Required</sup> <a name="allow_vpc_to_remote_classic_link" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.allowVpcToRemoteClassicLink"></a>

```python
allow_vpc_to_remote_classic_link: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepterOutputReference.property.internalValue"></a>

```python
internal_value: VpcPeeringConnectionOptionsAccepter
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsAccepter">VpcPeeringConnectionOptionsAccepter</a>

---


### VpcPeeringConnectionOptionsRequesterOutputReference <a name="VpcPeeringConnectionOptionsRequesterOutputReference" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_peering_connection_options

vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.resetAllowClassicLinkToRemoteVpc">reset_allow_classic_link_to_remote_vpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.resetAllowRemoteVpcDnsResolution">reset_allow_remote_vpc_dns_resolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.resetAllowVpcToRemoteClassicLink">reset_allow_vpc_to_remote_classic_link</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_classic_link_to_remote_vpc` <a name="reset_allow_classic_link_to_remote_vpc" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.resetAllowClassicLinkToRemoteVpc"></a>

```python
def reset_allow_classic_link_to_remote_vpc() -> None
```

##### `reset_allow_remote_vpc_dns_resolution` <a name="reset_allow_remote_vpc_dns_resolution" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.resetAllowRemoteVpcDnsResolution"></a>

```python
def reset_allow_remote_vpc_dns_resolution() -> None
```

##### `reset_allow_vpc_to_remote_classic_link` <a name="reset_allow_vpc_to_remote_classic_link" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.resetAllowVpcToRemoteClassicLink"></a>

```python
def reset_allow_vpc_to_remote_classic_link() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowClassicLinkToRemoteVpcInput">allow_classic_link_to_remote_vpc_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowRemoteVpcDnsResolutionInput">allow_remote_vpc_dns_resolution_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowVpcToRemoteClassicLinkInput">allow_vpc_to_remote_classic_link_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowClassicLinkToRemoteVpc">allow_classic_link_to_remote_vpc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowRemoteVpcDnsResolution">allow_remote_vpc_dns_resolution</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowVpcToRemoteClassicLink">allow_vpc_to_remote_classic_link</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester">VpcPeeringConnectionOptionsRequester</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_classic_link_to_remote_vpc_input`<sup>Optional</sup> <a name="allow_classic_link_to_remote_vpc_input" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowClassicLinkToRemoteVpcInput"></a>

```python
allow_classic_link_to_remote_vpc_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_remote_vpc_dns_resolution_input`<sup>Optional</sup> <a name="allow_remote_vpc_dns_resolution_input" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowRemoteVpcDnsResolutionInput"></a>

```python
allow_remote_vpc_dns_resolution_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_vpc_to_remote_classic_link_input`<sup>Optional</sup> <a name="allow_vpc_to_remote_classic_link_input" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowVpcToRemoteClassicLinkInput"></a>

```python
allow_vpc_to_remote_classic_link_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_classic_link_to_remote_vpc`<sup>Required</sup> <a name="allow_classic_link_to_remote_vpc" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowClassicLinkToRemoteVpc"></a>

```python
allow_classic_link_to_remote_vpc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_remote_vpc_dns_resolution`<sup>Required</sup> <a name="allow_remote_vpc_dns_resolution" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowRemoteVpcDnsResolution"></a>

```python
allow_remote_vpc_dns_resolution: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_vpc_to_remote_classic_link`<sup>Required</sup> <a name="allow_vpc_to_remote_classic_link" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.allowVpcToRemoteClassicLink"></a>

```python
allow_vpc_to_remote_classic_link: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequesterOutputReference.property.internalValue"></a>

```python
internal_value: VpcPeeringConnectionOptionsRequester
```

- *Type:* <a href="#@cdktf/provider-aws.vpcPeeringConnectionOptions.VpcPeeringConnectionOptionsRequester">VpcPeeringConnectionOptionsRequester</a>

---



