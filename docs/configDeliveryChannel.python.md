# `configDeliveryChannel` Submodule <a name="`configDeliveryChannel` Submodule" id="@cdktf/provider-aws.configDeliveryChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigDeliveryChannel <a name="ConfigDeliveryChannel" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel aws_config_delivery_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_delivery_channel

configDeliveryChannel.ConfigDeliveryChannel(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  s3_bucket_name: str,
  id: str = None,
  name: str = None,
  s3_key_prefix: str = None,
  s3_kms_key_arn: str = None,
  snapshot_delivery_properties: ConfigDeliveryChannelSnapshotDeliveryProperties = None,
  sns_topic_arn: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_bucket_name ConfigDeliveryChannel#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#id ConfigDeliveryChannel#id}. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#name ConfigDeliveryChannel#name}. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.s3KeyPrefix">s3_key_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_key_prefix ConfigDeliveryChannel#s3_key_prefix}. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.s3KmsKeyArn">s3_kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_kms_key_arn ConfigDeliveryChannel#s3_kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.snapshotDeliveryProperties">snapshot_delivery_properties</a></code> | <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties">ConfigDeliveryChannelSnapshotDeliveryProperties</a></code> | snapshot_delivery_properties block. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#sns_topic_arn ConfigDeliveryChannel#sns_topic_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.s3BucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_bucket_name ConfigDeliveryChannel#s3_bucket_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#id ConfigDeliveryChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#name ConfigDeliveryChannel#name}.

---

##### `s3_key_prefix`<sup>Optional</sup> <a name="s3_key_prefix" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.s3KeyPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_key_prefix ConfigDeliveryChannel#s3_key_prefix}.

---

##### `s3_kms_key_arn`<sup>Optional</sup> <a name="s3_kms_key_arn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.s3KmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_kms_key_arn ConfigDeliveryChannel#s3_kms_key_arn}.

---

##### `snapshot_delivery_properties`<sup>Optional</sup> <a name="snapshot_delivery_properties" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.snapshotDeliveryProperties"></a>

- *Type:* <a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties">ConfigDeliveryChannelSnapshotDeliveryProperties</a>

snapshot_delivery_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#snapshot_delivery_properties ConfigDeliveryChannel#snapshot_delivery_properties}

---

##### `sns_topic_arn`<sup>Optional</sup> <a name="sns_topic_arn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.snsTopicArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#sns_topic_arn ConfigDeliveryChannel#sns_topic_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.putSnapshotDeliveryProperties">put_snapshot_delivery_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetS3KeyPrefix">reset_s3_key_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetS3KmsKeyArn">reset_s3_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetSnapshotDeliveryProperties">reset_snapshot_delivery_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetSnsTopicArn">reset_sns_topic_arn</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_snapshot_delivery_properties` <a name="put_snapshot_delivery_properties" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.putSnapshotDeliveryProperties"></a>

```python
def put_snapshot_delivery_properties(
  delivery_frequency: str = None
) -> None
```

###### `delivery_frequency`<sup>Optional</sup> <a name="delivery_frequency" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.putSnapshotDeliveryProperties.parameter.deliveryFrequency"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#delivery_frequency ConfigDeliveryChannel#delivery_frequency}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_s3_key_prefix` <a name="reset_s3_key_prefix" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetS3KeyPrefix"></a>

```python
def reset_s3_key_prefix() -> None
```

##### `reset_s3_kms_key_arn` <a name="reset_s3_kms_key_arn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetS3KmsKeyArn"></a>

```python
def reset_s3_kms_key_arn() -> None
```

##### `reset_snapshot_delivery_properties` <a name="reset_snapshot_delivery_properties" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetSnapshotDeliveryProperties"></a>

```python
def reset_snapshot_delivery_properties() -> None
```

##### `reset_sns_topic_arn` <a name="reset_sns_topic_arn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.resetSnsTopicArn"></a>

```python
def reset_sns_topic_arn() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import config_delivery_channel

configDeliveryChannel.ConfigDeliveryChannel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import config_delivery_channel

configDeliveryChannel.ConfigDeliveryChannel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import config_delivery_channel

configDeliveryChannel.ConfigDeliveryChannel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.snapshotDeliveryProperties">snapshot_delivery_properties</a></code> | <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference">ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketNameInput">s3_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefixInput">s3_key_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArnInput">s3_kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.snapshotDeliveryPropertiesInput">snapshot_delivery_properties_input</a></code> | <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties">ConfigDeliveryChannelSnapshotDeliveryProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArnInput">sns_topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefix">s3_key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArn">s3_kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `snapshot_delivery_properties`<sup>Required</sup> <a name="snapshot_delivery_properties" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.snapshotDeliveryProperties"></a>

```python
snapshot_delivery_properties: ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference">ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `s3_bucket_name_input`<sup>Optional</sup> <a name="s3_bucket_name_input" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketNameInput"></a>

```python
s3_bucket_name_input: str
```

- *Type:* str

---

##### `s3_key_prefix_input`<sup>Optional</sup> <a name="s3_key_prefix_input" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefixInput"></a>

```python
s3_key_prefix_input: str
```

- *Type:* str

---

##### `s3_kms_key_arn_input`<sup>Optional</sup> <a name="s3_kms_key_arn_input" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArnInput"></a>

```python
s3_kms_key_arn_input: str
```

- *Type:* str

---

##### `snapshot_delivery_properties_input`<sup>Optional</sup> <a name="snapshot_delivery_properties_input" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.snapshotDeliveryPropertiesInput"></a>

```python
snapshot_delivery_properties_input: ConfigDeliveryChannelSnapshotDeliveryProperties
```

- *Type:* <a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties">ConfigDeliveryChannelSnapshotDeliveryProperties</a>

---

##### `sns_topic_arn_input`<sup>Optional</sup> <a name="sns_topic_arn_input" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArnInput"></a>

```python
sns_topic_arn_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

---

##### `s3_key_prefix`<sup>Required</sup> <a name="s3_key_prefix" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefix"></a>

```python
s3_key_prefix: str
```

- *Type:* str

---

##### `s3_kms_key_arn`<sup>Required</sup> <a name="s3_kms_key_arn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArn"></a>

```python
s3_kms_key_arn: str
```

- *Type:* str

---

##### `sns_topic_arn`<sup>Required</sup> <a name="sns_topic_arn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigDeliveryChannelConfig <a name="ConfigDeliveryChannelConfig" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_delivery_channel

configDeliveryChannel.ConfigDeliveryChannelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  s3_bucket_name: str,
  id: str = None,
  name: str = None,
  s3_key_prefix: str = None,
  s3_kms_key_arn: str = None,
  snapshot_delivery_properties: ConfigDeliveryChannelSnapshotDeliveryProperties = None,
  sns_topic_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_bucket_name ConfigDeliveryChannel#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#id ConfigDeliveryChannel#id}. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#name ConfigDeliveryChannel#name}. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KeyPrefix">s3_key_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_key_prefix ConfigDeliveryChannel#s3_key_prefix}. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KmsKeyArn">s3_kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_kms_key_arn ConfigDeliveryChannel#s3_kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.snapshotDeliveryProperties">snapshot_delivery_properties</a></code> | <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties">ConfigDeliveryChannelSnapshotDeliveryProperties</a></code> | snapshot_delivery_properties block. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#sns_topic_arn ConfigDeliveryChannel#sns_topic_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_bucket_name ConfigDeliveryChannel#s3_bucket_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#id ConfigDeliveryChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#name ConfigDeliveryChannel#name}.

---

##### `s3_key_prefix`<sup>Optional</sup> <a name="s3_key_prefix" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KeyPrefix"></a>

```python
s3_key_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_key_prefix ConfigDeliveryChannel#s3_key_prefix}.

---

##### `s3_kms_key_arn`<sup>Optional</sup> <a name="s3_kms_key_arn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KmsKeyArn"></a>

```python
s3_kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#s3_kms_key_arn ConfigDeliveryChannel#s3_kms_key_arn}.

---

##### `snapshot_delivery_properties`<sup>Optional</sup> <a name="snapshot_delivery_properties" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.snapshotDeliveryProperties"></a>

```python
snapshot_delivery_properties: ConfigDeliveryChannelSnapshotDeliveryProperties
```

- *Type:* <a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties">ConfigDeliveryChannelSnapshotDeliveryProperties</a>

snapshot_delivery_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#snapshot_delivery_properties ConfigDeliveryChannel#snapshot_delivery_properties}

---

##### `sns_topic_arn`<sup>Optional</sup> <a name="sns_topic_arn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelConfig.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#sns_topic_arn ConfigDeliveryChannel#sns_topic_arn}.

---

### ConfigDeliveryChannelSnapshotDeliveryProperties <a name="ConfigDeliveryChannelSnapshotDeliveryProperties" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_delivery_channel

configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties(
  delivery_frequency: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties.property.deliveryFrequency">delivery_frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#delivery_frequency ConfigDeliveryChannel#delivery_frequency}. |

---

##### `delivery_frequency`<sup>Optional</sup> <a name="delivery_frequency" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties.property.deliveryFrequency"></a>

```python
delivery_frequency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel#delivery_frequency ConfigDeliveryChannel#delivery_frequency}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference <a name="ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_delivery_channel

configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.resetDeliveryFrequency">reset_delivery_frequency</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delivery_frequency` <a name="reset_delivery_frequency" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.resetDeliveryFrequency"></a>

```python
def reset_delivery_frequency() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequencyInput">delivery_frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequency">delivery_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties">ConfigDeliveryChannelSnapshotDeliveryProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delivery_frequency_input`<sup>Optional</sup> <a name="delivery_frequency_input" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequencyInput"></a>

```python
delivery_frequency_input: str
```

- *Type:* str

---

##### `delivery_frequency`<sup>Required</sup> <a name="delivery_frequency" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequency"></a>

```python
delivery_frequency: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: ConfigDeliveryChannelSnapshotDeliveryProperties
```

- *Type:* <a href="#@cdktf/provider-aws.configDeliveryChannel.ConfigDeliveryChannelSnapshotDeliveryProperties">ConfigDeliveryChannelSnapshotDeliveryProperties</a>

---



