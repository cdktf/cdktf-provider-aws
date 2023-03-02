# `dataAwsRoute53ResolverFirewallRuleGroupAssociation` Submodule <a name="`dataAwsRoute53ResolverFirewallRuleGroupAssociation` Submodule" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRoute53ResolverFirewallRuleGroupAssociation <a name="DataAwsRoute53ResolverFirewallRuleGroupAssociation" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rule_group_association aws_route53_resolver_firewall_rule_group_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_resolver_firewall_rule_group_association

dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  firewall_rule_group_association_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.firewallRuleGroupAssociationId">firewall_rule_group_association_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rule_group_association#firewall_rule_group_association_id DataAwsRoute53ResolverFirewallRuleGroupAssociation#firewall_rule_group_association_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rule_group_association#id DataAwsRoute53ResolverFirewallRuleGroupAssociation#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `firewall_rule_group_association_id`<sup>Required</sup> <a name="firewall_rule_group_association_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.firewallRuleGroupAssociationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rule_group_association#firewall_rule_group_association_id DataAwsRoute53ResolverFirewallRuleGroupAssociation#firewall_rule_group_association_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rule_group_association#id DataAwsRoute53ResolverFirewallRuleGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_resolver_firewall_rule_group_association

dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_resolver_firewall_rule_group_association

dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_resolver_firewall_rule_group_association

dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.creatorRequestId">creator_request_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupId">firewall_rule_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.managedOwnerName">managed_owner_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.modificationTime">modification_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.mutationProtection">mutation_protection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.statusMessage">status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupAssociationIdInput">firewall_rule_group_association_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupAssociationId">firewall_rule_group_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `creator_request_id`<sup>Required</sup> <a name="creator_request_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.creatorRequestId"></a>

```python
creator_request_id: str
```

- *Type:* str

---

##### `firewall_rule_group_id`<sup>Required</sup> <a name="firewall_rule_group_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupId"></a>

```python
firewall_rule_group_id: str
```

- *Type:* str

---

##### `managed_owner_name`<sup>Required</sup> <a name="managed_owner_name" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.managedOwnerName"></a>

```python
managed_owner_name: str
```

- *Type:* str

---

##### `modification_time`<sup>Required</sup> <a name="modification_time" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.modificationTime"></a>

```python
modification_time: str
```

- *Type:* str

---

##### `mutation_protection`<sup>Required</sup> <a name="mutation_protection" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.mutationProtection"></a>

```python
mutation_protection: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_message`<sup>Required</sup> <a name="status_message" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.statusMessage"></a>

```python
status_message: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `firewall_rule_group_association_id_input`<sup>Optional</sup> <a name="firewall_rule_group_association_id_input" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupAssociationIdInput"></a>

```python
firewall_rule_group_association_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `firewall_rule_group_association_id`<sup>Required</sup> <a name="firewall_rule_group_association_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupAssociationId"></a>

```python
firewall_rule_group_association_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig <a name="DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_resolver_firewall_rule_group_association

dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  firewall_rule_group_association_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.firewallRuleGroupAssociationId">firewall_rule_group_association_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rule_group_association#firewall_rule_group_association_id DataAwsRoute53ResolverFirewallRuleGroupAssociation#firewall_rule_group_association_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rule_group_association#id DataAwsRoute53ResolverFirewallRuleGroupAssociation#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `firewall_rule_group_association_id`<sup>Required</sup> <a name="firewall_rule_group_association_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.firewallRuleGroupAssociationId"></a>

```python
firewall_rule_group_association_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rule_group_association#firewall_rule_group_association_id DataAwsRoute53ResolverFirewallRuleGroupAssociation#firewall_rule_group_association_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rule_group_association#id DataAwsRoute53ResolverFirewallRuleGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



