# `autoscalingAttachment` Submodule <a name="`autoscalingAttachment` Submodule" id="@cdktf/provider-aws.autoscalingAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingAttachment <a name="AutoscalingAttachment" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment aws_autoscaling_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import autoscaling_attachment

autoscalingAttachment.AutoscalingAttachment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autoscaling_group_name: str,
  alb_target_group_arn: str = None,
  elb: str = None,
  id: str = None,
  lb_target_group_arn: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer.parameter.autoscalingGroupName">autoscaling_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment#autoscaling_group_name AutoscalingAttachment#autoscaling_group_name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer.parameter.albTargetGroupArn">alb_target_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment#alb_target_group_arn AutoscalingAttachment#alb_target_group_arn}. |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer.parameter.elb">elb</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment#elb AutoscalingAttachment#elb}. |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment#id AutoscalingAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer.parameter.lbTargetGroupArn">lb_target_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment#lb_target_group_arn AutoscalingAttachment#lb_target_group_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autoscaling_group_name`<sup>Required</sup> <a name="autoscaling_group_name" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer.parameter.autoscalingGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment#autoscaling_group_name AutoscalingAttachment#autoscaling_group_name}.

---

##### `alb_target_group_arn`<sup>Optional</sup> <a name="alb_target_group_arn" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer.parameter.albTargetGroupArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment#alb_target_group_arn AutoscalingAttachment#alb_target_group_arn}.

---

##### `elb`<sup>Optional</sup> <a name="elb" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer.parameter.elb"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment#elb AutoscalingAttachment#elb}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment#id AutoscalingAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lb_target_group_arn`<sup>Optional</sup> <a name="lb_target_group_arn" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.Initializer.parameter.lbTargetGroupArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment#lb_target_group_arn AutoscalingAttachment#lb_target_group_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.resetAlbTargetGroupArn">reset_alb_target_group_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.resetElb">reset_elb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.resetLbTargetGroupArn">reset_lb_target_group_arn</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_alb_target_group_arn` <a name="reset_alb_target_group_arn" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.resetAlbTargetGroupArn"></a>

```python
def reset_alb_target_group_arn() -> None
```

##### `reset_elb` <a name="reset_elb" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.resetElb"></a>

```python
def reset_elb() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_lb_target_group_arn` <a name="reset_lb_target_group_arn" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.resetLbTargetGroupArn"></a>

```python
def reset_lb_target_group_arn() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import autoscaling_attachment

autoscalingAttachment.AutoscalingAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import autoscaling_attachment

autoscalingAttachment.AutoscalingAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import autoscaling_attachment

autoscalingAttachment.AutoscalingAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.albTargetGroupArnInput">alb_target_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.autoscalingGroupNameInput">autoscaling_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.elbInput">elb_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.lbTargetGroupArnInput">lb_target_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.albTargetGroupArn">alb_target_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.autoscalingGroupName">autoscaling_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.elb">elb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.lbTargetGroupArn">lb_target_group_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alb_target_group_arn_input`<sup>Optional</sup> <a name="alb_target_group_arn_input" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.albTargetGroupArnInput"></a>

```python
alb_target_group_arn_input: str
```

- *Type:* str

---

##### `autoscaling_group_name_input`<sup>Optional</sup> <a name="autoscaling_group_name_input" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.autoscalingGroupNameInput"></a>

```python
autoscaling_group_name_input: str
```

- *Type:* str

---

##### `elb_input`<sup>Optional</sup> <a name="elb_input" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.elbInput"></a>

```python
elb_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lb_target_group_arn_input`<sup>Optional</sup> <a name="lb_target_group_arn_input" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.lbTargetGroupArnInput"></a>

```python
lb_target_group_arn_input: str
```

- *Type:* str

---

##### `alb_target_group_arn`<sup>Required</sup> <a name="alb_target_group_arn" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.albTargetGroupArn"></a>

```python
alb_target_group_arn: str
```

- *Type:* str

---

##### `autoscaling_group_name`<sup>Required</sup> <a name="autoscaling_group_name" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.autoscalingGroupName"></a>

```python
autoscaling_group_name: str
```

- *Type:* str

---

##### `elb`<sup>Required</sup> <a name="elb" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.elb"></a>

```python
elb: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lb_target_group_arn`<sup>Required</sup> <a name="lb_target_group_arn" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.lbTargetGroupArn"></a>

```python
lb_target_group_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingAttachmentConfig <a name="AutoscalingAttachmentConfig" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import autoscaling_attachment

autoscalingAttachment.AutoscalingAttachmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autoscaling_group_name: str,
  alb_target_group_arn: str = None,
  elb: str = None,
  id: str = None,
  lb_target_group_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.autoscalingGroupName">autoscaling_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment#autoscaling_group_name AutoscalingAttachment#autoscaling_group_name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.albTargetGroupArn">alb_target_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment#alb_target_group_arn AutoscalingAttachment#alb_target_group_arn}. |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.elb">elb</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment#elb AutoscalingAttachment#elb}. |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment#id AutoscalingAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.lbTargetGroupArn">lb_target_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment#lb_target_group_arn AutoscalingAttachment#lb_target_group_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autoscaling_group_name`<sup>Required</sup> <a name="autoscaling_group_name" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.autoscalingGroupName"></a>

```python
autoscaling_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment#autoscaling_group_name AutoscalingAttachment#autoscaling_group_name}.

---

##### `alb_target_group_arn`<sup>Optional</sup> <a name="alb_target_group_arn" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.albTargetGroupArn"></a>

```python
alb_target_group_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment#alb_target_group_arn AutoscalingAttachment#alb_target_group_arn}.

---

##### `elb`<sup>Optional</sup> <a name="elb" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.elb"></a>

```python
elb: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment#elb AutoscalingAttachment#elb}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment#id AutoscalingAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lb_target_group_arn`<sup>Optional</sup> <a name="lb_target_group_arn" id="@cdktf/provider-aws.autoscalingAttachment.AutoscalingAttachmentConfig.property.lbTargetGroupArn"></a>

```python
lb_target_group_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment#lb_target_group_arn AutoscalingAttachment#lb_target_group_arn}.

---



