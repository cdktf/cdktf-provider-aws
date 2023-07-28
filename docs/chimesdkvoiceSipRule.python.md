# `aws_chimesdkvoice_sip_rule`

Refer to the Terraform Registory for docs: [`aws_chimesdkvoice_sip_rule`](https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/chimesdkvoice_sip_rule).

# `chimesdkvoiceSipRule` Submodule <a name="`chimesdkvoiceSipRule` Submodule" id="@cdktf/provider-aws.chimesdkvoiceSipRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimesdkvoiceSipRule <a name="ChimesdkvoiceSipRule" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/chimesdkvoice_sip_rule aws_chimesdkvoice_sip_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chimesdkvoice_sip_rule

chimesdkvoiceSipRule.ChimesdkvoiceSipRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  target_applications: typing.Union[IResolvable, typing.List[ChimesdkvoiceSipRuleTargetApplications]],
  trigger_type: str,
  trigger_value: str,
  disabled: typing.Union[bool, IResolvable] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/chimesdkvoice_sip_rule#name ChimesdkvoiceSipRule#name}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.targetApplications">target_applications</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications">ChimesdkvoiceSipRuleTargetApplications</a>]]</code> | target_applications block. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.triggerType">trigger_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/chimesdkvoice_sip_rule#trigger_type ChimesdkvoiceSipRule#trigger_type}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.triggerValue">trigger_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/chimesdkvoice_sip_rule#trigger_value ChimesdkvoiceSipRule#trigger_value}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/chimesdkvoice_sip_rule#disabled ChimesdkvoiceSipRule#disabled}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/chimesdkvoice_sip_rule#id ChimesdkvoiceSipRule#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/chimesdkvoice_sip_rule#name ChimesdkvoiceSipRule#name}.

---

##### `target_applications`<sup>Required</sup> <a name="target_applications" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.targetApplications"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications">ChimesdkvoiceSipRuleTargetApplications</a>]]

target_applications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/chimesdkvoice_sip_rule#target_applications ChimesdkvoiceSipRule#target_applications}

---

##### `trigger_type`<sup>Required</sup> <a name="trigger_type" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.triggerType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/chimesdkvoice_sip_rule#trigger_type ChimesdkvoiceSipRule#trigger_type}.

---

##### `trigger_value`<sup>Required</sup> <a name="trigger_value" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.triggerValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/chimesdkvoice_sip_rule#trigger_value ChimesdkvoiceSipRule#trigger_value}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/chimesdkvoice_sip_rule#disabled ChimesdkvoiceSipRule#disabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/chimesdkvoice_sip_rule#id ChimesdkvoiceSipRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.putTargetApplications">put_target_applications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_target_applications` <a name="put_target_applications" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.putTargetApplications"></a>

```python
def put_target_applications(
  value: typing.Union[IResolvable, typing.List[ChimesdkvoiceSipRuleTargetApplications]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.putTargetApplications.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications">ChimesdkvoiceSipRuleTargetApplications</a>]]

---

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import chimesdkvoice_sip_rule

chimesdkvoiceSipRule.ChimesdkvoiceSipRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import chimesdkvoice_sip_rule

chimesdkvoiceSipRule.ChimesdkvoiceSipRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import chimesdkvoice_sip_rule

chimesdkvoiceSipRule.ChimesdkvoiceSipRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.targetApplications">target_applications</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList">ChimesdkvoiceSipRuleTargetApplicationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.targetApplicationsInput">target_applications_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications">ChimesdkvoiceSipRuleTargetApplications</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.triggerTypeInput">trigger_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.triggerValueInput">trigger_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.triggerType">trigger_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.triggerValue">trigger_value</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `target_applications`<sup>Required</sup> <a name="target_applications" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.targetApplications"></a>

```python
target_applications: ChimesdkvoiceSipRuleTargetApplicationsList
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList">ChimesdkvoiceSipRuleTargetApplicationsList</a>

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `target_applications_input`<sup>Optional</sup> <a name="target_applications_input" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.targetApplicationsInput"></a>

```python
target_applications_input: typing.Union[IResolvable, typing.List[ChimesdkvoiceSipRuleTargetApplications]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications">ChimesdkvoiceSipRuleTargetApplications</a>]]

---

##### `trigger_type_input`<sup>Optional</sup> <a name="trigger_type_input" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.triggerTypeInput"></a>

```python
trigger_type_input: str
```

- *Type:* str

---

##### `trigger_value_input`<sup>Optional</sup> <a name="trigger_value_input" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.triggerValueInput"></a>

```python
trigger_value_input: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `trigger_type`<sup>Required</sup> <a name="trigger_type" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.triggerType"></a>

```python
trigger_type: str
```

- *Type:* str

---

##### `trigger_value`<sup>Required</sup> <a name="trigger_value" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.triggerValue"></a>

```python
trigger_value: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ChimesdkvoiceSipRuleConfig <a name="ChimesdkvoiceSipRuleConfig" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chimesdkvoice_sip_rule

chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  target_applications: typing.Union[IResolvable, typing.List[ChimesdkvoiceSipRuleTargetApplications]],
  trigger_type: str,
  trigger_value: str,
  disabled: typing.Union[bool, IResolvable] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/chimesdkvoice_sip_rule#name ChimesdkvoiceSipRule#name}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.targetApplications">target_applications</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications">ChimesdkvoiceSipRuleTargetApplications</a>]]</code> | target_applications block. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.triggerType">trigger_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/chimesdkvoice_sip_rule#trigger_type ChimesdkvoiceSipRule#trigger_type}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.triggerValue">trigger_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/chimesdkvoice_sip_rule#trigger_value ChimesdkvoiceSipRule#trigger_value}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/chimesdkvoice_sip_rule#disabled ChimesdkvoiceSipRule#disabled}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/chimesdkvoice_sip_rule#id ChimesdkvoiceSipRule#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/chimesdkvoice_sip_rule#name ChimesdkvoiceSipRule#name}.

---

##### `target_applications`<sup>Required</sup> <a name="target_applications" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.targetApplications"></a>

```python
target_applications: typing.Union[IResolvable, typing.List[ChimesdkvoiceSipRuleTargetApplications]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications">ChimesdkvoiceSipRuleTargetApplications</a>]]

target_applications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/chimesdkvoice_sip_rule#target_applications ChimesdkvoiceSipRule#target_applications}

---

##### `trigger_type`<sup>Required</sup> <a name="trigger_type" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.triggerType"></a>

```python
trigger_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/chimesdkvoice_sip_rule#trigger_type ChimesdkvoiceSipRule#trigger_type}.

---

##### `trigger_value`<sup>Required</sup> <a name="trigger_value" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.triggerValue"></a>

```python
trigger_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/chimesdkvoice_sip_rule#trigger_value ChimesdkvoiceSipRule#trigger_value}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/chimesdkvoice_sip_rule#disabled ChimesdkvoiceSipRule#disabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/chimesdkvoice_sip_rule#id ChimesdkvoiceSipRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ChimesdkvoiceSipRuleTargetApplications <a name="ChimesdkvoiceSipRuleTargetApplications" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chimesdkvoice_sip_rule

chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications(
  aws_region: str,
  priority: typing.Union[int, float],
  sip_media_application_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications.property.awsRegion">aws_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/chimesdkvoice_sip_rule#aws_region ChimesdkvoiceSipRule#aws_region}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/chimesdkvoice_sip_rule#priority ChimesdkvoiceSipRule#priority}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications.property.sipMediaApplicationId">sip_media_application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/chimesdkvoice_sip_rule#sip_media_application_id ChimesdkvoiceSipRule#sip_media_application_id}. |

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/chimesdkvoice_sip_rule#aws_region ChimesdkvoiceSipRule#aws_region}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/chimesdkvoice_sip_rule#priority ChimesdkvoiceSipRule#priority}.

---

##### `sip_media_application_id`<sup>Required</sup> <a name="sip_media_application_id" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications.property.sipMediaApplicationId"></a>

```python
sip_media_application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/chimesdkvoice_sip_rule#sip_media_application_id ChimesdkvoiceSipRule#sip_media_application_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimesdkvoiceSipRuleTargetApplicationsList <a name="ChimesdkvoiceSipRuleTargetApplicationsList" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chimesdkvoice_sip_rule

chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChimesdkvoiceSipRuleTargetApplicationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications">ChimesdkvoiceSipRuleTargetApplications</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ChimesdkvoiceSipRuleTargetApplications]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications">ChimesdkvoiceSipRuleTargetApplications</a>]]

---


### ChimesdkvoiceSipRuleTargetApplicationsOutputReference <a name="ChimesdkvoiceSipRuleTargetApplicationsOutputReference" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chimesdkvoice_sip_rule

chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.awsRegionInput">aws_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.sipMediaApplicationIdInput">sip_media_application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.awsRegion">aws_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.sipMediaApplicationId">sip_media_application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications">ChimesdkvoiceSipRuleTargetApplications</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_region_input`<sup>Optional</sup> <a name="aws_region_input" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.awsRegionInput"></a>

```python
aws_region_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sip_media_application_id_input`<sup>Optional</sup> <a name="sip_media_application_id_input" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.sipMediaApplicationIdInput"></a>

```python
sip_media_application_id_input: str
```

- *Type:* str

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sip_media_application_id`<sup>Required</sup> <a name="sip_media_application_id" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.sipMediaApplicationId"></a>

```python
sip_media_application_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplicationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ChimesdkvoiceSipRuleTargetApplications]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.chimesdkvoiceSipRule.ChimesdkvoiceSipRuleTargetApplications">ChimesdkvoiceSipRuleTargetApplications</a>]

---



