# `locationGeofenceCollection` Submodule <a name="`locationGeofenceCollection` Submodule" id="@cdktf/provider-aws.locationGeofenceCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LocationGeofenceCollection <a name="LocationGeofenceCollection" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection aws_location_geofence_collection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import location_geofence_collection

locationGeofenceCollection.LocationGeofenceCollection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  collection_name: str,
  description: str = None,
  id: str = None,
  kms_key_id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: LocationGeofenceCollectionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.Initializer.parameter.collectionName">collection_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#collection_name LocationGeofenceCollection#collection_name}. |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#description LocationGeofenceCollection#description}. |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#id LocationGeofenceCollection#id}. |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#kms_key_id LocationGeofenceCollection#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#tags LocationGeofenceCollection#tags}. |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#tags_all LocationGeofenceCollection#tags_all}. |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeouts">LocationGeofenceCollectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `collection_name`<sup>Required</sup> <a name="collection_name" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.Initializer.parameter.collectionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#collection_name LocationGeofenceCollection#collection_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#description LocationGeofenceCollection#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#id LocationGeofenceCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#kms_key_id LocationGeofenceCollection#kms_key_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#tags LocationGeofenceCollection#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#tags_all LocationGeofenceCollection#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeouts">LocationGeofenceCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#timeouts LocationGeofenceCollection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#create LocationGeofenceCollection#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#delete LocationGeofenceCollection#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#update LocationGeofenceCollection#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import location_geofence_collection

locationGeofenceCollection.LocationGeofenceCollection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import location_geofence_collection

locationGeofenceCollection.LocationGeofenceCollection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import location_geofence_collection

locationGeofenceCollection.LocationGeofenceCollection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.collectionArn">collection_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference">LocationGeofenceCollectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.collectionNameInput">collection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeouts">LocationGeofenceCollectionTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.collectionName">collection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `collection_arn`<sup>Required</sup> <a name="collection_arn" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.collectionArn"></a>

```python
collection_arn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.timeouts"></a>

```python
timeouts: LocationGeofenceCollectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference">LocationGeofenceCollectionTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `collection_name_input`<sup>Optional</sup> <a name="collection_name_input" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.collectionNameInput"></a>

```python
collection_name_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[LocationGeofenceCollectionTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeouts">LocationGeofenceCollectionTimeouts</a>, cdktf.IResolvable]

---

##### `collection_name`<sup>Required</sup> <a name="collection_name" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.collectionName"></a>

```python
collection_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LocationGeofenceCollectionConfig <a name="LocationGeofenceCollectionConfig" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import location_geofence_collection

locationGeofenceCollection.LocationGeofenceCollectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  collection_name: str,
  description: str = None,
  id: str = None,
  kms_key_id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: LocationGeofenceCollectionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionConfig.property.collectionName">collection_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#collection_name LocationGeofenceCollection#collection_name}. |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#description LocationGeofenceCollection#description}. |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#id LocationGeofenceCollection#id}. |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#kms_key_id LocationGeofenceCollection#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#tags LocationGeofenceCollection#tags}. |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#tags_all LocationGeofenceCollection#tags_all}. |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeouts">LocationGeofenceCollectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `collection_name`<sup>Required</sup> <a name="collection_name" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionConfig.property.collectionName"></a>

```python
collection_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#collection_name LocationGeofenceCollection#collection_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#description LocationGeofenceCollection#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#id LocationGeofenceCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#kms_key_id LocationGeofenceCollection#kms_key_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#tags LocationGeofenceCollection#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#tags_all LocationGeofenceCollection#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionConfig.property.timeouts"></a>

```python
timeouts: LocationGeofenceCollectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeouts">LocationGeofenceCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#timeouts LocationGeofenceCollection#timeouts}

---

### LocationGeofenceCollectionTimeouts <a name="LocationGeofenceCollectionTimeouts" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import location_geofence_collection

locationGeofenceCollection.LocationGeofenceCollectionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#create LocationGeofenceCollection#create}. |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#delete LocationGeofenceCollection#delete}. |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#update LocationGeofenceCollection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#create LocationGeofenceCollection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#delete LocationGeofenceCollection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_geofence_collection#update LocationGeofenceCollection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LocationGeofenceCollectionTimeoutsOutputReference <a name="LocationGeofenceCollectionTimeoutsOutputReference" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import location_geofence_collection

locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeouts">LocationGeofenceCollectionTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LocationGeofenceCollectionTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.locationGeofenceCollection.LocationGeofenceCollectionTimeouts">LocationGeofenceCollectionTimeouts</a>, cdktf.IResolvable]

---



