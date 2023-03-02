# `ssmResourceDataSync` Submodule <a name="`ssmResourceDataSync` Submodule" id="@cdktf/provider-aws.ssmResourceDataSync"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmResourceDataSync <a name="SsmResourceDataSync" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync aws_ssm_resource_data_sync}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssm_resource_data_sync

ssmResourceDataSync.SsmResourceDataSync(
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
  s3_destination: SsmResourceDataSyncS3Destination,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#name SsmResourceDataSync#name}. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.s3Destination">s3_destination</a></code> | <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a></code> | s3_destination block. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#id SsmResourceDataSync#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#name SsmResourceDataSync#name}.

---

##### `s3_destination`<sup>Required</sup> <a name="s3_destination" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.s3Destination"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a>

s3_destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#s3_destination SsmResourceDataSync#s3_destination}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#id SsmResourceDataSync#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.putS3Destination">put_s3_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_s3_destination` <a name="put_s3_destination" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.putS3Destination"></a>

```python
def put_s3_destination(
  bucket_name: str,
  region: str,
  kms_key_arn: str = None,
  prefix: str = None,
  sync_format: str = None
) -> None
```

###### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.putS3Destination.parameter.bucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#bucket_name SsmResourceDataSync#bucket_name}.

---

###### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.putS3Destination.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#region SsmResourceDataSync#region}.

---

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.putS3Destination.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#kms_key_arn SsmResourceDataSync#kms_key_arn}.

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.putS3Destination.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#prefix SsmResourceDataSync#prefix}.

---

###### `sync_format`<sup>Optional</sup> <a name="sync_format" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.putS3Destination.parameter.syncFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#sync_format SsmResourceDataSync#sync_format}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ssm_resource_data_sync

ssmResourceDataSync.SsmResourceDataSync.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ssm_resource_data_sync

ssmResourceDataSync.SsmResourceDataSync.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ssm_resource_data_sync

ssmResourceDataSync.SsmResourceDataSync.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.s3Destination">s3_destination</a></code> | <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference">SsmResourceDataSyncS3DestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.s3DestinationInput">s3_destination_input</a></code> | <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `s3_destination`<sup>Required</sup> <a name="s3_destination" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.s3Destination"></a>

```python
s3_destination: SsmResourceDataSyncS3DestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference">SsmResourceDataSyncS3DestinationOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `s3_destination_input`<sup>Optional</sup> <a name="s3_destination_input" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.s3DestinationInput"></a>

```python
s3_destination_input: SsmResourceDataSyncS3Destination
```

- *Type:* <a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSync.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SsmResourceDataSyncConfig <a name="SsmResourceDataSyncConfig" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssm_resource_data_sync

ssmResourceDataSync.SsmResourceDataSyncConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  s3_destination: SsmResourceDataSyncS3Destination,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#name SsmResourceDataSync#name}. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.s3Destination">s3_destination</a></code> | <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a></code> | s3_destination block. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#id SsmResourceDataSync#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#name SsmResourceDataSync#name}.

---

##### `s3_destination`<sup>Required</sup> <a name="s3_destination" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.s3Destination"></a>

```python
s3_destination: SsmResourceDataSyncS3Destination
```

- *Type:* <a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a>

s3_destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#s3_destination SsmResourceDataSync#s3_destination}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#id SsmResourceDataSync#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### SsmResourceDataSyncS3Destination <a name="SsmResourceDataSyncS3Destination" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssm_resource_data_sync

ssmResourceDataSync.SsmResourceDataSyncS3Destination(
  bucket_name: str,
  region: str,
  kms_key_arn: str = None,
  prefix: str = None,
  sync_format: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.bucketName">bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#bucket_name SsmResourceDataSync#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#region SsmResourceDataSync#region}. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#kms_key_arn SsmResourceDataSync#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#prefix SsmResourceDataSync#prefix}. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.syncFormat">sync_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#sync_format SsmResourceDataSync#sync_format}. |

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#bucket_name SsmResourceDataSync#bucket_name}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#region SsmResourceDataSync#region}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#kms_key_arn SsmResourceDataSync#kms_key_arn}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#prefix SsmResourceDataSync#prefix}.

---

##### `sync_format`<sup>Optional</sup> <a name="sync_format" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.syncFormat"></a>

```python
sync_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync#sync_format SsmResourceDataSync#sync_format}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmResourceDataSyncS3DestinationOutputReference <a name="SsmResourceDataSyncS3DestinationOutputReference" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssm_resource_data_sync

ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetSyncFormat">reset_sync_format</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_sync_format` <a name="reset_sync_format" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetSyncFormat"></a>

```python
def reset_sync_format() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.syncFormatInput">sync_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.syncFormat">sync_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `sync_format_input`<sup>Optional</sup> <a name="sync_format_input" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.syncFormatInput"></a>

```python
sync_format_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `sync_format`<sup>Required</sup> <a name="sync_format" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.syncFormat"></a>

```python
sync_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.internalValue"></a>

```python
internal_value: SsmResourceDataSyncS3Destination
```

- *Type:* <a href="#@cdktf/provider-aws.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a>

---



