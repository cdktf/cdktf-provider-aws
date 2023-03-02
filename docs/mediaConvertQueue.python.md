# `mediaConvertQueue` Submodule <a name="`mediaConvertQueue` Submodule" id="@cdktf/provider-aws.mediaConvertQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaConvertQueue <a name="MediaConvertQueue" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue aws_media_convert_queue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import media_convert_queue

mediaConvertQueue.MediaConvertQueue(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  description: str = None,
  id: str = None,
  pricing_plan: str = None,
  reservation_plan_settings: MediaConvertQueueReservationPlanSettings = None,
  status: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#name MediaConvertQueue#name}. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#description MediaConvertQueue#description}. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#id MediaConvertQueue#id}. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.pricingPlan">pricing_plan</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#pricing_plan MediaConvertQueue#pricing_plan}. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.reservationPlanSettings">reservation_plan_settings</a></code> | <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a></code> | reservation_plan_settings block. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#status MediaConvertQueue#status}. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#tags MediaConvertQueue#tags}. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#tags_all MediaConvertQueue#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#name MediaConvertQueue#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#description MediaConvertQueue#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#id MediaConvertQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pricing_plan`<sup>Optional</sup> <a name="pricing_plan" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.pricingPlan"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#pricing_plan MediaConvertQueue#pricing_plan}.

---

##### `reservation_plan_settings`<sup>Optional</sup> <a name="reservation_plan_settings" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.reservationPlanSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a>

reservation_plan_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#reservation_plan_settings MediaConvertQueue#reservation_plan_settings}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#status MediaConvertQueue#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#tags MediaConvertQueue#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#tags_all MediaConvertQueue#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.putReservationPlanSettings">put_reservation_plan_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetPricingPlan">reset_pricing_plan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetReservationPlanSettings">reset_reservation_plan_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_reservation_plan_settings` <a name="put_reservation_plan_settings" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.putReservationPlanSettings"></a>

```python
def put_reservation_plan_settings(
  commitment: str,
  renewal_type: str,
  reserved_slots: typing.Union[int, float]
) -> None
```

###### `commitment`<sup>Required</sup> <a name="commitment" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.putReservationPlanSettings.parameter.commitment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#commitment MediaConvertQueue#commitment}.

---

###### `renewal_type`<sup>Required</sup> <a name="renewal_type" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.putReservationPlanSettings.parameter.renewalType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#renewal_type MediaConvertQueue#renewal_type}.

---

###### `reserved_slots`<sup>Required</sup> <a name="reserved_slots" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.putReservationPlanSettings.parameter.reservedSlots"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#reserved_slots MediaConvertQueue#reserved_slots}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_pricing_plan` <a name="reset_pricing_plan" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetPricingPlan"></a>

```python
def reset_pricing_plan() -> None
```

##### `reset_reservation_plan_settings` <a name="reset_reservation_plan_settings" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetReservationPlanSettings"></a>

```python
def reset_reservation_plan_settings() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import media_convert_queue

mediaConvertQueue.MediaConvertQueue.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import media_convert_queue

mediaConvertQueue.MediaConvertQueue.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import media_convert_queue

mediaConvertQueue.MediaConvertQueue.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.reservationPlanSettings">reservation_plan_settings</a></code> | <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference">MediaConvertQueueReservationPlanSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.pricingPlanInput">pricing_plan_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.reservationPlanSettingsInput">reservation_plan_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.pricingPlan">pricing_plan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `reservation_plan_settings`<sup>Required</sup> <a name="reservation_plan_settings" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.reservationPlanSettings"></a>

```python
reservation_plan_settings: MediaConvertQueueReservationPlanSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference">MediaConvertQueueReservationPlanSettingsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `pricing_plan_input`<sup>Optional</sup> <a name="pricing_plan_input" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.pricingPlanInput"></a>

```python
pricing_plan_input: str
```

- *Type:* str

---

##### `reservation_plan_settings_input`<sup>Optional</sup> <a name="reservation_plan_settings_input" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.reservationPlanSettingsInput"></a>

```python
reservation_plan_settings_input: MediaConvertQueueReservationPlanSettings
```

- *Type:* <a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a>

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `pricing_plan`<sup>Required</sup> <a name="pricing_plan" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.pricingPlan"></a>

```python
pricing_plan: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MediaConvertQueueConfig <a name="MediaConvertQueueConfig" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import media_convert_queue

mediaConvertQueue.MediaConvertQueueConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  description: str = None,
  id: str = None,
  pricing_plan: str = None,
  reservation_plan_settings: MediaConvertQueueReservationPlanSettings = None,
  status: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#name MediaConvertQueue#name}. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#description MediaConvertQueue#description}. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#id MediaConvertQueue#id}. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.pricingPlan">pricing_plan</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#pricing_plan MediaConvertQueue#pricing_plan}. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.reservationPlanSettings">reservation_plan_settings</a></code> | <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a></code> | reservation_plan_settings block. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#status MediaConvertQueue#status}. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#tags MediaConvertQueue#tags}. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#tags_all MediaConvertQueue#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#name MediaConvertQueue#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#description MediaConvertQueue#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#id MediaConvertQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pricing_plan`<sup>Optional</sup> <a name="pricing_plan" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.pricingPlan"></a>

```python
pricing_plan: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#pricing_plan MediaConvertQueue#pricing_plan}.

---

##### `reservation_plan_settings`<sup>Optional</sup> <a name="reservation_plan_settings" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.reservationPlanSettings"></a>

```python
reservation_plan_settings: MediaConvertQueueReservationPlanSettings
```

- *Type:* <a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a>

reservation_plan_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#reservation_plan_settings MediaConvertQueue#reservation_plan_settings}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#status MediaConvertQueue#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#tags MediaConvertQueue#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#tags_all MediaConvertQueue#tags_all}.

---

### MediaConvertQueueReservationPlanSettings <a name="MediaConvertQueueReservationPlanSettings" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import media_convert_queue

mediaConvertQueue.MediaConvertQueueReservationPlanSettings(
  commitment: str,
  renewal_type: str,
  reserved_slots: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.property.commitment">commitment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#commitment MediaConvertQueue#commitment}. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.property.renewalType">renewal_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#renewal_type MediaConvertQueue#renewal_type}. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.property.reservedSlots">reserved_slots</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#reserved_slots MediaConvertQueue#reserved_slots}. |

---

##### `commitment`<sup>Required</sup> <a name="commitment" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.property.commitment"></a>

```python
commitment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#commitment MediaConvertQueue#commitment}.

---

##### `renewal_type`<sup>Required</sup> <a name="renewal_type" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.property.renewalType"></a>

```python
renewal_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#renewal_type MediaConvertQueue#renewal_type}.

---

##### `reserved_slots`<sup>Required</sup> <a name="reserved_slots" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.property.reservedSlots"></a>

```python
reserved_slots: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue#reserved_slots MediaConvertQueue#reserved_slots}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaConvertQueueReservationPlanSettingsOutputReference <a name="MediaConvertQueueReservationPlanSettingsOutputReference" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import media_convert_queue

mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.commitmentInput">commitment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.renewalTypeInput">renewal_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.reservedSlotsInput">reserved_slots_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.commitment">commitment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.renewalType">renewal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.reservedSlots">reserved_slots</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `commitment_input`<sup>Optional</sup> <a name="commitment_input" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.commitmentInput"></a>

```python
commitment_input: str
```

- *Type:* str

---

##### `renewal_type_input`<sup>Optional</sup> <a name="renewal_type_input" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.renewalTypeInput"></a>

```python
renewal_type_input: str
```

- *Type:* str

---

##### `reserved_slots_input`<sup>Optional</sup> <a name="reserved_slots_input" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.reservedSlotsInput"></a>

```python
reserved_slots_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `commitment`<sup>Required</sup> <a name="commitment" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.commitment"></a>

```python
commitment: str
```

- *Type:* str

---

##### `renewal_type`<sup>Required</sup> <a name="renewal_type" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.renewalType"></a>

```python
renewal_type: str
```

- *Type:* str

---

##### `reserved_slots`<sup>Required</sup> <a name="reserved_slots" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.reservedSlots"></a>

```python
reserved_slots: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.internalValue"></a>

```python
internal_value: MediaConvertQueueReservationPlanSettings
```

- *Type:* <a href="#@cdktf/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a>

---



