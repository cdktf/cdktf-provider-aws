# `networkAclRule` Submodule <a name="`networkAclRule` Submodule" id="@cdktf/provider-aws.networkAclRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkAclRule <a name="NetworkAclRule" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule aws_network_acl_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import network_acl_rule

networkAclRule.NetworkAclRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  network_acl_id: str,
  protocol: str,
  rule_action: str,
  rule_number: typing.Union[int, float],
  cidr_block: str = None,
  egress: typing.Union[bool, IResolvable] = None,
  from_port: typing.Union[int, float] = None,
  icmp_code: typing.Union[int, float] = None,
  icmp_type: typing.Union[int, float] = None,
  id: str = None,
  ipv6_cidr_block: str = None,
  to_port: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.networkAclId">network_acl_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#network_acl_id NetworkAclRule#network_acl_id}. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#protocol NetworkAclRule#protocol}. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.ruleAction">rule_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#rule_action NetworkAclRule#rule_action}. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.ruleNumber">rule_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#rule_number NetworkAclRule#rule_number}. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.cidrBlock">cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#cidr_block NetworkAclRule#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.egress">egress</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#egress NetworkAclRule#egress}. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#from_port NetworkAclRule#from_port}. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.icmpCode">icmp_code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#icmp_code NetworkAclRule#icmp_code}. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.icmpType">icmp_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#icmp_type NetworkAclRule#icmp_type}. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#id NetworkAclRule#id}. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#ipv6_cidr_block NetworkAclRule#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#to_port NetworkAclRule#to_port}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `network_acl_id`<sup>Required</sup> <a name="network_acl_id" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.networkAclId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#network_acl_id NetworkAclRule#network_acl_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#protocol NetworkAclRule#protocol}.

---

##### `rule_action`<sup>Required</sup> <a name="rule_action" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.ruleAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#rule_action NetworkAclRule#rule_action}.

---

##### `rule_number`<sup>Required</sup> <a name="rule_number" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.ruleNumber"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#rule_number NetworkAclRule#rule_number}.

---

##### `cidr_block`<sup>Optional</sup> <a name="cidr_block" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.cidrBlock"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#cidr_block NetworkAclRule#cidr_block}.

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.egress"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#egress NetworkAclRule#egress}.

---

##### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.fromPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#from_port NetworkAclRule#from_port}.

---

##### `icmp_code`<sup>Optional</sup> <a name="icmp_code" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.icmpCode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#icmp_code NetworkAclRule#icmp_code}.

---

##### `icmp_type`<sup>Optional</sup> <a name="icmp_type" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.icmpType"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#icmp_type NetworkAclRule#icmp_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#id NetworkAclRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6_cidr_block`<sup>Optional</sup> <a name="ipv6_cidr_block" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.ipv6CidrBlock"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#ipv6_cidr_block NetworkAclRule#ipv6_cidr_block}.

---

##### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.toPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#to_port NetworkAclRule#to_port}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetCidrBlock">reset_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetEgress">reset_egress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetFromPort">reset_from_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetIcmpCode">reset_icmp_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetIcmpType">reset_icmp_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetIpv6CidrBlock">reset_ipv6_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetToPort">reset_to_port</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_cidr_block` <a name="reset_cidr_block" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetCidrBlock"></a>

```python
def reset_cidr_block() -> None
```

##### `reset_egress` <a name="reset_egress" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetEgress"></a>

```python
def reset_egress() -> None
```

##### `reset_from_port` <a name="reset_from_port" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetFromPort"></a>

```python
def reset_from_port() -> None
```

##### `reset_icmp_code` <a name="reset_icmp_code" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetIcmpCode"></a>

```python
def reset_icmp_code() -> None
```

##### `reset_icmp_type` <a name="reset_icmp_type" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetIcmpType"></a>

```python
def reset_icmp_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ipv6_cidr_block` <a name="reset_ipv6_cidr_block" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetIpv6CidrBlock"></a>

```python
def reset_ipv6_cidr_block() -> None
```

##### `reset_to_port` <a name="reset_to_port" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.resetToPort"></a>

```python
def reset_to_port() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import network_acl_rule

networkAclRule.NetworkAclRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import network_acl_rule

networkAclRule.NetworkAclRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import network_acl_rule

networkAclRule.NetworkAclRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.cidrBlockInput">cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.egressInput">egress_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.fromPortInput">from_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.icmpCodeInput">icmp_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.icmpTypeInput">icmp_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.ipv6CidrBlockInput">ipv6_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.networkAclIdInput">network_acl_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.ruleActionInput">rule_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.ruleNumberInput">rule_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.toPortInput">to_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.egress">egress</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.icmpCode">icmp_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.icmpType">icmp_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.networkAclId">network_acl_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.ruleAction">rule_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.ruleNumber">rule_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cidr_block_input`<sup>Optional</sup> <a name="cidr_block_input" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.cidrBlockInput"></a>

```python
cidr_block_input: str
```

- *Type:* str

---

##### `egress_input`<sup>Optional</sup> <a name="egress_input" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.egressInput"></a>

```python
egress_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `from_port_input`<sup>Optional</sup> <a name="from_port_input" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.fromPortInput"></a>

```python
from_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `icmp_code_input`<sup>Optional</sup> <a name="icmp_code_input" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.icmpCodeInput"></a>

```python
icmp_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `icmp_type_input`<sup>Optional</sup> <a name="icmp_type_input" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.icmpTypeInput"></a>

```python
icmp_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ipv6_cidr_block_input`<sup>Optional</sup> <a name="ipv6_cidr_block_input" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.ipv6CidrBlockInput"></a>

```python
ipv6_cidr_block_input: str
```

- *Type:* str

---

##### `network_acl_id_input`<sup>Optional</sup> <a name="network_acl_id_input" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.networkAclIdInput"></a>

```python
network_acl_id_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `rule_action_input`<sup>Optional</sup> <a name="rule_action_input" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.ruleActionInput"></a>

```python
rule_action_input: str
```

- *Type:* str

---

##### `rule_number_input`<sup>Optional</sup> <a name="rule_number_input" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.ruleNumberInput"></a>

```python
rule_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port_input`<sup>Optional</sup> <a name="to_port_input" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.toPortInput"></a>

```python
to_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.egress"></a>

```python
egress: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `icmp_code`<sup>Required</sup> <a name="icmp_code" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.icmpCode"></a>

```python
icmp_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `icmp_type`<sup>Required</sup> <a name="icmp_type" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.icmpType"></a>

```python
icmp_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ipv6_cidr_block`<sup>Required</sup> <a name="ipv6_cidr_block" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

---

##### `network_acl_id`<sup>Required</sup> <a name="network_acl_id" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.networkAclId"></a>

```python
network_acl_id: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `rule_action`<sup>Required</sup> <a name="rule_action" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.ruleAction"></a>

```python
rule_action: str
```

- *Type:* str

---

##### `rule_number`<sup>Required</sup> <a name="rule_number" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.ruleNumber"></a>

```python
rule_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.networkAclRule.NetworkAclRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkAclRuleConfig <a name="NetworkAclRuleConfig" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import network_acl_rule

networkAclRule.NetworkAclRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  network_acl_id: str,
  protocol: str,
  rule_action: str,
  rule_number: typing.Union[int, float],
  cidr_block: str = None,
  egress: typing.Union[bool, IResolvable] = None,
  from_port: typing.Union[int, float] = None,
  icmp_code: typing.Union[int, float] = None,
  icmp_type: typing.Union[int, float] = None,
  id: str = None,
  ipv6_cidr_block: str = None,
  to_port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.networkAclId">network_acl_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#network_acl_id NetworkAclRule#network_acl_id}. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#protocol NetworkAclRule#protocol}. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.ruleAction">rule_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#rule_action NetworkAclRule#rule_action}. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.ruleNumber">rule_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#rule_number NetworkAclRule#rule_number}. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.cidrBlock">cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#cidr_block NetworkAclRule#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.egress">egress</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#egress NetworkAclRule#egress}. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#from_port NetworkAclRule#from_port}. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.icmpCode">icmp_code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#icmp_code NetworkAclRule#icmp_code}. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.icmpType">icmp_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#icmp_type NetworkAclRule#icmp_type}. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#id NetworkAclRule#id}. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#ipv6_cidr_block NetworkAclRule#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#to_port NetworkAclRule#to_port}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `network_acl_id`<sup>Required</sup> <a name="network_acl_id" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.networkAclId"></a>

```python
network_acl_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#network_acl_id NetworkAclRule#network_acl_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#protocol NetworkAclRule#protocol}.

---

##### `rule_action`<sup>Required</sup> <a name="rule_action" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.ruleAction"></a>

```python
rule_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#rule_action NetworkAclRule#rule_action}.

---

##### `rule_number`<sup>Required</sup> <a name="rule_number" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.ruleNumber"></a>

```python
rule_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#rule_number NetworkAclRule#rule_number}.

---

##### `cidr_block`<sup>Optional</sup> <a name="cidr_block" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#cidr_block NetworkAclRule#cidr_block}.

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.egress"></a>

```python
egress: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#egress NetworkAclRule#egress}.

---

##### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#from_port NetworkAclRule#from_port}.

---

##### `icmp_code`<sup>Optional</sup> <a name="icmp_code" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.icmpCode"></a>

```python
icmp_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#icmp_code NetworkAclRule#icmp_code}.

---

##### `icmp_type`<sup>Optional</sup> <a name="icmp_type" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.icmpType"></a>

```python
icmp_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#icmp_type NetworkAclRule#icmp_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#id NetworkAclRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6_cidr_block`<sup>Optional</sup> <a name="ipv6_cidr_block" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#ipv6_cidr_block NetworkAclRule#ipv6_cidr_block}.

---

##### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktf/provider-aws.networkAclRule.NetworkAclRuleConfig.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule#to_port NetworkAclRule#to_port}.

---



