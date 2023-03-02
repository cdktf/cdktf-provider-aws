# `directoryServiceSharedDirectory` Submodule <a name="`directoryServiceSharedDirectory` Submodule" id="@cdktf/provider-aws.directoryServiceSharedDirectory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryServiceSharedDirectory <a name="DirectoryServiceSharedDirectory" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory aws_directory_service_shared_directory}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_shared_directory

directoryServiceSharedDirectory.DirectoryServiceSharedDirectory(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  directory_id: str,
  target: DirectoryServiceSharedDirectoryTarget,
  id: str = None,
  method: str = None,
  notes: str = None,
  timeouts: DirectoryServiceSharedDirectoryTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#directory_id DirectoryServiceSharedDirectory#directory_id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.target">target</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget">DirectoryServiceSharedDirectoryTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#id DirectoryServiceSharedDirectory#id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.method">method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#method DirectoryServiceSharedDirectory#method}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.notes">notes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#notes DirectoryServiceSharedDirectory#notes}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeouts">DirectoryServiceSharedDirectoryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.directoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#directory_id DirectoryServiceSharedDirectory#directory_id}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.target"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget">DirectoryServiceSharedDirectoryTarget</a>

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#target DirectoryServiceSharedDirectory#target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#id DirectoryServiceSharedDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.method"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#method DirectoryServiceSharedDirectory#method}.

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.notes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#notes DirectoryServiceSharedDirectory#notes}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeouts">DirectoryServiceSharedDirectoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#timeouts DirectoryServiceSharedDirectory#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.putTarget">put_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.resetMethod">reset_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.resetNotes">reset_notes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_target` <a name="put_target" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.putTarget"></a>

```python
def put_target(
  id: str,
  type: str = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.putTarget.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#id DirectoryServiceSharedDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.putTarget.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#type DirectoryServiceSharedDirectory#type}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.putTimeouts"></a>

```python
def put_timeouts(
  delete: str = None
) -> None
```

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#delete DirectoryServiceSharedDirectory#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_method` <a name="reset_method" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.resetMethod"></a>

```python
def reset_method() -> None
```

##### `reset_notes` <a name="reset_notes" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.resetNotes"></a>

```python
def reset_notes() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_shared_directory

directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_shared_directory

directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_shared_directory

directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.sharedDirectoryId">shared_directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference">DirectoryServiceSharedDirectoryTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference">DirectoryServiceSharedDirectoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.directoryIdInput">directory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.methodInput">method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.notesInput">notes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.targetInput">target_input</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget">DirectoryServiceSharedDirectoryTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeouts">DirectoryServiceSharedDirectoryTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.directoryId">directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.notes">notes</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `shared_directory_id`<sup>Required</sup> <a name="shared_directory_id" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.sharedDirectoryId"></a>

```python
shared_directory_id: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.target"></a>

```python
target: DirectoryServiceSharedDirectoryTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference">DirectoryServiceSharedDirectoryTargetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.timeouts"></a>

```python
timeouts: DirectoryServiceSharedDirectoryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference">DirectoryServiceSharedDirectoryTimeoutsOutputReference</a>

---

##### `directory_id_input`<sup>Optional</sup> <a name="directory_id_input" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.directoryIdInput"></a>

```python
directory_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.methodInput"></a>

```python
method_input: str
```

- *Type:* str

---

##### `notes_input`<sup>Optional</sup> <a name="notes_input" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.notesInput"></a>

```python
notes_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.targetInput"></a>

```python
target_input: DirectoryServiceSharedDirectoryTarget
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget">DirectoryServiceSharedDirectoryTarget</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DirectoryServiceSharedDirectoryTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeouts">DirectoryServiceSharedDirectoryTimeouts</a>, cdktf.IResolvable]

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.notes"></a>

```python
notes: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryServiceSharedDirectoryConfig <a name="DirectoryServiceSharedDirectoryConfig" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_shared_directory

directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  directory_id: str,
  target: DirectoryServiceSharedDirectoryTarget,
  id: str = None,
  method: str = None,
  notes: str = None,
  timeouts: DirectoryServiceSharedDirectoryTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#directory_id DirectoryServiceSharedDirectory#directory_id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget">DirectoryServiceSharedDirectoryTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#id DirectoryServiceSharedDirectory#id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.method">method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#method DirectoryServiceSharedDirectory#method}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.notes">notes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#notes DirectoryServiceSharedDirectory#notes}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeouts">DirectoryServiceSharedDirectoryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#directory_id DirectoryServiceSharedDirectory#directory_id}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.target"></a>

```python
target: DirectoryServiceSharedDirectoryTarget
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget">DirectoryServiceSharedDirectoryTarget</a>

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#target DirectoryServiceSharedDirectory#target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#id DirectoryServiceSharedDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.method"></a>

```python
method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#method DirectoryServiceSharedDirectory#method}.

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.notes"></a>

```python
notes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#notes DirectoryServiceSharedDirectory#notes}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.timeouts"></a>

```python
timeouts: DirectoryServiceSharedDirectoryTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeouts">DirectoryServiceSharedDirectoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#timeouts DirectoryServiceSharedDirectory#timeouts}

---

### DirectoryServiceSharedDirectoryTarget <a name="DirectoryServiceSharedDirectoryTarget" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_shared_directory

directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget(
  id: str,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#id DirectoryServiceSharedDirectory#id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#type DirectoryServiceSharedDirectory#type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#id DirectoryServiceSharedDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#type DirectoryServiceSharedDirectory#type}.

---

### DirectoryServiceSharedDirectoryTimeouts <a name="DirectoryServiceSharedDirectoryTimeouts" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_shared_directory

directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeouts(
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#delete DirectoryServiceSharedDirectory#delete}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#delete DirectoryServiceSharedDirectory#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryServiceSharedDirectoryTargetOutputReference <a name="DirectoryServiceSharedDirectoryTargetOutputReference" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_shared_directory

directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget">DirectoryServiceSharedDirectoryTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.internalValue"></a>

```python
internal_value: DirectoryServiceSharedDirectoryTarget
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget">DirectoryServiceSharedDirectoryTarget</a>

---


### DirectoryServiceSharedDirectoryTimeoutsOutputReference <a name="DirectoryServiceSharedDirectoryTimeoutsOutputReference" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_shared_directory

directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeouts">DirectoryServiceSharedDirectoryTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DirectoryServiceSharedDirectoryTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeouts">DirectoryServiceSharedDirectoryTimeouts</a>, cdktf.IResolvable]

---



