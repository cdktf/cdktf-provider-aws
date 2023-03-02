# `evidentlyFeature` Submodule <a name="`evidentlyFeature` Submodule" id="@cdktf/provider-aws.evidentlyFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EvidentlyFeature <a name="EvidentlyFeature" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature aws_evidently_feature}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_feature

evidentlyFeature.EvidentlyFeature(
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
  project: str,
  variations: typing.Union[IResolvable, typing.List[EvidentlyFeatureVariations]],
  default_variation: str = None,
  description: str = None,
  entity_overrides: typing.Mapping[str] = None,
  evaluation_strategy: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: EvidentlyFeatureTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#name EvidentlyFeature#name}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#project EvidentlyFeature#project}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.variations">variations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>]]</code> | variations block. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.defaultVariation">default_variation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#default_variation EvidentlyFeature#default_variation}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#description EvidentlyFeature#description}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.entityOverrides">entity_overrides</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#entity_overrides EvidentlyFeature#entity_overrides}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.evaluationStrategy">evaluation_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#evaluation_strategy EvidentlyFeature#evaluation_strategy}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#id EvidentlyFeature#id}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#tags EvidentlyFeature#tags}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#tags_all EvidentlyFeature#tags_all}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts">EvidentlyFeatureTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#name EvidentlyFeature#name}.

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#project EvidentlyFeature#project}.

---

##### `variations`<sup>Required</sup> <a name="variations" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.variations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>]]

variations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#variations EvidentlyFeature#variations}

---

##### `default_variation`<sup>Optional</sup> <a name="default_variation" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.defaultVariation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#default_variation EvidentlyFeature#default_variation}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#description EvidentlyFeature#description}.

---

##### `entity_overrides`<sup>Optional</sup> <a name="entity_overrides" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.entityOverrides"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#entity_overrides EvidentlyFeature#entity_overrides}.

---

##### `evaluation_strategy`<sup>Optional</sup> <a name="evaluation_strategy" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.evaluationStrategy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#evaluation_strategy EvidentlyFeature#evaluation_strategy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#id EvidentlyFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#tags EvidentlyFeature#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#tags_all EvidentlyFeature#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts">EvidentlyFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#timeouts EvidentlyFeature#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.putVariations">put_variations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetDefaultVariation">reset_default_variation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetEntityOverrides">reset_entity_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetEvaluationStrategy">reset_evaluation_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#create EvidentlyFeature#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#delete EvidentlyFeature#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#update EvidentlyFeature#update}.

---

##### `put_variations` <a name="put_variations" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.putVariations"></a>

```python
def put_variations(
  value: typing.Union[IResolvable, typing.List[EvidentlyFeatureVariations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.putVariations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>]]

---

##### `reset_default_variation` <a name="reset_default_variation" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetDefaultVariation"></a>

```python
def reset_default_variation() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_entity_overrides` <a name="reset_entity_overrides" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetEntityOverrides"></a>

```python
def reset_entity_overrides() -> None
```

##### `reset_evaluation_strategy` <a name="reset_evaluation_strategy" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetEvaluationStrategy"></a>

```python
def reset_evaluation_strategy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import evidently_feature

evidentlyFeature.EvidentlyFeature.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import evidently_feature

evidentlyFeature.EvidentlyFeature.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import evidently_feature

evidentlyFeature.EvidentlyFeature.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.evaluationRules">evaluation_rules</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList">EvidentlyFeatureEvaluationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference">EvidentlyFeatureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.variations">variations</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList">EvidentlyFeatureVariationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.defaultVariationInput">default_variation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.entityOverridesInput">entity_overrides_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.evaluationStrategyInput">evaluation_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts">EvidentlyFeatureTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.variationsInput">variations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.defaultVariation">default_variation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.entityOverrides">entity_overrides</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.evaluationStrategy">evaluation_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `evaluation_rules`<sup>Required</sup> <a name="evaluation_rules" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.evaluationRules"></a>

```python
evaluation_rules: EvidentlyFeatureEvaluationRulesList
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList">EvidentlyFeatureEvaluationRulesList</a>

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.timeouts"></a>

```python
timeouts: EvidentlyFeatureTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference">EvidentlyFeatureTimeoutsOutputReference</a>

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

##### `variations`<sup>Required</sup> <a name="variations" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.variations"></a>

```python
variations: EvidentlyFeatureVariationsList
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList">EvidentlyFeatureVariationsList</a>

---

##### `default_variation_input`<sup>Optional</sup> <a name="default_variation_input" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.defaultVariationInput"></a>

```python
default_variation_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `entity_overrides_input`<sup>Optional</sup> <a name="entity_overrides_input" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.entityOverridesInput"></a>

```python
entity_overrides_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `evaluation_strategy_input`<sup>Optional</sup> <a name="evaluation_strategy_input" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.evaluationStrategyInput"></a>

```python
evaluation_strategy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[EvidentlyFeatureTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts">EvidentlyFeatureTimeouts</a>, cdktf.IResolvable]

---

##### `variations_input`<sup>Optional</sup> <a name="variations_input" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.variationsInput"></a>

```python
variations_input: typing.Union[IResolvable, typing.List[EvidentlyFeatureVariations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>]]

---

##### `default_variation`<sup>Required</sup> <a name="default_variation" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.defaultVariation"></a>

```python
default_variation: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `entity_overrides`<sup>Required</sup> <a name="entity_overrides" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.entityOverrides"></a>

```python
entity_overrides: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `evaluation_strategy`<sup>Required</sup> <a name="evaluation_strategy" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.evaluationStrategy"></a>

```python
evaluation_strategy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EvidentlyFeatureConfig <a name="EvidentlyFeatureConfig" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_feature

evidentlyFeature.EvidentlyFeatureConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  project: str,
  variations: typing.Union[IResolvable, typing.List[EvidentlyFeatureVariations]],
  default_variation: str = None,
  description: str = None,
  entity_overrides: typing.Mapping[str] = None,
  evaluation_strategy: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: EvidentlyFeatureTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#name EvidentlyFeature#name}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#project EvidentlyFeature#project}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.variations">variations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>]]</code> | variations block. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.defaultVariation">default_variation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#default_variation EvidentlyFeature#default_variation}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#description EvidentlyFeature#description}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.entityOverrides">entity_overrides</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#entity_overrides EvidentlyFeature#entity_overrides}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.evaluationStrategy">evaluation_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#evaluation_strategy EvidentlyFeature#evaluation_strategy}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#id EvidentlyFeature#id}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#tags EvidentlyFeature#tags}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#tags_all EvidentlyFeature#tags_all}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts">EvidentlyFeatureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#name EvidentlyFeature#name}.

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#project EvidentlyFeature#project}.

---

##### `variations`<sup>Required</sup> <a name="variations" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.variations"></a>

```python
variations: typing.Union[IResolvable, typing.List[EvidentlyFeatureVariations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>]]

variations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#variations EvidentlyFeature#variations}

---

##### `default_variation`<sup>Optional</sup> <a name="default_variation" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.defaultVariation"></a>

```python
default_variation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#default_variation EvidentlyFeature#default_variation}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#description EvidentlyFeature#description}.

---

##### `entity_overrides`<sup>Optional</sup> <a name="entity_overrides" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.entityOverrides"></a>

```python
entity_overrides: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#entity_overrides EvidentlyFeature#entity_overrides}.

---

##### `evaluation_strategy`<sup>Optional</sup> <a name="evaluation_strategy" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.evaluationStrategy"></a>

```python
evaluation_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#evaluation_strategy EvidentlyFeature#evaluation_strategy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#id EvidentlyFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#tags EvidentlyFeature#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#tags_all EvidentlyFeature#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.timeouts"></a>

```python
timeouts: EvidentlyFeatureTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts">EvidentlyFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#timeouts EvidentlyFeature#timeouts}

---

### EvidentlyFeatureEvaluationRules <a name="EvidentlyFeatureEvaluationRules" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRules.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_feature

evidentlyFeature.EvidentlyFeatureEvaluationRules()
```


### EvidentlyFeatureTimeouts <a name="EvidentlyFeatureTimeouts" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_feature

evidentlyFeature.EvidentlyFeatureTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#create EvidentlyFeature#create}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#delete EvidentlyFeature#delete}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#update EvidentlyFeature#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#create EvidentlyFeature#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#delete EvidentlyFeature#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#update EvidentlyFeature#update}.

---

### EvidentlyFeatureVariations <a name="EvidentlyFeatureVariations" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_feature

evidentlyFeature.EvidentlyFeatureVariations(
  name: str,
  value: EvidentlyFeatureVariationsValue
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#name EvidentlyFeature#name}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations.property.value">value</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue">EvidentlyFeatureVariationsValue</a></code> | value block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#name EvidentlyFeature#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations.property.value"></a>

```python
value: EvidentlyFeatureVariationsValue
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue">EvidentlyFeatureVariationsValue</a>

value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#value EvidentlyFeature#value}

---

### EvidentlyFeatureVariationsValue <a name="EvidentlyFeatureVariationsValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_feature

evidentlyFeature.EvidentlyFeatureVariationsValue(
  bool_value: str = None,
  double_value: str = None,
  long_value: str = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue.property.boolValue">bool_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#bool_value EvidentlyFeature#bool_value}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue.property.doubleValue">double_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#double_value EvidentlyFeature#double_value}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue.property.longValue">long_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#long_value EvidentlyFeature#long_value}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue.property.stringValue">string_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#string_value EvidentlyFeature#string_value}. |

---

##### `bool_value`<sup>Optional</sup> <a name="bool_value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue.property.boolValue"></a>

```python
bool_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#bool_value EvidentlyFeature#bool_value}.

---

##### `double_value`<sup>Optional</sup> <a name="double_value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue.property.doubleValue"></a>

```python
double_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#double_value EvidentlyFeature#double_value}.

---

##### `long_value`<sup>Optional</sup> <a name="long_value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue.property.longValue"></a>

```python
long_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#long_value EvidentlyFeature#long_value}.

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#string_value EvidentlyFeature#string_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### EvidentlyFeatureEvaluationRulesList <a name="EvidentlyFeatureEvaluationRulesList" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_feature

evidentlyFeature.EvidentlyFeatureEvaluationRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EvidentlyFeatureEvaluationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### EvidentlyFeatureEvaluationRulesOutputReference <a name="EvidentlyFeatureEvaluationRulesOutputReference" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_feature

evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRules">EvidentlyFeatureEvaluationRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.property.internalValue"></a>

```python
internal_value: EvidentlyFeatureEvaluationRules
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRules">EvidentlyFeatureEvaluationRules</a>

---


### EvidentlyFeatureTimeoutsOutputReference <a name="EvidentlyFeatureTimeoutsOutputReference" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_feature

evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts">EvidentlyFeatureTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EvidentlyFeatureTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts">EvidentlyFeatureTimeouts</a>, cdktf.IResolvable]

---


### EvidentlyFeatureVariationsList <a name="EvidentlyFeatureVariationsList" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_feature

evidentlyFeature.EvidentlyFeatureVariationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EvidentlyFeatureVariationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EvidentlyFeatureVariations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>]]

---


### EvidentlyFeatureVariationsOutputReference <a name="EvidentlyFeatureVariationsOutputReference" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_feature

evidentlyFeature.EvidentlyFeatureVariationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.putValue">put_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value` <a name="put_value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.putValue"></a>

```python
def put_value(
  bool_value: str = None,
  double_value: str = None,
  long_value: str = None,
  string_value: str = None
) -> None
```

###### `bool_value`<sup>Optional</sup> <a name="bool_value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.putValue.parameter.boolValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#bool_value EvidentlyFeature#bool_value}.

---

###### `double_value`<sup>Optional</sup> <a name="double_value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.putValue.parameter.doubleValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#double_value EvidentlyFeature#double_value}.

---

###### `long_value`<sup>Optional</sup> <a name="long_value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.putValue.parameter.longValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#long_value EvidentlyFeature#long_value}.

---

###### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.putValue.parameter.stringValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#string_value EvidentlyFeature#string_value}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference">EvidentlyFeatureVariationsValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.valueInput">value_input</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue">EvidentlyFeatureVariationsValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.value"></a>

```python
value: EvidentlyFeatureVariationsValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference">EvidentlyFeatureVariationsValueOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.valueInput"></a>

```python
value_input: EvidentlyFeatureVariationsValue
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue">EvidentlyFeatureVariationsValue</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EvidentlyFeatureVariations, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>, cdktf.IResolvable]

---


### EvidentlyFeatureVariationsValueOutputReference <a name="EvidentlyFeatureVariationsValueOutputReference" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import evidently_feature

evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.resetBoolValue">reset_bool_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.resetDoubleValue">reset_double_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.resetLongValue">reset_long_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bool_value` <a name="reset_bool_value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.resetBoolValue"></a>

```python
def reset_bool_value() -> None
```

##### `reset_double_value` <a name="reset_double_value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.resetDoubleValue"></a>

```python
def reset_double_value() -> None
```

##### `reset_long_value` <a name="reset_long_value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.resetLongValue"></a>

```python
def reset_long_value() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.boolValueInput">bool_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.doubleValueInput">double_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.longValueInput">long_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.boolValue">bool_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.doubleValue">double_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.longValue">long_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue">EvidentlyFeatureVariationsValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bool_value_input`<sup>Optional</sup> <a name="bool_value_input" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.boolValueInput"></a>

```python
bool_value_input: str
```

- *Type:* str

---

##### `double_value_input`<sup>Optional</sup> <a name="double_value_input" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.doubleValueInput"></a>

```python
double_value_input: str
```

- *Type:* str

---

##### `long_value_input`<sup>Optional</sup> <a name="long_value_input" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.longValueInput"></a>

```python
long_value_input: str
```

- *Type:* str

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `bool_value`<sup>Required</sup> <a name="bool_value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.boolValue"></a>

```python
bool_value: str
```

- *Type:* str

---

##### `double_value`<sup>Required</sup> <a name="double_value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.doubleValue"></a>

```python
double_value: str
```

- *Type:* str

---

##### `long_value`<sup>Required</sup> <a name="long_value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.longValue"></a>

```python
long_value: str
```

- *Type:* str

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.internalValue"></a>

```python
internal_value: EvidentlyFeatureVariationsValue
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue">EvidentlyFeatureVariationsValue</a>

---



