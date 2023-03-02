# `vpcSecurityGroupIngressRule` Submodule <a name="`vpcSecurityGroupIngressRule` Submodule" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcSecurityGroupIngressRule <a name="VpcSecurityGroupIngressRule" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule aws_vpc_security_group_ingress_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_security_group_ingress_rule

vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule(
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
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.ipProtocol">ip_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#ip_protocol VpcSecurityGroupIngressRule#ip_protocol}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.cidrIpv4">cidr_ipv4</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#cidr_ipv4 VpcSecurityGroupIngressRule#cidr_ipv4}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.cidrIpv6">cidr_ipv6</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#cidr_ipv6 VpcSecurityGroupIngressRule#cidr_ipv6}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#description VpcSecurityGroupIngressRule#description}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#from_port VpcSecurityGroupIngressRule#from_port}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.prefixListId">prefix_list_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#prefix_list_id VpcSecurityGroupIngressRule#prefix_list_id}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.referencedSecurityGroupId">referenced_security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#referenced_security_group_id VpcSecurityGroupIngressRule#referenced_security_group_id}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.securityGroupId">security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#security_group_id VpcSecurityGroupIngressRule#security_group_id}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#tags VpcSecurityGroupIngressRule#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#to_port VpcSecurityGroupIngressRule#to_port}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.ipProtocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#ip_protocol VpcSecurityGroupIngressRule#ip_protocol}.

---

##### `cidr_ipv4`<sup>Optional</sup> <a name="cidr_ipv4" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.cidrIpv4"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#cidr_ipv4 VpcSecurityGroupIngressRule#cidr_ipv4}.

---

##### `cidr_ipv6`<sup>Optional</sup> <a name="cidr_ipv6" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.cidrIpv6"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#cidr_ipv6 VpcSecurityGroupIngressRule#cidr_ipv6}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#description VpcSecurityGroupIngressRule#description}.

---

##### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.fromPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#from_port VpcSecurityGroupIngressRule#from_port}.

---

##### `prefix_list_id`<sup>Optional</sup> <a name="prefix_list_id" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.prefixListId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#prefix_list_id VpcSecurityGroupIngressRule#prefix_list_id}.

---

##### `referenced_security_group_id`<sup>Optional</sup> <a name="referenced_security_group_id" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.referencedSecurityGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#referenced_security_group_id VpcSecurityGroupIngressRule#referenced_security_group_id}.

---

##### `security_group_id`<sup>Optional</sup> <a name="security_group_id" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.securityGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#security_group_id VpcSecurityGroupIngressRule#security_group_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#tags VpcSecurityGroupIngressRule#tags}.

---

##### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.Initializer.parameter.toPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#to_port VpcSecurityGroupIngressRule#to_port}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetCidrIpv4">reset_cidr_ipv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetCidrIpv6">reset_cidr_ipv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetFromPort">reset_from_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetPrefixListId">reset_prefix_list_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetReferencedSecurityGroupId">reset_referenced_security_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetSecurityGroupId">reset_security_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetToPort">reset_to_port</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_cidr_ipv4` <a name="reset_cidr_ipv4" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetCidrIpv4"></a>

```python
def reset_cidr_ipv4() -> None
```

##### `reset_cidr_ipv6` <a name="reset_cidr_ipv6" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetCidrIpv6"></a>

```python
def reset_cidr_ipv6() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_from_port` <a name="reset_from_port" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetFromPort"></a>

```python
def reset_from_port() -> None
```

##### `reset_prefix_list_id` <a name="reset_prefix_list_id" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetPrefixListId"></a>

```python
def reset_prefix_list_id() -> None
```

##### `reset_referenced_security_group_id` <a name="reset_referenced_security_group_id" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetReferencedSecurityGroupId"></a>

```python
def reset_referenced_security_group_id() -> None
```

##### `reset_security_group_id` <a name="reset_security_group_id" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetSecurityGroupId"></a>

```python
def reset_security_group_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_to_port` <a name="reset_to_port" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.resetToPort"></a>

```python
def reset_to_port() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import vpc_security_group_ingress_rule

vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import vpc_security_group_ingress_rule

vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import vpc_security_group_ingress_rule

vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.securityGroupRuleId">security_group_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.cidrIpv4Input">cidr_ipv4_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.cidrIpv6Input">cidr_ipv6_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.fromPortInput">from_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.ipProtocolInput">ip_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.prefixListIdInput">prefix_list_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.referencedSecurityGroupIdInput">referenced_security_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.securityGroupIdInput">security_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.toPortInput">to_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.cidrIpv4">cidr_ipv4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.cidrIpv6">cidr_ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.prefixListId">prefix_list_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.referencedSecurityGroupId">referenced_security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.securityGroupId">security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `security_group_rule_id`<sup>Required</sup> <a name="security_group_rule_id" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.securityGroupRuleId"></a>

```python
security_group_rule_id: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `cidr_ipv4_input`<sup>Optional</sup> <a name="cidr_ipv4_input" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.cidrIpv4Input"></a>

```python
cidr_ipv4_input: str
```

- *Type:* str

---

##### `cidr_ipv6_input`<sup>Optional</sup> <a name="cidr_ipv6_input" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.cidrIpv6Input"></a>

```python
cidr_ipv6_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `from_port_input`<sup>Optional</sup> <a name="from_port_input" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.fromPortInput"></a>

```python
from_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_protocol_input`<sup>Optional</sup> <a name="ip_protocol_input" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.ipProtocolInput"></a>

```python
ip_protocol_input: str
```

- *Type:* str

---

##### `prefix_list_id_input`<sup>Optional</sup> <a name="prefix_list_id_input" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.prefixListIdInput"></a>

```python
prefix_list_id_input: str
```

- *Type:* str

---

##### `referenced_security_group_id_input`<sup>Optional</sup> <a name="referenced_security_group_id_input" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.referencedSecurityGroupIdInput"></a>

```python
referenced_security_group_id_input: str
```

- *Type:* str

---

##### `security_group_id_input`<sup>Optional</sup> <a name="security_group_id_input" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.securityGroupIdInput"></a>

```python
security_group_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `to_port_input`<sup>Optional</sup> <a name="to_port_input" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.toPortInput"></a>

```python
to_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cidr_ipv4`<sup>Required</sup> <a name="cidr_ipv4" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.cidrIpv4"></a>

```python
cidr_ipv4: str
```

- *Type:* str

---

##### `cidr_ipv6`<sup>Required</sup> <a name="cidr_ipv6" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.cidrIpv6"></a>

```python
cidr_ipv6: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

---

##### `prefix_list_id`<sup>Required</sup> <a name="prefix_list_id" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.prefixListId"></a>

```python
prefix_list_id: str
```

- *Type:* str

---

##### `referenced_security_group_id`<sup>Required</sup> <a name="referenced_security_group_id" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.referencedSecurityGroupId"></a>

```python
referenced_security_group_id: str
```

- *Type:* str

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VpcSecurityGroupIngressRuleConfig <a name="VpcSecurityGroupIngressRuleConfig" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_security_group_ingress_rule

vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig(
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
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#ip_protocol VpcSecurityGroupIngressRule#ip_protocol}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.cidrIpv4">cidr_ipv4</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#cidr_ipv4 VpcSecurityGroupIngressRule#cidr_ipv4}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.cidrIpv6">cidr_ipv6</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#cidr_ipv6 VpcSecurityGroupIngressRule#cidr_ipv6}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#description VpcSecurityGroupIngressRule#description}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#from_port VpcSecurityGroupIngressRule#from_port}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.prefixListId">prefix_list_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#prefix_list_id VpcSecurityGroupIngressRule#prefix_list_id}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.referencedSecurityGroupId">referenced_security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#referenced_security_group_id VpcSecurityGroupIngressRule#referenced_security_group_id}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.securityGroupId">security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#security_group_id VpcSecurityGroupIngressRule#security_group_id}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#tags VpcSecurityGroupIngressRule#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#to_port VpcSecurityGroupIngressRule#to_port}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#ip_protocol VpcSecurityGroupIngressRule#ip_protocol}.

---

##### `cidr_ipv4`<sup>Optional</sup> <a name="cidr_ipv4" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.cidrIpv4"></a>

```python
cidr_ipv4: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#cidr_ipv4 VpcSecurityGroupIngressRule#cidr_ipv4}.

---

##### `cidr_ipv6`<sup>Optional</sup> <a name="cidr_ipv6" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.cidrIpv6"></a>

```python
cidr_ipv6: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#cidr_ipv6 VpcSecurityGroupIngressRule#cidr_ipv6}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#description VpcSecurityGroupIngressRule#description}.

---

##### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#from_port VpcSecurityGroupIngressRule#from_port}.

---

##### `prefix_list_id`<sup>Optional</sup> <a name="prefix_list_id" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.prefixListId"></a>

```python
prefix_list_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#prefix_list_id VpcSecurityGroupIngressRule#prefix_list_id}.

---

##### `referenced_security_group_id`<sup>Optional</sup> <a name="referenced_security_group_id" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.referencedSecurityGroupId"></a>

```python
referenced_security_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#referenced_security_group_id VpcSecurityGroupIngressRule#referenced_security_group_id}.

---

##### `security_group_id`<sup>Optional</sup> <a name="security_group_id" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#security_group_id VpcSecurityGroupIngressRule#security_group_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#tags VpcSecurityGroupIngressRule#tags}.

---

##### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktf/provider-aws.vpcSecurityGroupIngressRule.VpcSecurityGroupIngressRuleConfig.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_ingress_rule#to_port VpcSecurityGroupIngressRule#to_port}.

---



