# `kinesisanalyticsv2ApplicationSnapshot` Submodule <a name="`kinesisanalyticsv2ApplicationSnapshot` Submodule" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Kinesisanalyticsv2ApplicationSnapshot <a name="Kinesisanalyticsv2ApplicationSnapshot" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot aws_kinesisanalyticsv2_application_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesisanalyticsv2_application_snapshot

kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_name: str,
  snapshot_name: str,
  id: str = None,
  timeouts: Kinesisanalyticsv2ApplicationSnapshotTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.applicationName">application_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#application_name Kinesisanalyticsv2ApplicationSnapshot#application_name}. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.snapshotName">snapshot_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#snapshot_name Kinesisanalyticsv2ApplicationSnapshot#snapshot_name}. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#id Kinesisanalyticsv2ApplicationSnapshot#id}. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts">Kinesisanalyticsv2ApplicationSnapshotTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_name`<sup>Required</sup> <a name="application_name" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.applicationName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#application_name Kinesisanalyticsv2ApplicationSnapshot#application_name}.

---

##### `snapshot_name`<sup>Required</sup> <a name="snapshot_name" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.snapshotName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#snapshot_name Kinesisanalyticsv2ApplicationSnapshot#snapshot_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#id Kinesisanalyticsv2ApplicationSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts">Kinesisanalyticsv2ApplicationSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#timeouts Kinesisanalyticsv2ApplicationSnapshot#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#create Kinesisanalyticsv2ApplicationSnapshot#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#delete Kinesisanalyticsv2ApplicationSnapshot#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import kinesisanalyticsv2_application_snapshot

kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import kinesisanalyticsv2_application_snapshot

kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import kinesisanalyticsv2_application_snapshot

kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.applicationVersionId">application_version_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.snapshotCreationTimestamp">snapshot_creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference">Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.applicationNameInput">application_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.snapshotNameInput">snapshot_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts">Kinesisanalyticsv2ApplicationSnapshotTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.applicationName">application_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.snapshotName">snapshot_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_version_id`<sup>Required</sup> <a name="application_version_id" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.applicationVersionId"></a>

```python
application_version_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_creation_timestamp`<sup>Required</sup> <a name="snapshot_creation_timestamp" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.snapshotCreationTimestamp"></a>

```python
snapshot_creation_timestamp: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.timeouts"></a>

```python
timeouts: Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference">Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference</a>

---

##### `application_name_input`<sup>Optional</sup> <a name="application_name_input" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.applicationNameInput"></a>

```python
application_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `snapshot_name_input`<sup>Optional</sup> <a name="snapshot_name_input" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.snapshotNameInput"></a>

```python
snapshot_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[Kinesisanalyticsv2ApplicationSnapshotTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts">Kinesisanalyticsv2ApplicationSnapshotTimeouts</a>, cdktf.IResolvable]

---

##### `application_name`<sup>Required</sup> <a name="application_name" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.applicationName"></a>

```python
application_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `snapshot_name`<sup>Required</sup> <a name="snapshot_name" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.snapshotName"></a>

```python
snapshot_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Kinesisanalyticsv2ApplicationSnapshotConfig <a name="Kinesisanalyticsv2ApplicationSnapshotConfig" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesisanalyticsv2_application_snapshot

kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_name: str,
  snapshot_name: str,
  id: str = None,
  timeouts: Kinesisanalyticsv2ApplicationSnapshotTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.applicationName">application_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#application_name Kinesisanalyticsv2ApplicationSnapshot#application_name}. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.snapshotName">snapshot_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#snapshot_name Kinesisanalyticsv2ApplicationSnapshot#snapshot_name}. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#id Kinesisanalyticsv2ApplicationSnapshot#id}. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts">Kinesisanalyticsv2ApplicationSnapshotTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_name`<sup>Required</sup> <a name="application_name" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.applicationName"></a>

```python
application_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#application_name Kinesisanalyticsv2ApplicationSnapshot#application_name}.

---

##### `snapshot_name`<sup>Required</sup> <a name="snapshot_name" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.snapshotName"></a>

```python
snapshot_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#snapshot_name Kinesisanalyticsv2ApplicationSnapshot#snapshot_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#id Kinesisanalyticsv2ApplicationSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.timeouts"></a>

```python
timeouts: Kinesisanalyticsv2ApplicationSnapshotTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts">Kinesisanalyticsv2ApplicationSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#timeouts Kinesisanalyticsv2ApplicationSnapshot#timeouts}

---

### Kinesisanalyticsv2ApplicationSnapshotTimeouts <a name="Kinesisanalyticsv2ApplicationSnapshotTimeouts" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesisanalyticsv2_application_snapshot

kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#create Kinesisanalyticsv2ApplicationSnapshot#create}. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#delete Kinesisanalyticsv2ApplicationSnapshot#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#create Kinesisanalyticsv2ApplicationSnapshot#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#delete Kinesisanalyticsv2ApplicationSnapshot#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference <a name="Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kinesisanalyticsv2_application_snapshot

kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts">Kinesisanalyticsv2ApplicationSnapshotTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[Kinesisanalyticsv2ApplicationSnapshotTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts">Kinesisanalyticsv2ApplicationSnapshotTimeouts</a>, cdktf.IResolvable]

---



