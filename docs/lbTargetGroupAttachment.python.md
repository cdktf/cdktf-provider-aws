# `lbTargetGroupAttachment` Submodule <a name="`lbTargetGroupAttachment` Submodule" id="@cdktf/provider-aws.lbTargetGroupAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbTargetGroupAttachment <a name="LbTargetGroupAttachment" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment aws_lb_target_group_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lb_target_group_attachment

lbTargetGroupAttachment.LbTargetGroupAttachment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  target_group_arn: str,
  target_id: str,
  availability_zone: str = None,
  id: str = None,
  port: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.Initializer.parameter.targetGroupArn">target_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment#target_group_arn LbTargetGroupAttachment#target_group_arn}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.Initializer.parameter.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment#target_id LbTargetGroupAttachment#target_id}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment#availability_zone LbTargetGroupAttachment#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment#id LbTargetGroupAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment#port LbTargetGroupAttachment#port}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `target_group_arn`<sup>Required</sup> <a name="target_group_arn" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.Initializer.parameter.targetGroupArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment#target_group_arn LbTargetGroupAttachment#target_group_arn}.

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.Initializer.parameter.targetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment#target_id LbTargetGroupAttachment#target_id}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.Initializer.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment#availability_zone LbTargetGroupAttachment#availability_zone}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment#id LbTargetGroupAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment#port LbTargetGroupAttachment#port}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.resetPort">reset_port</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.resetPort"></a>

```python
def reset_port() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import lb_target_group_attachment

lbTargetGroupAttachment.LbTargetGroupAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import lb_target_group_attachment

lbTargetGroupAttachment.LbTargetGroupAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import lb_target_group_attachment

lbTargetGroupAttachment.LbTargetGroupAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.targetGroupArnInput">target_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.targetIdInput">target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.targetGroupArn">target_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_group_arn_input`<sup>Optional</sup> <a name="target_group_arn_input" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.targetGroupArnInput"></a>

```python
target_group_arn_input: str
```

- *Type:* str

---

##### `target_id_input`<sup>Optional</sup> <a name="target_id_input" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.targetIdInput"></a>

```python
target_id_input: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_group_arn`<sup>Required</sup> <a name="target_group_arn" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.targetGroupArn"></a>

```python
target_group_arn: str
```

- *Type:* str

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LbTargetGroupAttachmentConfig <a name="LbTargetGroupAttachmentConfig" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lb_target_group_attachment

lbTargetGroupAttachment.LbTargetGroupAttachmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  target_group_arn: str,
  target_id: str,
  availability_zone: str = None,
  id: str = None,
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachmentConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachmentConfig.property.targetGroupArn">target_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment#target_group_arn LbTargetGroupAttachment#target_group_arn}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachmentConfig.property.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment#target_id LbTargetGroupAttachment#target_id}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachmentConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment#availability_zone LbTargetGroupAttachment#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment#id LbTargetGroupAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachmentConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment#port LbTargetGroupAttachment#port}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachmentConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `target_group_arn`<sup>Required</sup> <a name="target_group_arn" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachmentConfig.property.targetGroupArn"></a>

```python
target_group_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment#target_group_arn LbTargetGroupAttachment#target_group_arn}.

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachmentConfig.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment#target_id LbTargetGroupAttachment#target_id}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachmentConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment#availability_zone LbTargetGroupAttachment#availability_zone}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment#id LbTargetGroupAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.lbTargetGroupAttachment.LbTargetGroupAttachmentConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment#port LbTargetGroupAttachment#port}.

---



