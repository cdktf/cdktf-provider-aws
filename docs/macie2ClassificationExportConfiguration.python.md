# `macie2ClassificationExportConfiguration` Submodule <a name="`macie2ClassificationExportConfiguration` Submodule" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Macie2ClassificationExportConfiguration <a name="Macie2ClassificationExportConfiguration" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration aws_macie2_classification_export_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import macie2_classification_export_configuration

macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  s3_destination: Macie2ClassificationExportConfigurationS3Destination = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#id Macie2ClassificationExportConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.s3Destination">s3_destination</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a></code> | s3_destination block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#id Macie2ClassificationExportConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `s3_destination`<sup>Optional</sup> <a name="s3_destination" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.s3Destination"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a>

s3_destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#s3_destination Macie2ClassificationExportConfiguration#s3_destination}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.putS3Destination">put_s3_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.resetS3Destination">reset_s3_destination</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_s3_destination` <a name="put_s3_destination" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.putS3Destination"></a>

```python
def put_s3_destination(
  bucket_name: str,
  kms_key_arn: str,
  key_prefix: str = None
) -> None
```

###### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.putS3Destination.parameter.bucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#bucket_name Macie2ClassificationExportConfiguration#bucket_name}.

---

###### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.putS3Destination.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#kms_key_arn Macie2ClassificationExportConfiguration#kms_key_arn}.

---

###### `key_prefix`<sup>Optional</sup> <a name="key_prefix" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.putS3Destination.parameter.keyPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#key_prefix Macie2ClassificationExportConfiguration#key_prefix}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_s3_destination` <a name="reset_s3_destination" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.resetS3Destination"></a>

```python
def reset_s3_destination() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import macie2_classification_export_configuration

macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import macie2_classification_export_configuration

macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import macie2_classification_export_configuration

macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.s3Destination">s3_destination</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference">Macie2ClassificationExportConfigurationS3DestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.s3DestinationInput">s3_destination_input</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `s3_destination`<sup>Required</sup> <a name="s3_destination" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.s3Destination"></a>

```python
s3_destination: Macie2ClassificationExportConfigurationS3DestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference">Macie2ClassificationExportConfigurationS3DestinationOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `s3_destination_input`<sup>Optional</sup> <a name="s3_destination_input" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.s3DestinationInput"></a>

```python
s3_destination_input: Macie2ClassificationExportConfigurationS3Destination
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Macie2ClassificationExportConfigurationConfig <a name="Macie2ClassificationExportConfigurationConfig" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import macie2_classification_export_configuration

macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  s3_destination: Macie2ClassificationExportConfigurationS3Destination = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#id Macie2ClassificationExportConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.s3Destination">s3_destination</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a></code> | s3_destination block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#id Macie2ClassificationExportConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `s3_destination`<sup>Optional</sup> <a name="s3_destination" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.s3Destination"></a>

```python
s3_destination: Macie2ClassificationExportConfigurationS3Destination
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a>

s3_destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#s3_destination Macie2ClassificationExportConfiguration#s3_destination}

---

### Macie2ClassificationExportConfigurationS3Destination <a name="Macie2ClassificationExportConfigurationS3Destination" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import macie2_classification_export_configuration

macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination(
  bucket_name: str,
  kms_key_arn: str,
  key_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.property.bucketName">bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#bucket_name Macie2ClassificationExportConfiguration#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#kms_key_arn Macie2ClassificationExportConfiguration#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.property.keyPrefix">key_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#key_prefix Macie2ClassificationExportConfiguration#key_prefix}. |

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#bucket_name Macie2ClassificationExportConfiguration#bucket_name}.

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#kms_key_arn Macie2ClassificationExportConfiguration#kms_key_arn}.

---

##### `key_prefix`<sup>Optional</sup> <a name="key_prefix" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.property.keyPrefix"></a>

```python
key_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#key_prefix Macie2ClassificationExportConfiguration#key_prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### Macie2ClassificationExportConfigurationS3DestinationOutputReference <a name="Macie2ClassificationExportConfigurationS3DestinationOutputReference" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import macie2_classification_export_configuration

macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.resetKeyPrefix">reset_key_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key_prefix` <a name="reset_key_prefix" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.resetKeyPrefix"></a>

```python
def reset_key_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.keyPrefixInput">key_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.keyPrefix">key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `key_prefix_input`<sup>Optional</sup> <a name="key_prefix_input" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.keyPrefixInput"></a>

```python
key_prefix_input: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `key_prefix`<sup>Required</sup> <a name="key_prefix" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.keyPrefix"></a>

```python
key_prefix: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.internalValue"></a>

```python
internal_value: Macie2ClassificationExportConfigurationS3Destination
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a>

---



