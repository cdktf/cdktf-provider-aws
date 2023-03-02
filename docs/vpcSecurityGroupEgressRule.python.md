# `vpcSecurityGroupEgressRule` Submodule <a name="`vpcSecurityGroupEgressRule` Submodule" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcSecurityGroupEgressRule <a name="VpcSecurityGroupEgressRule" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule aws_vpc_security_group_egress_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_security_group_egress_rule

vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ip_protocol: str,
  cidr_ipv4: str = None,
  cidr_ipv6: str = None,
  description: str = None,
  from_port: typing.Union[int, float] = None,
  prefix_list_id: str = None,
  referenced_security_group_id: str = None,
  security_group_id: str = None,
  tags: typing.Mapping[str] = None,
  to_port: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.ipProtocol">ip_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#ip_protocol VpcSecurityGroupEgressRule#ip_protocol}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.cidrIpv4">cidr_ipv4</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#cidr_ipv4 VpcSecurityGroupEgressRule#cidr_ipv4}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.cidrIpv6">cidr_ipv6</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#cidr_ipv6 VpcSecurityGroupEgressRule#cidr_ipv6}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#description VpcSecurityGroupEgressRule#description}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#from_port VpcSecurityGroupEgressRule#from_port}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.prefixListId">prefix_list_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#prefix_list_id VpcSecurityGroupEgressRule#prefix_list_id}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.referencedSecurityGroupId">referenced_security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#referenced_security_group_id VpcSecurityGroupEgressRule#referenced_security_group_id}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.securityGroupId">security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#security_group_id VpcSecurityGroupEgressRule#security_group_id}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#tags VpcSecurityGroupEgressRule#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#to_port VpcSecurityGroupEgressRule#to_port}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.ipProtocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#ip_protocol VpcSecurityGroupEgressRule#ip_protocol}.

---

##### `cidr_ipv4`<sup>Optional</sup> <a name="cidr_ipv4" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.cidrIpv4"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#cidr_ipv4 VpcSecurityGroupEgressRule#cidr_ipv4}.

---

##### `cidr_ipv6`<sup>Optional</sup> <a name="cidr_ipv6" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.cidrIpv6"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#cidr_ipv6 VpcSecurityGroupEgressRule#cidr_ipv6}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#description VpcSecurityGroupEgressRule#description}.

---

##### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.fromPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#from_port VpcSecurityGroupEgressRule#from_port}.

---

##### `prefix_list_id`<sup>Optional</sup> <a name="prefix_list_id" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.prefixListId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#prefix_list_id VpcSecurityGroupEgressRule#prefix_list_id}.

---

##### `referenced_security_group_id`<sup>Optional</sup> <a name="referenced_security_group_id" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.referencedSecurityGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#referenced_security_group_id VpcSecurityGroupEgressRule#referenced_security_group_id}.

---

##### `security_group_id`<sup>Optional</sup> <a name="security_group_id" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.securityGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#security_group_id VpcSecurityGroupEgressRule#security_group_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#tags VpcSecurityGroupEgressRule#tags}.

---

##### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.toPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#to_port VpcSecurityGroupEgressRule#to_port}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetCidrIpv4">reset_cidr_ipv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetCidrIpv6">reset_cidr_ipv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetFromPort">reset_from_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetPrefixListId">reset_prefix_list_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetReferencedSecurityGroupId">reset_referenced_security_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetSecurityGroupId">reset_security_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetToPort">reset_to_port</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_cidr_ipv4` <a name="reset_cidr_ipv4" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetCidrIpv4"></a>

```python
def reset_cidr_ipv4() -> None
```

##### `reset_cidr_ipv6` <a name="reset_cidr_ipv6" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetCidrIpv6"></a>

```python
def reset_cidr_ipv6() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_from_port` <a name="reset_from_port" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetFromPort"></a>

```python
def reset_from_port() -> None
```

##### `reset_prefix_list_id` <a name="reset_prefix_list_id" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetPrefixListId"></a>

```python
def reset_prefix_list_id() -> None
```

##### `reset_referenced_security_group_id` <a name="reset_referenced_security_group_id" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetReferencedSecurityGroupId"></a>

```python
def reset_referenced_security_group_id() -> None
```

##### `reset_security_group_id` <a name="reset_security_group_id" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetSecurityGroupId"></a>

```python
def reset_security_group_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_to_port` <a name="reset_to_port" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetToPort"></a>

```python
def reset_to_port() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import vpc_security_group_egress_rule

vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import vpc_security_group_egress_rule

vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import vpc_security_group_egress_rule

vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.securityGroupRuleId">security_group_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv4Input">cidr_ipv4_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv6Input">cidr_ipv6_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.fromPortInput">from_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.ipProtocolInput">ip_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.prefixListIdInput">prefix_list_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.referencedSecurityGroupIdInput">referenced_security_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.securityGroupIdInput">security_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.toPortInput">to_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv4">cidr_ipv4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv6">cidr_ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.prefixListId">prefix_list_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.referencedSecurityGroupId">referenced_security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.securityGroupId">security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `security_group_rule_id`<sup>Required</sup> <a name="security_group_rule_id" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.securityGroupRuleId"></a>

```python
security_group_rule_id: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `cidr_ipv4_input`<sup>Optional</sup> <a name="cidr_ipv4_input" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv4Input"></a>

```python
cidr_ipv4_input: str
```

- *Type:* str

---

##### `cidr_ipv6_input`<sup>Optional</sup> <a name="cidr_ipv6_input" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv6Input"></a>

```python
cidr_ipv6_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `from_port_input`<sup>Optional</sup> <a name="from_port_input" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.fromPortInput"></a>

```python
from_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_protocol_input`<sup>Optional</sup> <a name="ip_protocol_input" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.ipProtocolInput"></a>

```python
ip_protocol_input: str
```

- *Type:* str

---

##### `prefix_list_id_input`<sup>Optional</sup> <a name="prefix_list_id_input" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.prefixListIdInput"></a>

```python
prefix_list_id_input: str
```

- *Type:* str

---

##### `referenced_security_group_id_input`<sup>Optional</sup> <a name="referenced_security_group_id_input" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.referencedSecurityGroupIdInput"></a>

```python
referenced_security_group_id_input: str
```

- *Type:* str

---

##### `security_group_id_input`<sup>Optional</sup> <a name="security_group_id_input" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.securityGroupIdInput"></a>

```python
security_group_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `to_port_input`<sup>Optional</sup> <a name="to_port_input" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.toPortInput"></a>

```python
to_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cidr_ipv4`<sup>Required</sup> <a name="cidr_ipv4" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv4"></a>

```python
cidr_ipv4: str
```

- *Type:* str

---

##### `cidr_ipv6`<sup>Required</sup> <a name="cidr_ipv6" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv6"></a>

```python
cidr_ipv6: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

---

##### `prefix_list_id`<sup>Required</sup> <a name="prefix_list_id" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.prefixListId"></a>

```python
prefix_list_id: str
```

- *Type:* str

---

##### `referenced_security_group_id`<sup>Required</sup> <a name="referenced_security_group_id" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.referencedSecurityGroupId"></a>

```python
referenced_security_group_id: str
```

- *Type:* str

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VpcSecurityGroupEgressRuleConfig <a name="VpcSecurityGroupEgressRuleConfig" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_security_group_egress_rule

vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ip_protocol: str,
  cidr_ipv4: str = None,
  cidr_ipv6: str = None,
  description: str = None,
  from_port: typing.Union[int, float] = None,
  prefix_list_id: str = None,
  referenced_security_group_id: str = None,
  security_group_id: str = None,
  tags: typing.Mapping[str] = None,
  to_port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#ip_protocol VpcSecurityGroupEgressRule#ip_protocol}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.cidrIpv4">cidr_ipv4</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#cidr_ipv4 VpcSecurityGroupEgressRule#cidr_ipv4}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.cidrIpv6">cidr_ipv6</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#cidr_ipv6 VpcSecurityGroupEgressRule#cidr_ipv6}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#description VpcSecurityGroupEgressRule#description}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#from_port VpcSecurityGroupEgressRule#from_port}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.prefixListId">prefix_list_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#prefix_list_id VpcSecurityGroupEgressRule#prefix_list_id}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.referencedSecurityGroupId">referenced_security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#referenced_security_group_id VpcSecurityGroupEgressRule#referenced_security_group_id}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.securityGroupId">security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#security_group_id VpcSecurityGroupEgressRule#security_group_id}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#tags VpcSecurityGroupEgressRule#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#to_port VpcSecurityGroupEgressRule#to_port}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#ip_protocol VpcSecurityGroupEgressRule#ip_protocol}.

---

##### `cidr_ipv4`<sup>Optional</sup> <a name="cidr_ipv4" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.cidrIpv4"></a>

```python
cidr_ipv4: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#cidr_ipv4 VpcSecurityGroupEgressRule#cidr_ipv4}.

---

##### `cidr_ipv6`<sup>Optional</sup> <a name="cidr_ipv6" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.cidrIpv6"></a>

```python
cidr_ipv6: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#cidr_ipv6 VpcSecurityGroupEgressRule#cidr_ipv6}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#description VpcSecurityGroupEgressRule#description}.

---

##### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#from_port VpcSecurityGroupEgressRule#from_port}.

---

##### `prefix_list_id`<sup>Optional</sup> <a name="prefix_list_id" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.prefixListId"></a>

```python
prefix_list_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#prefix_list_id VpcSecurityGroupEgressRule#prefix_list_id}.

---

##### `referenced_security_group_id`<sup>Optional</sup> <a name="referenced_security_group_id" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.referencedSecurityGroupId"></a>

```python
referenced_security_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#referenced_security_group_id VpcSecurityGroupEgressRule#referenced_security_group_id}.

---

##### `security_group_id`<sup>Optional</sup> <a name="security_group_id" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#security_group_id VpcSecurityGroupEgressRule#security_group_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#tags VpcSecurityGroupEgressRule#tags}.

---

##### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#to_port VpcSecurityGroupEgressRule#to_port}.

---



