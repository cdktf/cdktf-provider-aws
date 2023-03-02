# `dataAwsRoute53ResolverFirewallRules` Submodule <a name="`dataAwsRoute53ResolverFirewallRules` Submodule" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRoute53ResolverFirewallRules <a name="DataAwsRoute53ResolverFirewallRules" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rules aws_route53_resolver_firewall_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_resolver_firewall_rules

dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  firewall_rule_group_id: str,
  action: str = None,
  id: str = None,
  priority: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.firewallRuleGroupId">firewall_rule_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rules#firewall_rule_group_id DataAwsRoute53ResolverFirewallRules#firewall_rule_group_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rules#action DataAwsRoute53ResolverFirewallRules#action}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rules#id DataAwsRoute53ResolverFirewallRules#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rules#priority DataAwsRoute53ResolverFirewallRules#priority}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `firewall_rule_group_id`<sup>Required</sup> <a name="firewall_rule_group_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.firewallRuleGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rules#firewall_rule_group_id DataAwsRoute53ResolverFirewallRules#firewall_rule_group_id}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.action"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rules#action DataAwsRoute53ResolverFirewallRules#action}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rules#id DataAwsRoute53ResolverFirewallRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rules#priority DataAwsRoute53ResolverFirewallRules#priority}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.resetPriority">reset_priority</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.resetPriority"></a>

```python
def reset_priority() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_resolver_firewall_rules

dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_resolver_firewall_rules

dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_resolver_firewall_rules

dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.firewallRules">firewall_rules</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList">DataAwsRoute53ResolverFirewallRulesFirewallRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.firewallRuleGroupIdInput">firewall_rule_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.firewallRuleGroupId">firewall_rule_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `firewall_rules`<sup>Required</sup> <a name="firewall_rules" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.firewallRules"></a>

```python
firewall_rules: DataAwsRoute53ResolverFirewallRulesFirewallRulesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList">DataAwsRoute53ResolverFirewallRulesFirewallRulesList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `firewall_rule_group_id_input`<sup>Optional</sup> <a name="firewall_rule_group_id_input" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.firewallRuleGroupIdInput"></a>

```python
firewall_rule_group_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `firewall_rule_group_id`<sup>Required</sup> <a name="firewall_rule_group_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.firewallRuleGroupId"></a>

```python
firewall_rule_group_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRoute53ResolverFirewallRulesConfig <a name="DataAwsRoute53ResolverFirewallRulesConfig" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_resolver_firewall_rules

dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  firewall_rule_group_id: str,
  action: str = None,
  id: str = None,
  priority: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.firewallRuleGroupId">firewall_rule_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rules#firewall_rule_group_id DataAwsRoute53ResolverFirewallRules#firewall_rule_group_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rules#action DataAwsRoute53ResolverFirewallRules#action}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rules#id DataAwsRoute53ResolverFirewallRules#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rules#priority DataAwsRoute53ResolverFirewallRules#priority}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `firewall_rule_group_id`<sup>Required</sup> <a name="firewall_rule_group_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.firewallRuleGroupId"></a>

```python
firewall_rule_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rules#firewall_rule_group_id DataAwsRoute53ResolverFirewallRules#firewall_rule_group_id}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rules#action DataAwsRoute53ResolverFirewallRules#action}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rules#id DataAwsRoute53ResolverFirewallRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_firewall_rules#priority DataAwsRoute53ResolverFirewallRules#priority}.

---

### DataAwsRoute53ResolverFirewallRulesFirewallRules <a name="DataAwsRoute53ResolverFirewallRulesFirewallRules" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRules.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_resolver_firewall_rules

dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRules()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsRoute53ResolverFirewallRulesFirewallRulesList <a name="DataAwsRoute53ResolverFirewallRulesFirewallRulesList" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_resolver_firewall_rules

dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference <a name="DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_resolver_firewall_rules

dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.blockOverrideDnsType">block_override_dns_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.blockOverrideDomain">block_override_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.blockOverrideTtl">block_override_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.blockResponse">block_response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.creatorRequestId">creator_request_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.firewallDomainListId">firewall_domain_list_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.firewallRuleGroupId">firewall_rule_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.modificationTime">modification_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRules">DataAwsRoute53ResolverFirewallRulesFirewallRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `block_override_dns_type`<sup>Required</sup> <a name="block_override_dns_type" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.blockOverrideDnsType"></a>

```python
block_override_dns_type: str
```

- *Type:* str

---

##### `block_override_domain`<sup>Required</sup> <a name="block_override_domain" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.blockOverrideDomain"></a>

```python
block_override_domain: str
```

- *Type:* str

---

##### `block_override_ttl`<sup>Required</sup> <a name="block_override_ttl" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.blockOverrideTtl"></a>

```python
block_override_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `block_response`<sup>Required</sup> <a name="block_response" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.blockResponse"></a>

```python
block_response: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `creator_request_id`<sup>Required</sup> <a name="creator_request_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.creatorRequestId"></a>

```python
creator_request_id: str
```

- *Type:* str

---

##### `firewall_domain_list_id`<sup>Required</sup> <a name="firewall_domain_list_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.firewallDomainListId"></a>

```python
firewall_domain_list_id: str
```

- *Type:* str

---

##### `firewall_rule_group_id`<sup>Required</sup> <a name="firewall_rule_group_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.firewallRuleGroupId"></a>

```python
firewall_rule_group_id: str
```

- *Type:* str

---

##### `modification_time`<sup>Required</sup> <a name="modification_time" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.modificationTime"></a>

```python
modification_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsRoute53ResolverFirewallRulesFirewallRules
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallRules.DataAwsRoute53ResolverFirewallRulesFirewallRules">DataAwsRoute53ResolverFirewallRulesFirewallRules</a>

---



