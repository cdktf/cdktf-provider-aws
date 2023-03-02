# `vpcDhcpOptions` Submodule <a name="`vpcDhcpOptions` Submodule" id="@cdktf/provider-aws.vpcDhcpOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcDhcpOptions <a name="VpcDhcpOptions" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options aws_vpc_dhcp_options}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_dhcp_options

vpcDhcpOptions.VpcDhcpOptions(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_name: str = None,
  domain_name_servers: typing.List[str] = None,
  id: str = None,
  netbios_name_servers: typing.List[str] = None,
  netbios_node_type: str = None,
  ntp_servers: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#domain_name VpcDhcpOptions#domain_name}. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.domainNameServers">domain_name_servers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#domain_name_servers VpcDhcpOptions#domain_name_servers}. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#id VpcDhcpOptions#id}. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.netbiosNameServers">netbios_name_servers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#netbios_name_servers VpcDhcpOptions#netbios_name_servers}. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.netbiosNodeType">netbios_node_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#netbios_node_type VpcDhcpOptions#netbios_node_type}. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.ntpServers">ntp_servers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#ntp_servers VpcDhcpOptions#ntp_servers}. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#tags VpcDhcpOptions#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#tags_all VpcDhcpOptions#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#domain_name VpcDhcpOptions#domain_name}.

---

##### `domain_name_servers`<sup>Optional</sup> <a name="domain_name_servers" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.domainNameServers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#domain_name_servers VpcDhcpOptions#domain_name_servers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#id VpcDhcpOptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `netbios_name_servers`<sup>Optional</sup> <a name="netbios_name_servers" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.netbiosNameServers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#netbios_name_servers VpcDhcpOptions#netbios_name_servers}.

---

##### `netbios_node_type`<sup>Optional</sup> <a name="netbios_node_type" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.netbiosNodeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#netbios_node_type VpcDhcpOptions#netbios_node_type}.

---

##### `ntp_servers`<sup>Optional</sup> <a name="ntp_servers" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.ntpServers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#ntp_servers VpcDhcpOptions#ntp_servers}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#tags VpcDhcpOptions#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#tags_all VpcDhcpOptions#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetDomainName">reset_domain_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetDomainNameServers">reset_domain_name_servers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetNetbiosNameServers">reset_netbios_name_servers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetNetbiosNodeType">reset_netbios_node_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetNtpServers">reset_ntp_servers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_domain_name` <a name="reset_domain_name" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetDomainName"></a>

```python
def reset_domain_name() -> None
```

##### `reset_domain_name_servers` <a name="reset_domain_name_servers" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetDomainNameServers"></a>

```python
def reset_domain_name_servers() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_netbios_name_servers` <a name="reset_netbios_name_servers" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetNetbiosNameServers"></a>

```python
def reset_netbios_name_servers() -> None
```

##### `reset_netbios_node_type` <a name="reset_netbios_node_type" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetNetbiosNodeType"></a>

```python
def reset_netbios_node_type() -> None
```

##### `reset_ntp_servers` <a name="reset_ntp_servers" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetNtpServers"></a>

```python
def reset_ntp_servers() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import vpc_dhcp_options

vpcDhcpOptions.VpcDhcpOptions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import vpc_dhcp_options

vpcDhcpOptions.VpcDhcpOptions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import vpc_dhcp_options

vpcDhcpOptions.VpcDhcpOptions.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.domainNameServersInput">domain_name_servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.netbiosNameServersInput">netbios_name_servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.netbiosNodeTypeInput">netbios_node_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.ntpServersInput">ntp_servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.domainNameServers">domain_name_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.netbiosNameServers">netbios_name_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.netbiosNodeType">netbios_node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.ntpServers">ntp_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `domain_name_servers_input`<sup>Optional</sup> <a name="domain_name_servers_input" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.domainNameServersInput"></a>

```python
domain_name_servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `netbios_name_servers_input`<sup>Optional</sup> <a name="netbios_name_servers_input" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.netbiosNameServersInput"></a>

```python
netbios_name_servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `netbios_node_type_input`<sup>Optional</sup> <a name="netbios_node_type_input" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.netbiosNodeTypeInput"></a>

```python
netbios_node_type_input: str
```

- *Type:* str

---

##### `ntp_servers_input`<sup>Optional</sup> <a name="ntp_servers_input" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.ntpServersInput"></a>

```python
ntp_servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `domain_name_servers`<sup>Required</sup> <a name="domain_name_servers" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.domainNameServers"></a>

```python
domain_name_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `netbios_name_servers`<sup>Required</sup> <a name="netbios_name_servers" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.netbiosNameServers"></a>

```python
netbios_name_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `netbios_node_type`<sup>Required</sup> <a name="netbios_node_type" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.netbiosNodeType"></a>

```python
netbios_node_type: str
```

- *Type:* str

---

##### `ntp_servers`<sup>Required</sup> <a name="ntp_servers" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.ntpServers"></a>

```python
ntp_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VpcDhcpOptionsConfig <a name="VpcDhcpOptionsConfig" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_dhcp_options

vpcDhcpOptions.VpcDhcpOptionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_name: str = None,
  domain_name_servers: typing.List[str] = None,
  id: str = None,
  netbios_name_servers: typing.List[str] = None,
  netbios_node_type: str = None,
  ntp_servers: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#domain_name VpcDhcpOptions#domain_name}. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.domainNameServers">domain_name_servers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#domain_name_servers VpcDhcpOptions#domain_name_servers}. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#id VpcDhcpOptions#id}. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.netbiosNameServers">netbios_name_servers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#netbios_name_servers VpcDhcpOptions#netbios_name_servers}. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.netbiosNodeType">netbios_node_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#netbios_node_type VpcDhcpOptions#netbios_node_type}. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.ntpServers">ntp_servers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#ntp_servers VpcDhcpOptions#ntp_servers}. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#tags VpcDhcpOptions#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#tags_all VpcDhcpOptions#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#domain_name VpcDhcpOptions#domain_name}.

---

##### `domain_name_servers`<sup>Optional</sup> <a name="domain_name_servers" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.domainNameServers"></a>

```python
domain_name_servers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#domain_name_servers VpcDhcpOptions#domain_name_servers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#id VpcDhcpOptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `netbios_name_servers`<sup>Optional</sup> <a name="netbios_name_servers" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.netbiosNameServers"></a>

```python
netbios_name_servers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#netbios_name_servers VpcDhcpOptions#netbios_name_servers}.

---

##### `netbios_node_type`<sup>Optional</sup> <a name="netbios_node_type" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.netbiosNodeType"></a>

```python
netbios_node_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#netbios_node_type VpcDhcpOptions#netbios_node_type}.

---

##### `ntp_servers`<sup>Optional</sup> <a name="ntp_servers" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.ntpServers"></a>

```python
ntp_servers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#ntp_servers VpcDhcpOptions#ntp_servers}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#tags VpcDhcpOptions#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.vpcDhcpOptions.VpcDhcpOptionsConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options#tags_all VpcDhcpOptions#tags_all}.

---



