# `glueSecurityConfiguration` Submodule <a name="`glueSecurityConfiguration` Submodule" id="@cdktf/provider-aws.glueSecurityConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueSecurityConfiguration <a name="GlueSecurityConfiguration" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration aws_glue_security_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_security_configuration

glueSecurityConfiguration.GlueSecurityConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  encryption_configuration: GlueSecurityConfigurationEncryptionConfiguration,
  name: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration">GlueSecurityConfigurationEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#name GlueSecurityConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#id GlueSecurityConfiguration#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.encryptionConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration">GlueSecurityConfigurationEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#encryption_configuration GlueSecurityConfiguration#encryption_configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#name GlueSecurityConfiguration#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#id GlueSecurityConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.putEncryptionConfiguration">put_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_encryption_configuration` <a name="put_encryption_configuration" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.putEncryptionConfiguration"></a>

```python
def put_encryption_configuration(
  cloudwatch_encryption: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption,
  job_bookmarks_encryption: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption,
  s3_encryption: GlueSecurityConfigurationEncryptionConfigurationS3Encryption
) -> None
```

###### `cloudwatch_encryption`<sup>Required</sup> <a name="cloudwatch_encryption" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.putEncryptionConfiguration.parameter.cloudwatchEncryption"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption">GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption</a>

cloudwatch_encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#cloudwatch_encryption GlueSecurityConfiguration#cloudwatch_encryption}

---

###### `job_bookmarks_encryption`<sup>Required</sup> <a name="job_bookmarks_encryption" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.putEncryptionConfiguration.parameter.jobBookmarksEncryption"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption">GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption</a>

job_bookmarks_encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#job_bookmarks_encryption GlueSecurityConfiguration#job_bookmarks_encryption}

---

###### `s3_encryption`<sup>Required</sup> <a name="s3_encryption" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.putEncryptionConfiguration.parameter.s3Encryption"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryption">GlueSecurityConfigurationEncryptionConfigurationS3Encryption</a>

s3_encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#s3_encryption GlueSecurityConfiguration#s3_encryption}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import glue_security_configuration

glueSecurityConfiguration.GlueSecurityConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import glue_security_configuration

glueSecurityConfiguration.GlueSecurityConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import glue_security_configuration

glueSecurityConfiguration.GlueSecurityConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference">GlueSecurityConfigurationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.encryptionConfigurationInput">encryption_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration">GlueSecurityConfigurationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.encryptionConfiguration"></a>

```python
encryption_configuration: GlueSecurityConfigurationEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference">GlueSecurityConfigurationEncryptionConfigurationOutputReference</a>

---

##### `encryption_configuration_input`<sup>Optional</sup> <a name="encryption_configuration_input" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.encryptionConfigurationInput"></a>

```python
encryption_configuration_input: GlueSecurityConfigurationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration">GlueSecurityConfigurationEncryptionConfiguration</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GlueSecurityConfigurationConfig <a name="GlueSecurityConfigurationConfig" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_security_configuration

glueSecurityConfiguration.GlueSecurityConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  encryption_configuration: GlueSecurityConfigurationEncryptionConfiguration,
  name: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration">GlueSecurityConfigurationEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#name GlueSecurityConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#id GlueSecurityConfiguration#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.encryptionConfiguration"></a>

```python
encryption_configuration: GlueSecurityConfigurationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration">GlueSecurityConfigurationEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#encryption_configuration GlueSecurityConfiguration#encryption_configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#name GlueSecurityConfiguration#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#id GlueSecurityConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### GlueSecurityConfigurationEncryptionConfiguration <a name="GlueSecurityConfigurationEncryptionConfiguration" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_security_configuration

glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration(
  cloudwatch_encryption: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption,
  job_bookmarks_encryption: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption,
  s3_encryption: GlueSecurityConfigurationEncryptionConfigurationS3Encryption
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration.property.cloudwatchEncryption">cloudwatch_encryption</a></code> | <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption">GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption</a></code> | cloudwatch_encryption block. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration.property.jobBookmarksEncryption">job_bookmarks_encryption</a></code> | <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption">GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption</a></code> | job_bookmarks_encryption block. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration.property.s3Encryption">s3_encryption</a></code> | <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryption">GlueSecurityConfigurationEncryptionConfigurationS3Encryption</a></code> | s3_encryption block. |

---

##### `cloudwatch_encryption`<sup>Required</sup> <a name="cloudwatch_encryption" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration.property.cloudwatchEncryption"></a>

```python
cloudwatch_encryption: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption">GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption</a>

cloudwatch_encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#cloudwatch_encryption GlueSecurityConfiguration#cloudwatch_encryption}

---

##### `job_bookmarks_encryption`<sup>Required</sup> <a name="job_bookmarks_encryption" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration.property.jobBookmarksEncryption"></a>

```python
job_bookmarks_encryption: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption">GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption</a>

job_bookmarks_encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#job_bookmarks_encryption GlueSecurityConfiguration#job_bookmarks_encryption}

---

##### `s3_encryption`<sup>Required</sup> <a name="s3_encryption" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration.property.s3Encryption"></a>

```python
s3_encryption: GlueSecurityConfigurationEncryptionConfigurationS3Encryption
```

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryption">GlueSecurityConfigurationEncryptionConfigurationS3Encryption</a>

s3_encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#s3_encryption GlueSecurityConfiguration#s3_encryption}

---

### GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption <a name="GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_security_configuration

glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption(
  cloudwatch_encryption_mode: str = None,
  kms_key_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption.property.cloudwatchEncryptionMode">cloudwatch_encryption_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#cloudwatch_encryption_mode GlueSecurityConfiguration#cloudwatch_encryption_mode}. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#kms_key_arn GlueSecurityConfiguration#kms_key_arn}. |

---

##### `cloudwatch_encryption_mode`<sup>Optional</sup> <a name="cloudwatch_encryption_mode" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption.property.cloudwatchEncryptionMode"></a>

```python
cloudwatch_encryption_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#cloudwatch_encryption_mode GlueSecurityConfiguration#cloudwatch_encryption_mode}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#kms_key_arn GlueSecurityConfiguration#kms_key_arn}.

---

### GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption <a name="GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_security_configuration

glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption(
  job_bookmarks_encryption_mode: str = None,
  kms_key_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption.property.jobBookmarksEncryptionMode">job_bookmarks_encryption_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#job_bookmarks_encryption_mode GlueSecurityConfiguration#job_bookmarks_encryption_mode}. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#kms_key_arn GlueSecurityConfiguration#kms_key_arn}. |

---

##### `job_bookmarks_encryption_mode`<sup>Optional</sup> <a name="job_bookmarks_encryption_mode" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption.property.jobBookmarksEncryptionMode"></a>

```python
job_bookmarks_encryption_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#job_bookmarks_encryption_mode GlueSecurityConfiguration#job_bookmarks_encryption_mode}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#kms_key_arn GlueSecurityConfiguration#kms_key_arn}.

---

### GlueSecurityConfigurationEncryptionConfigurationS3Encryption <a name="GlueSecurityConfigurationEncryptionConfigurationS3Encryption" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryption.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_security_configuration

glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryption(
  kms_key_arn: str = None,
  s3_encryption_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryption.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#kms_key_arn GlueSecurityConfiguration#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryption.property.s3EncryptionMode">s3_encryption_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#s3_encryption_mode GlueSecurityConfiguration#s3_encryption_mode}. |

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryption.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#kms_key_arn GlueSecurityConfiguration#kms_key_arn}.

---

##### `s3_encryption_mode`<sup>Optional</sup> <a name="s3_encryption_mode" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryption.property.s3EncryptionMode"></a>

```python
s3_encryption_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#s3_encryption_mode GlueSecurityConfiguration#s3_encryption_mode}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference <a name="GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_security_configuration

glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.resetCloudwatchEncryptionMode">reset_cloudwatch_encryption_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cloudwatch_encryption_mode` <a name="reset_cloudwatch_encryption_mode" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.resetCloudwatchEncryptionMode"></a>

```python
def reset_cloudwatch_encryption_mode() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.cloudwatchEncryptionModeInput">cloudwatch_encryption_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.cloudwatchEncryptionMode">cloudwatch_encryption_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption">GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_encryption_mode_input`<sup>Optional</sup> <a name="cloudwatch_encryption_mode_input" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.cloudwatchEncryptionModeInput"></a>

```python
cloudwatch_encryption_mode_input: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `cloudwatch_encryption_mode`<sup>Required</sup> <a name="cloudwatch_encryption_mode" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.cloudwatchEncryptionMode"></a>

```python
cloudwatch_encryption_mode: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption">GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption</a>

---


### GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference <a name="GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_security_configuration

glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.resetJobBookmarksEncryptionMode">reset_job_bookmarks_encryption_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_job_bookmarks_encryption_mode` <a name="reset_job_bookmarks_encryption_mode" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.resetJobBookmarksEncryptionMode"></a>

```python
def reset_job_bookmarks_encryption_mode() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.jobBookmarksEncryptionModeInput">job_bookmarks_encryption_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.jobBookmarksEncryptionMode">job_bookmarks_encryption_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption">GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `job_bookmarks_encryption_mode_input`<sup>Optional</sup> <a name="job_bookmarks_encryption_mode_input" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.jobBookmarksEncryptionModeInput"></a>

```python
job_bookmarks_encryption_mode_input: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `job_bookmarks_encryption_mode`<sup>Required</sup> <a name="job_bookmarks_encryption_mode" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.jobBookmarksEncryptionMode"></a>

```python
job_bookmarks_encryption_mode: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption">GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption</a>

---


### GlueSecurityConfigurationEncryptionConfigurationOutputReference <a name="GlueSecurityConfigurationEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_security_configuration

glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.putCloudwatchEncryption">put_cloudwatch_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.putJobBookmarksEncryption">put_job_bookmarks_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.putS3Encryption">put_s3_encryption</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudwatch_encryption` <a name="put_cloudwatch_encryption" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.putCloudwatchEncryption"></a>

```python
def put_cloudwatch_encryption(
  cloudwatch_encryption_mode: str = None,
  kms_key_arn: str = None
) -> None
```

###### `cloudwatch_encryption_mode`<sup>Optional</sup> <a name="cloudwatch_encryption_mode" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.putCloudwatchEncryption.parameter.cloudwatchEncryptionMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#cloudwatch_encryption_mode GlueSecurityConfiguration#cloudwatch_encryption_mode}.

---

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.putCloudwatchEncryption.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#kms_key_arn GlueSecurityConfiguration#kms_key_arn}.

---

##### `put_job_bookmarks_encryption` <a name="put_job_bookmarks_encryption" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.putJobBookmarksEncryption"></a>

```python
def put_job_bookmarks_encryption(
  job_bookmarks_encryption_mode: str = None,
  kms_key_arn: str = None
) -> None
```

###### `job_bookmarks_encryption_mode`<sup>Optional</sup> <a name="job_bookmarks_encryption_mode" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.putJobBookmarksEncryption.parameter.jobBookmarksEncryptionMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#job_bookmarks_encryption_mode GlueSecurityConfiguration#job_bookmarks_encryption_mode}.

---

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.putJobBookmarksEncryption.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#kms_key_arn GlueSecurityConfiguration#kms_key_arn}.

---

##### `put_s3_encryption` <a name="put_s3_encryption" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.putS3Encryption"></a>

```python
def put_s3_encryption(
  kms_key_arn: str = None,
  s3_encryption_mode: str = None
) -> None
```

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.putS3Encryption.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#kms_key_arn GlueSecurityConfiguration#kms_key_arn}.

---

###### `s3_encryption_mode`<sup>Optional</sup> <a name="s3_encryption_mode" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.putS3Encryption.parameter.s3EncryptionMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#s3_encryption_mode GlueSecurityConfiguration#s3_encryption_mode}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.cloudwatchEncryption">cloudwatch_encryption</a></code> | <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference">GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.jobBookmarksEncryption">job_bookmarks_encryption</a></code> | <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference">GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.s3Encryption">s3_encryption</a></code> | <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference">GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.cloudwatchEncryptionInput">cloudwatch_encryption_input</a></code> | <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption">GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.jobBookmarksEncryptionInput">job_bookmarks_encryption_input</a></code> | <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption">GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.s3EncryptionInput">s3_encryption_input</a></code> | <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryption">GlueSecurityConfigurationEncryptionConfigurationS3Encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration">GlueSecurityConfigurationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_encryption`<sup>Required</sup> <a name="cloudwatch_encryption" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.cloudwatchEncryption"></a>

```python
cloudwatch_encryption: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference">GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference</a>

---

##### `job_bookmarks_encryption`<sup>Required</sup> <a name="job_bookmarks_encryption" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.jobBookmarksEncryption"></a>

```python
job_bookmarks_encryption: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference">GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference</a>

---

##### `s3_encryption`<sup>Required</sup> <a name="s3_encryption" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.s3Encryption"></a>

```python
s3_encryption: GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference">GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference</a>

---

##### `cloudwatch_encryption_input`<sup>Optional</sup> <a name="cloudwatch_encryption_input" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.cloudwatchEncryptionInput"></a>

```python
cloudwatch_encryption_input: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption">GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption</a>

---

##### `job_bookmarks_encryption_input`<sup>Optional</sup> <a name="job_bookmarks_encryption_input" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.jobBookmarksEncryptionInput"></a>

```python
job_bookmarks_encryption_input: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption">GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption</a>

---

##### `s3_encryption_input`<sup>Optional</sup> <a name="s3_encryption_input" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.s3EncryptionInput"></a>

```python
s3_encryption_input: GlueSecurityConfigurationEncryptionConfigurationS3Encryption
```

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryption">GlueSecurityConfigurationEncryptionConfigurationS3Encryption</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: GlueSecurityConfigurationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration">GlueSecurityConfigurationEncryptionConfiguration</a>

---


### GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference <a name="GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_security_configuration

glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.resetS3EncryptionMode">reset_s3_encryption_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_s3_encryption_mode` <a name="reset_s3_encryption_mode" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.resetS3EncryptionMode"></a>

```python
def reset_s3_encryption_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.property.s3EncryptionModeInput">s3_encryption_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.property.s3EncryptionMode">s3_encryption_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryption">GlueSecurityConfigurationEncryptionConfigurationS3Encryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `s3_encryption_mode_input`<sup>Optional</sup> <a name="s3_encryption_mode_input" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.property.s3EncryptionModeInput"></a>

```python
s3_encryption_mode_input: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `s3_encryption_mode`<sup>Required</sup> <a name="s3_encryption_mode" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.property.s3EncryptionMode"></a>

```python
s3_encryption_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference.property.internalValue"></a>

```python
internal_value: GlueSecurityConfigurationEncryptionConfigurationS3Encryption
```

- *Type:* <a href="#@cdktf/provider-aws.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryption">GlueSecurityConfigurationEncryptionConfigurationS3Encryption</a>

---



