# `neptuneGlobalCluster` Submodule <a name="`neptuneGlobalCluster` Submodule" id="@cdktf/provider-aws.neptuneGlobalCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NeptuneGlobalCluster <a name="NeptuneGlobalCluster" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster aws_neptune_global_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import neptune_global_cluster

neptuneGlobalCluster.NeptuneGlobalCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  global_cluster_identifier: str,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  engine: str = None,
  engine_version: str = None,
  id: str = None,
  source_db_cluster_identifier: str = None,
  storage_encrypted: typing.Union[bool, IResolvable] = None,
  timeouts: NeptuneGlobalClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.globalClusterIdentifier">global_cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#global_cluster_identifier NeptuneGlobalCluster#global_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#deletion_protection NeptuneGlobalCluster#deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#engine NeptuneGlobalCluster#engine}. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#engine_version NeptuneGlobalCluster#engine_version}. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#id NeptuneGlobalCluster#id}. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.sourceDbClusterIdentifier">source_db_cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#source_db_cluster_identifier NeptuneGlobalCluster#source_db_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.storageEncrypted">storage_encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#storage_encrypted NeptuneGlobalCluster#storage_encrypted}. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeouts">NeptuneGlobalClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `global_cluster_identifier`<sup>Required</sup> <a name="global_cluster_identifier" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.globalClusterIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#global_cluster_identifier NeptuneGlobalCluster#global_cluster_identifier}.

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.deletionProtection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#deletion_protection NeptuneGlobalCluster#deletion_protection}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.engine"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#engine NeptuneGlobalCluster#engine}.

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.engineVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#engine_version NeptuneGlobalCluster#engine_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#id NeptuneGlobalCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source_db_cluster_identifier`<sup>Optional</sup> <a name="source_db_cluster_identifier" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.sourceDbClusterIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#source_db_cluster_identifier NeptuneGlobalCluster#source_db_cluster_identifier}.

---

##### `storage_encrypted`<sup>Optional</sup> <a name="storage_encrypted" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.storageEncrypted"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#storage_encrypted NeptuneGlobalCluster#storage_encrypted}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeouts">NeptuneGlobalClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#timeouts NeptuneGlobalCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.resetDeletionProtection">reset_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.resetEngine">reset_engine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.resetEngineVersion">reset_engine_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.resetSourceDbClusterIdentifier">reset_source_db_cluster_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.resetStorageEncrypted">reset_storage_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#create NeptuneGlobalCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#delete NeptuneGlobalCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#update NeptuneGlobalCluster#update}.

---

##### `reset_deletion_protection` <a name="reset_deletion_protection" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.resetDeletionProtection"></a>

```python
def reset_deletion_protection() -> None
```

##### `reset_engine` <a name="reset_engine" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.resetEngine"></a>

```python
def reset_engine() -> None
```

##### `reset_engine_version` <a name="reset_engine_version" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.resetEngineVersion"></a>

```python
def reset_engine_version() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_source_db_cluster_identifier` <a name="reset_source_db_cluster_identifier" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.resetSourceDbClusterIdentifier"></a>

```python
def reset_source_db_cluster_identifier() -> None
```

##### `reset_storage_encrypted` <a name="reset_storage_encrypted" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.resetStorageEncrypted"></a>

```python
def reset_storage_encrypted() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import neptune_global_cluster

neptuneGlobalCluster.NeptuneGlobalCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import neptune_global_cluster

neptuneGlobalCluster.NeptuneGlobalCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import neptune_global_cluster

neptuneGlobalCluster.NeptuneGlobalCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.globalClusterMembers">global_cluster_members</a></code> | <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList">NeptuneGlobalClusterGlobalClusterMembersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.globalClusterResourceId">global_cluster_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference">NeptuneGlobalClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.deletionProtectionInput">deletion_protection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.engineVersionInput">engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.globalClusterIdentifierInput">global_cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.sourceDbClusterIdentifierInput">source_db_cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.storageEncryptedInput">storage_encrypted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeouts">NeptuneGlobalClusterTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.globalClusterIdentifier">global_cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.sourceDbClusterIdentifier">source_db_cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.storageEncrypted">storage_encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `global_cluster_members`<sup>Required</sup> <a name="global_cluster_members" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.globalClusterMembers"></a>

```python
global_cluster_members: NeptuneGlobalClusterGlobalClusterMembersList
```

- *Type:* <a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList">NeptuneGlobalClusterGlobalClusterMembersList</a>

---

##### `global_cluster_resource_id`<sup>Required</sup> <a name="global_cluster_resource_id" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.globalClusterResourceId"></a>

```python
global_cluster_resource_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.timeouts"></a>

```python
timeouts: NeptuneGlobalClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference">NeptuneGlobalClusterTimeoutsOutputReference</a>

---

##### `deletion_protection_input`<sup>Optional</sup> <a name="deletion_protection_input" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.deletionProtectionInput"></a>

```python
deletion_protection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `engine_version_input`<sup>Optional</sup> <a name="engine_version_input" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.engineVersionInput"></a>

```python
engine_version_input: str
```

- *Type:* str

---

##### `global_cluster_identifier_input`<sup>Optional</sup> <a name="global_cluster_identifier_input" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.globalClusterIdentifierInput"></a>

```python
global_cluster_identifier_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `source_db_cluster_identifier_input`<sup>Optional</sup> <a name="source_db_cluster_identifier_input" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.sourceDbClusterIdentifierInput"></a>

```python
source_db_cluster_identifier_input: str
```

- *Type:* str

---

##### `storage_encrypted_input`<sup>Optional</sup> <a name="storage_encrypted_input" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.storageEncryptedInput"></a>

```python
storage_encrypted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[NeptuneGlobalClusterTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeouts">NeptuneGlobalClusterTimeouts</a>, cdktf.IResolvable]

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `global_cluster_identifier`<sup>Required</sup> <a name="global_cluster_identifier" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.globalClusterIdentifier"></a>

```python
global_cluster_identifier: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `source_db_cluster_identifier`<sup>Required</sup> <a name="source_db_cluster_identifier" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.sourceDbClusterIdentifier"></a>

```python
source_db_cluster_identifier: str
```

- *Type:* str

---

##### `storage_encrypted`<sup>Required</sup> <a name="storage_encrypted" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.storageEncrypted"></a>

```python
storage_encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NeptuneGlobalClusterConfig <a name="NeptuneGlobalClusterConfig" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import neptune_global_cluster

neptuneGlobalCluster.NeptuneGlobalClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  global_cluster_identifier: str,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  engine: str = None,
  engine_version: str = None,
  id: str = None,
  source_db_cluster_identifier: str = None,
  storage_encrypted: typing.Union[bool, IResolvable] = None,
  timeouts: NeptuneGlobalClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.globalClusterIdentifier">global_cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#global_cluster_identifier NeptuneGlobalCluster#global_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#deletion_protection NeptuneGlobalCluster#deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#engine NeptuneGlobalCluster#engine}. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#engine_version NeptuneGlobalCluster#engine_version}. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#id NeptuneGlobalCluster#id}. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.sourceDbClusterIdentifier">source_db_cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#source_db_cluster_identifier NeptuneGlobalCluster#source_db_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.storageEncrypted">storage_encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#storage_encrypted NeptuneGlobalCluster#storage_encrypted}. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeouts">NeptuneGlobalClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `global_cluster_identifier`<sup>Required</sup> <a name="global_cluster_identifier" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.globalClusterIdentifier"></a>

```python
global_cluster_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#global_cluster_identifier NeptuneGlobalCluster#global_cluster_identifier}.

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#deletion_protection NeptuneGlobalCluster#deletion_protection}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.engine"></a>

```python
engine: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#engine NeptuneGlobalCluster#engine}.

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#engine_version NeptuneGlobalCluster#engine_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#id NeptuneGlobalCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source_db_cluster_identifier`<sup>Optional</sup> <a name="source_db_cluster_identifier" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.sourceDbClusterIdentifier"></a>

```python
source_db_cluster_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#source_db_cluster_identifier NeptuneGlobalCluster#source_db_cluster_identifier}.

---

##### `storage_encrypted`<sup>Optional</sup> <a name="storage_encrypted" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.storageEncrypted"></a>

```python
storage_encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#storage_encrypted NeptuneGlobalCluster#storage_encrypted}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.timeouts"></a>

```python
timeouts: NeptuneGlobalClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeouts">NeptuneGlobalClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#timeouts NeptuneGlobalCluster#timeouts}

---

### NeptuneGlobalClusterGlobalClusterMembers <a name="NeptuneGlobalClusterGlobalClusterMembers" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembers.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import neptune_global_cluster

neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembers()
```


### NeptuneGlobalClusterTimeouts <a name="NeptuneGlobalClusterTimeouts" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import neptune_global_cluster

neptuneGlobalCluster.NeptuneGlobalClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#create NeptuneGlobalCluster#create}. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#delete NeptuneGlobalCluster#delete}. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#update NeptuneGlobalCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#create NeptuneGlobalCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#delete NeptuneGlobalCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#update NeptuneGlobalCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NeptuneGlobalClusterGlobalClusterMembersList <a name="NeptuneGlobalClusterGlobalClusterMembersList" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import neptune_global_cluster

neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NeptuneGlobalClusterGlobalClusterMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### NeptuneGlobalClusterGlobalClusterMembersOutputReference <a name="NeptuneGlobalClusterGlobalClusterMembersOutputReference" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import neptune_global_cluster

neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.property.dbClusterArn">db_cluster_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.property.isWriter">is_writer</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembers">NeptuneGlobalClusterGlobalClusterMembers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `db_cluster_arn`<sup>Required</sup> <a name="db_cluster_arn" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.property.dbClusterArn"></a>

```python
db_cluster_arn: str
```

- *Type:* str

---

##### `is_writer`<sup>Required</sup> <a name="is_writer" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.property.isWriter"></a>

```python
is_writer: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.property.internalValue"></a>

```python
internal_value: NeptuneGlobalClusterGlobalClusterMembers
```

- *Type:* <a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembers">NeptuneGlobalClusterGlobalClusterMembers</a>

---


### NeptuneGlobalClusterTimeoutsOutputReference <a name="NeptuneGlobalClusterTimeoutsOutputReference" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import neptune_global_cluster

neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeouts">NeptuneGlobalClusterTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[NeptuneGlobalClusterTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeouts">NeptuneGlobalClusterTimeouts</a>, cdktf.IResolvable]

---



