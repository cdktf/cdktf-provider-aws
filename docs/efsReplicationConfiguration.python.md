# `efsReplicationConfiguration` Submodule <a name="`efsReplicationConfiguration` Submodule" id="@cdktf/provider-aws.efsReplicationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EfsReplicationConfiguration <a name="EfsReplicationConfiguration" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration aws_efs_replication_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import efs_replication_configuration

efsReplicationConfiguration.EfsReplicationConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination: EfsReplicationConfigurationDestination,
  source_file_system_id: str,
  id: str = None,
  timeouts: EfsReplicationConfigurationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.Initializer.parameter.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestination">EfsReplicationConfigurationDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.Initializer.parameter.sourceFileSystemId">source_file_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#source_file_system_id EfsReplicationConfiguration#source_file_system_id}. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#id EfsReplicationConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeouts">EfsReplicationConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.Initializer.parameter.destination"></a>

- *Type:* <a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestination">EfsReplicationConfigurationDestination</a>

destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#destination EfsReplicationConfiguration#destination}

---

##### `source_file_system_id`<sup>Required</sup> <a name="source_file_system_id" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.Initializer.parameter.sourceFileSystemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#source_file_system_id EfsReplicationConfiguration#source_file_system_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#id EfsReplicationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeouts">EfsReplicationConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#timeouts EfsReplicationConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.putDestination">put_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_destination` <a name="put_destination" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.putDestination"></a>

```python
def put_destination(
  availability_zone_name: str = None,
  kms_key_id: str = None,
  region: str = None
) -> None
```

###### `availability_zone_name`<sup>Optional</sup> <a name="availability_zone_name" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.putDestination.parameter.availabilityZoneName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#availability_zone_name EfsReplicationConfiguration#availability_zone_name}.

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.putDestination.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#kms_key_id EfsReplicationConfiguration#kms_key_id}.

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.putDestination.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#region EfsReplicationConfiguration#region}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#create EfsReplicationConfiguration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#delete EfsReplicationConfiguration#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import efs_replication_configuration

efsReplicationConfiguration.EfsReplicationConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import efs_replication_configuration

efsReplicationConfiguration.EfsReplicationConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import efs_replication_configuration

efsReplicationConfiguration.EfsReplicationConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference">EfsReplicationConfigurationDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.originalSourceFileSystemArn">original_source_file_system_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.sourceFileSystemArn">source_file_system_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.sourceFileSystemRegion">source_file_system_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference">EfsReplicationConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.destinationInput">destination_input</a></code> | <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestination">EfsReplicationConfigurationDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.sourceFileSystemIdInput">source_file_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeouts">EfsReplicationConfigurationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.sourceFileSystemId">source_file_system_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.destination"></a>

```python
destination: EfsReplicationConfigurationDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference">EfsReplicationConfigurationDestinationOutputReference</a>

---

##### `original_source_file_system_arn`<sup>Required</sup> <a name="original_source_file_system_arn" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.originalSourceFileSystemArn"></a>

```python
original_source_file_system_arn: str
```

- *Type:* str

---

##### `source_file_system_arn`<sup>Required</sup> <a name="source_file_system_arn" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.sourceFileSystemArn"></a>

```python
source_file_system_arn: str
```

- *Type:* str

---

##### `source_file_system_region`<sup>Required</sup> <a name="source_file_system_region" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.sourceFileSystemRegion"></a>

```python
source_file_system_region: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.timeouts"></a>

```python
timeouts: EfsReplicationConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference">EfsReplicationConfigurationTimeoutsOutputReference</a>

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.destinationInput"></a>

```python
destination_input: EfsReplicationConfigurationDestination
```

- *Type:* <a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestination">EfsReplicationConfigurationDestination</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `source_file_system_id_input`<sup>Optional</sup> <a name="source_file_system_id_input" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.sourceFileSystemIdInput"></a>

```python
source_file_system_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[EfsReplicationConfigurationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeouts">EfsReplicationConfigurationTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `source_file_system_id`<sup>Required</sup> <a name="source_file_system_id" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.sourceFileSystemId"></a>

```python
source_file_system_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EfsReplicationConfigurationConfig <a name="EfsReplicationConfigurationConfig" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import efs_replication_configuration

efsReplicationConfiguration.EfsReplicationConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination: EfsReplicationConfigurationDestination,
  source_file_system_id: str,
  id: str = None,
  timeouts: EfsReplicationConfigurationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestination">EfsReplicationConfigurationDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.sourceFileSystemId">source_file_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#source_file_system_id EfsReplicationConfiguration#source_file_system_id}. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#id EfsReplicationConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeouts">EfsReplicationConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.destination"></a>

```python
destination: EfsReplicationConfigurationDestination
```

- *Type:* <a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestination">EfsReplicationConfigurationDestination</a>

destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#destination EfsReplicationConfiguration#destination}

---

##### `source_file_system_id`<sup>Required</sup> <a name="source_file_system_id" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.sourceFileSystemId"></a>

```python
source_file_system_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#source_file_system_id EfsReplicationConfiguration#source_file_system_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#id EfsReplicationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.timeouts"></a>

```python
timeouts: EfsReplicationConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeouts">EfsReplicationConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#timeouts EfsReplicationConfiguration#timeouts}

---

### EfsReplicationConfigurationDestination <a name="EfsReplicationConfigurationDestination" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import efs_replication_configuration

efsReplicationConfiguration.EfsReplicationConfigurationDestination(
  availability_zone_name: str = None,
  kms_key_id: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestination.property.availabilityZoneName">availability_zone_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#availability_zone_name EfsReplicationConfiguration#availability_zone_name}. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestination.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#kms_key_id EfsReplicationConfiguration#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestination.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#region EfsReplicationConfiguration#region}. |

---

##### `availability_zone_name`<sup>Optional</sup> <a name="availability_zone_name" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestination.property.availabilityZoneName"></a>

```python
availability_zone_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#availability_zone_name EfsReplicationConfiguration#availability_zone_name}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestination.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#kms_key_id EfsReplicationConfiguration#kms_key_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestination.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#region EfsReplicationConfiguration#region}.

---

### EfsReplicationConfigurationTimeouts <a name="EfsReplicationConfigurationTimeouts" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import efs_replication_configuration

efsReplicationConfiguration.EfsReplicationConfigurationTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#create EfsReplicationConfiguration#create}. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#delete EfsReplicationConfiguration#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#create EfsReplicationConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#delete EfsReplicationConfiguration#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### EfsReplicationConfigurationDestinationOutputReference <a name="EfsReplicationConfigurationDestinationOutputReference" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import efs_replication_configuration

efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.resetAvailabilityZoneName">reset_availability_zone_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_zone_name` <a name="reset_availability_zone_name" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.resetAvailabilityZoneName"></a>

```python
def reset_availability_zone_name() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.fileSystemId">file_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.availabilityZoneNameInput">availability_zone_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.availabilityZoneName">availability_zone_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestination">EfsReplicationConfigurationDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `availability_zone_name_input`<sup>Optional</sup> <a name="availability_zone_name_input" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.availabilityZoneNameInput"></a>

```python
availability_zone_name_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `availability_zone_name`<sup>Required</sup> <a name="availability_zone_name" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.availabilityZoneName"></a>

```python
availability_zone_name: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.internalValue"></a>

```python
internal_value: EfsReplicationConfigurationDestination
```

- *Type:* <a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestination">EfsReplicationConfigurationDestination</a>

---


### EfsReplicationConfigurationTimeoutsOutputReference <a name="EfsReplicationConfigurationTimeoutsOutputReference" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import efs_replication_configuration

efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeouts">EfsReplicationConfigurationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EfsReplicationConfigurationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeouts">EfsReplicationConfigurationTimeouts</a>, cdktf.IResolvable]

---



