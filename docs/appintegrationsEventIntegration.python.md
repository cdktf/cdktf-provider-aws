# `appintegrationsEventIntegration` Submodule <a name="`appintegrationsEventIntegration` Submodule" id="@cdktf/provider-aws.appintegrationsEventIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppintegrationsEventIntegration <a name="AppintegrationsEventIntegration" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration aws_appintegrations_event_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appintegrations_event_integration

appintegrationsEventIntegration.AppintegrationsEventIntegration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  eventbridge_bus: str,
  event_filter: AppintegrationsEventIntegrationEventFilter,
  name: str,
  description: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.eventbridgeBus">eventbridge_bus</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#eventbridge_bus AppintegrationsEventIntegration#eventbridge_bus}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.eventFilter">event_filter</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a></code> | event_filter block. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#name AppintegrationsEventIntegration#name}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#description AppintegrationsEventIntegration#description}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#id AppintegrationsEventIntegration#id}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#tags AppintegrationsEventIntegration#tags}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#tags_all AppintegrationsEventIntegration#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `eventbridge_bus`<sup>Required</sup> <a name="eventbridge_bus" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.eventbridgeBus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#eventbridge_bus AppintegrationsEventIntegration#eventbridge_bus}.

---

##### `event_filter`<sup>Required</sup> <a name="event_filter" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.eventFilter"></a>

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a>

event_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#event_filter AppintegrationsEventIntegration#event_filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#name AppintegrationsEventIntegration#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#description AppintegrationsEventIntegration#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#id AppintegrationsEventIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#tags AppintegrationsEventIntegration#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#tags_all AppintegrationsEventIntegration#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.putEventFilter">put_event_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_event_filter` <a name="put_event_filter" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.putEventFilter"></a>

```python
def put_event_filter(
  source: str
) -> None
```

###### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.putEventFilter.parameter.source"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#source AppintegrationsEventIntegration#source}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import appintegrations_event_integration

appintegrationsEventIntegration.AppintegrationsEventIntegration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import appintegrations_event_integration

appintegrationsEventIntegration.AppintegrationsEventIntegration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import appintegrations_event_integration

appintegrationsEventIntegration.AppintegrationsEventIntegration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventFilter">event_filter</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference">AppintegrationsEventIntegrationEventFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventbridgeBusInput">eventbridge_bus_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventFilterInput">event_filter_input</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventbridgeBus">eventbridge_bus</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `event_filter`<sup>Required</sup> <a name="event_filter" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventFilter"></a>

```python
event_filter: AppintegrationsEventIntegrationEventFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference">AppintegrationsEventIntegrationEventFilterOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `eventbridge_bus_input`<sup>Optional</sup> <a name="eventbridge_bus_input" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventbridgeBusInput"></a>

```python
eventbridge_bus_input: str
```

- *Type:* str

---

##### `event_filter_input`<sup>Optional</sup> <a name="event_filter_input" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventFilterInput"></a>

```python
event_filter_input: AppintegrationsEventIntegrationEventFilter
```

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `eventbridge_bus`<sup>Required</sup> <a name="eventbridge_bus" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.eventbridgeBus"></a>

```python
eventbridge_bus: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppintegrationsEventIntegrationConfig <a name="AppintegrationsEventIntegrationConfig" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appintegrations_event_integration

appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  eventbridge_bus: str,
  event_filter: AppintegrationsEventIntegrationEventFilter,
  name: str,
  description: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.eventbridgeBus">eventbridge_bus</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#eventbridge_bus AppintegrationsEventIntegration#eventbridge_bus}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.eventFilter">event_filter</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a></code> | event_filter block. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#name AppintegrationsEventIntegration#name}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#description AppintegrationsEventIntegration#description}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#id AppintegrationsEventIntegration#id}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#tags AppintegrationsEventIntegration#tags}. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#tags_all AppintegrationsEventIntegration#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `eventbridge_bus`<sup>Required</sup> <a name="eventbridge_bus" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.eventbridgeBus"></a>

```python
eventbridge_bus: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#eventbridge_bus AppintegrationsEventIntegration#eventbridge_bus}.

---

##### `event_filter`<sup>Required</sup> <a name="event_filter" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.eventFilter"></a>

```python
event_filter: AppintegrationsEventIntegrationEventFilter
```

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a>

event_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#event_filter AppintegrationsEventIntegration#event_filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#name AppintegrationsEventIntegration#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#description AppintegrationsEventIntegration#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#id AppintegrationsEventIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#tags AppintegrationsEventIntegration#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#tags_all AppintegrationsEventIntegration#tags_all}.

---

### AppintegrationsEventIntegrationEventFilter <a name="AppintegrationsEventIntegrationEventFilter" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appintegrations_event_integration

appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter(
  source: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#source AppintegrationsEventIntegration#source}. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appintegrations_event_integration#source AppintegrationsEventIntegration#source}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppintegrationsEventIntegrationEventFilterOutputReference <a name="AppintegrationsEventIntegrationEventFilterOutputReference" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appintegrations_event_integration

appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilterOutputReference.property.internalValue"></a>

```python
internal_value: AppintegrationsEventIntegrationEventFilter
```

- *Type:* <a href="#@cdktf/provider-aws.appintegrationsEventIntegration.AppintegrationsEventIntegrationEventFilter">AppintegrationsEventIntegrationEventFilter</a>

---



