# `redshiftserverlessSnapshot` Submodule <a name="`redshiftserverlessSnapshot` Submodule" id="@cdktf/provider-aws.redshiftserverlessSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftserverlessSnapshot <a name="RedshiftserverlessSnapshot" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_snapshot aws_redshiftserverless_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_snapshot

redshiftserverlessSnapshot.RedshiftserverlessSnapshot(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  namespace_name: str,
  snapshot_name: str,
  id: str = None,
  retention_period: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.Initializer.parameter.namespaceName">namespace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_snapshot#namespace_name RedshiftserverlessSnapshot#namespace_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.Initializer.parameter.snapshotName">snapshot_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_snapshot#snapshot_name RedshiftserverlessSnapshot#snapshot_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_snapshot#id RedshiftserverlessSnapshot#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.Initializer.parameter.retentionPeriod">retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_snapshot#retention_period RedshiftserverlessSnapshot#retention_period}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.Initializer.parameter.namespaceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_snapshot#namespace_name RedshiftserverlessSnapshot#namespace_name}.

---

##### `snapshot_name`<sup>Required</sup> <a name="snapshot_name" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.Initializer.parameter.snapshotName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_snapshot#snapshot_name RedshiftserverlessSnapshot#snapshot_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_snapshot#id RedshiftserverlessSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retention_period`<sup>Optional</sup> <a name="retention_period" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.Initializer.parameter.retentionPeriod"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_snapshot#retention_period RedshiftserverlessSnapshot#retention_period}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.resetRetentionPeriod">reset_retention_period</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_retention_period` <a name="reset_retention_period" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.resetRetentionPeriod"></a>

```python
def reset_retention_period() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_snapshot

redshiftserverlessSnapshot.RedshiftserverlessSnapshot.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_snapshot

redshiftserverlessSnapshot.RedshiftserverlessSnapshot.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_snapshot

redshiftserverlessSnapshot.RedshiftserverlessSnapshot.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.accountsWithProvisionedRestoreAccess">accounts_with_provisioned_restore_access</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.accountsWithRestoreAccess">accounts_with_restore_access</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.adminUsername">admin_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.namespaceArn">namespace_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.ownerAccount">owner_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.namespaceNameInput">namespace_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.retentionPeriodInput">retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.snapshotNameInput">snapshot_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.namespaceName">namespace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.retentionPeriod">retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.snapshotName">snapshot_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accounts_with_provisioned_restore_access`<sup>Required</sup> <a name="accounts_with_provisioned_restore_access" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.accountsWithProvisionedRestoreAccess"></a>

```python
accounts_with_provisioned_restore_access: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `accounts_with_restore_access`<sup>Required</sup> <a name="accounts_with_restore_access" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.accountsWithRestoreAccess"></a>

```python
accounts_with_restore_access: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `admin_username`<sup>Required</sup> <a name="admin_username" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `namespace_arn`<sup>Required</sup> <a name="namespace_arn" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.namespaceArn"></a>

```python
namespace_arn: str
```

- *Type:* str

---

##### `owner_account`<sup>Required</sup> <a name="owner_account" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.ownerAccount"></a>

```python
owner_account: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_name_input`<sup>Optional</sup> <a name="namespace_name_input" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.namespaceNameInput"></a>

```python
namespace_name_input: str
```

- *Type:* str

---

##### `retention_period_input`<sup>Optional</sup> <a name="retention_period_input" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.retentionPeriodInput"></a>

```python
retention_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_name_input`<sup>Optional</sup> <a name="snapshot_name_input" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.snapshotNameInput"></a>

```python
snapshot_name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.retentionPeriod"></a>

```python
retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_name`<sup>Required</sup> <a name="snapshot_name" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.snapshotName"></a>

```python
snapshot_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshot.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftserverlessSnapshotConfig <a name="RedshiftserverlessSnapshotConfig" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_snapshot

redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  namespace_name: str,
  snapshot_name: str,
  id: str = None,
  retention_period: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.namespaceName">namespace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_snapshot#namespace_name RedshiftserverlessSnapshot#namespace_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.snapshotName">snapshot_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_snapshot#snapshot_name RedshiftserverlessSnapshot#snapshot_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_snapshot#id RedshiftserverlessSnapshot#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.retentionPeriod">retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_snapshot#retention_period RedshiftserverlessSnapshot#retention_period}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_snapshot#namespace_name RedshiftserverlessSnapshot#namespace_name}.

---

##### `snapshot_name`<sup>Required</sup> <a name="snapshot_name" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.snapshotName"></a>

```python
snapshot_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_snapshot#snapshot_name RedshiftserverlessSnapshot#snapshot_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_snapshot#id RedshiftserverlessSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retention_period`<sup>Optional</sup> <a name="retention_period" id="@cdktf/provider-aws.redshiftserverlessSnapshot.RedshiftserverlessSnapshotConfig.property.retentionPeriod"></a>

```python
retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_snapshot#retention_period RedshiftserverlessSnapshot#retention_period}.

---



