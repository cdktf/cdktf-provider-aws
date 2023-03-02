# `s3BucketNotification` Submodule <a name="`s3BucketNotification` Submodule" id="@cdktf/provider-aws.s3BucketNotification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketNotification <a name="S3BucketNotification" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification aws_s3_bucket_notification}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_notification

s3BucketNotification.S3BucketNotification(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  eventbridge: typing.Union[bool, IResolvable] = None,
  id: str = None,
  lambda_function: typing.Union[IResolvable, typing.List[S3BucketNotificationLambdaFunction]] = None,
  queue: typing.Union[IResolvable, typing.List[S3BucketNotificationQueue]] = None,
  topic: typing.Union[IResolvable, typing.List[S3BucketNotificationTopic]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#bucket S3BucketNotification#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.eventbridge">eventbridge</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#eventbridge S3BucketNotification#eventbridge}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.lambdaFunction">lambda_function</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction">S3BucketNotificationLambdaFunction</a>]]</code> | lambda_function block. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.queue">queue</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue">S3BucketNotificationQueue</a>]]</code> | queue block. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.topic">topic</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic">S3BucketNotificationTopic</a>]]</code> | topic block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#bucket S3BucketNotification#bucket}.

---

##### `eventbridge`<sup>Optional</sup> <a name="eventbridge" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.eventbridge"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#eventbridge S3BucketNotification#eventbridge}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lambda_function`<sup>Optional</sup> <a name="lambda_function" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.lambdaFunction"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction">S3BucketNotificationLambdaFunction</a>]]

lambda_function block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#lambda_function S3BucketNotification#lambda_function}

---

##### `queue`<sup>Optional</sup> <a name="queue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.queue"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue">S3BucketNotificationQueue</a>]]

queue block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#queue S3BucketNotification#queue}

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.topic"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic">S3BucketNotificationTopic</a>]]

topic block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#topic S3BucketNotification#topic}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putLambdaFunction">put_lambda_function</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putQueue">put_queue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putTopic">put_topic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetEventbridge">reset_eventbridge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetLambdaFunction">reset_lambda_function</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetQueue">reset_queue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetTopic">reset_topic</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_lambda_function` <a name="put_lambda_function" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putLambdaFunction"></a>

```python
def put_lambda_function(
  value: typing.Union[IResolvable, typing.List[S3BucketNotificationLambdaFunction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putLambdaFunction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction">S3BucketNotificationLambdaFunction</a>]]

---

##### `put_queue` <a name="put_queue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putQueue"></a>

```python
def put_queue(
  value: typing.Union[IResolvable, typing.List[S3BucketNotificationQueue]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putQueue.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue">S3BucketNotificationQueue</a>]]

---

##### `put_topic` <a name="put_topic" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putTopic"></a>

```python
def put_topic(
  value: typing.Union[IResolvable, typing.List[S3BucketNotificationTopic]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putTopic.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic">S3BucketNotificationTopic</a>]]

---

##### `reset_eventbridge` <a name="reset_eventbridge" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetEventbridge"></a>

```python
def reset_eventbridge() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_lambda_function` <a name="reset_lambda_function" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetLambdaFunction"></a>

```python
def reset_lambda_function() -> None
```

##### `reset_queue` <a name="reset_queue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetQueue"></a>

```python
def reset_queue() -> None
```

##### `reset_topic` <a name="reset_topic" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetTopic"></a>

```python
def reset_topic() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_notification

s3BucketNotification.S3BucketNotification.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_notification

s3BucketNotification.S3BucketNotification.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_notification

s3BucketNotification.S3BucketNotification.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.lambdaFunction">lambda_function</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList">S3BucketNotificationLambdaFunctionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.queue">queue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList">S3BucketNotificationQueueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.topic">topic</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList">S3BucketNotificationTopicList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.eventbridgeInput">eventbridge_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.lambdaFunctionInput">lambda_function_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction">S3BucketNotificationLambdaFunction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.queueInput">queue_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue">S3BucketNotificationQueue</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.topicInput">topic_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic">S3BucketNotificationTopic</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.eventbridge">eventbridge</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lambda_function`<sup>Required</sup> <a name="lambda_function" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.lambdaFunction"></a>

```python
lambda_function: S3BucketNotificationLambdaFunctionList
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList">S3BucketNotificationLambdaFunctionList</a>

---

##### `queue`<sup>Required</sup> <a name="queue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.queue"></a>

```python
queue: S3BucketNotificationQueueList
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList">S3BucketNotificationQueueList</a>

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.topic"></a>

```python
topic: S3BucketNotificationTopicList
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList">S3BucketNotificationTopicList</a>

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `eventbridge_input`<sup>Optional</sup> <a name="eventbridge_input" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.eventbridgeInput"></a>

```python
eventbridge_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lambda_function_input`<sup>Optional</sup> <a name="lambda_function_input" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.lambdaFunctionInput"></a>

```python
lambda_function_input: typing.Union[IResolvable, typing.List[S3BucketNotificationLambdaFunction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction">S3BucketNotificationLambdaFunction</a>]]

---

##### `queue_input`<sup>Optional</sup> <a name="queue_input" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.queueInput"></a>

```python
queue_input: typing.Union[IResolvable, typing.List[S3BucketNotificationQueue]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue">S3BucketNotificationQueue</a>]]

---

##### `topic_input`<sup>Optional</sup> <a name="topic_input" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.topicInput"></a>

```python
topic_input: typing.Union[IResolvable, typing.List[S3BucketNotificationTopic]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic">S3BucketNotificationTopic</a>]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `eventbridge`<sup>Required</sup> <a name="eventbridge" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.eventbridge"></a>

```python
eventbridge: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketNotificationConfig <a name="S3BucketNotificationConfig" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_notification

s3BucketNotification.S3BucketNotificationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  eventbridge: typing.Union[bool, IResolvable] = None,
  id: str = None,
  lambda_function: typing.Union[IResolvable, typing.List[S3BucketNotificationLambdaFunction]] = None,
  queue: typing.Union[IResolvable, typing.List[S3BucketNotificationQueue]] = None,
  topic: typing.Union[IResolvable, typing.List[S3BucketNotificationTopic]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#bucket S3BucketNotification#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.eventbridge">eventbridge</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#eventbridge S3BucketNotification#eventbridge}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.lambdaFunction">lambda_function</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction">S3BucketNotificationLambdaFunction</a>]]</code> | lambda_function block. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.queue">queue</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue">S3BucketNotificationQueue</a>]]</code> | queue block. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.topic">topic</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic">S3BucketNotificationTopic</a>]]</code> | topic block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#bucket S3BucketNotification#bucket}.

---

##### `eventbridge`<sup>Optional</sup> <a name="eventbridge" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.eventbridge"></a>

```python
eventbridge: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#eventbridge S3BucketNotification#eventbridge}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lambda_function`<sup>Optional</sup> <a name="lambda_function" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.lambdaFunction"></a>

```python
lambda_function: typing.Union[IResolvable, typing.List[S3BucketNotificationLambdaFunction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction">S3BucketNotificationLambdaFunction</a>]]

lambda_function block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#lambda_function S3BucketNotification#lambda_function}

---

##### `queue`<sup>Optional</sup> <a name="queue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.queue"></a>

```python
queue: typing.Union[IResolvable, typing.List[S3BucketNotificationQueue]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue">S3BucketNotificationQueue</a>]]

queue block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#queue S3BucketNotification#queue}

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.topic"></a>

```python
topic: typing.Union[IResolvable, typing.List[S3BucketNotificationTopic]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic">S3BucketNotificationTopic</a>]]

topic block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#topic S3BucketNotification#topic}

---

### S3BucketNotificationLambdaFunction <a name="S3BucketNotificationLambdaFunction" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_notification

s3BucketNotification.S3BucketNotificationLambdaFunction(
  events: typing.List[str],
  filter_prefix: str = None,
  filter_suffix: str = None,
  id: str = None,
  lambda_function_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.events">events</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#events S3BucketNotification#events}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.filterPrefix">filter_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_prefix S3BucketNotification#filter_prefix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.filterSuffix">filter_suffix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_suffix S3BucketNotification#filter_suffix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.lambdaFunctionArn">lambda_function_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#lambda_function_arn S3BucketNotification#lambda_function_arn}. |

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#events S3BucketNotification#events}.

---

##### `filter_prefix`<sup>Optional</sup> <a name="filter_prefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.filterPrefix"></a>

```python
filter_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_prefix S3BucketNotification#filter_prefix}.

---

##### `filter_suffix`<sup>Optional</sup> <a name="filter_suffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.filterSuffix"></a>

```python
filter_suffix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_suffix S3BucketNotification#filter_suffix}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lambda_function_arn`<sup>Optional</sup> <a name="lambda_function_arn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.lambdaFunctionArn"></a>

```python
lambda_function_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#lambda_function_arn S3BucketNotification#lambda_function_arn}.

---

### S3BucketNotificationQueue <a name="S3BucketNotificationQueue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_notification

s3BucketNotification.S3BucketNotificationQueue(
  events: typing.List[str],
  queue_arn: str,
  filter_prefix: str = None,
  filter_suffix: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.events">events</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#events S3BucketNotification#events}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.queueArn">queue_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#queue_arn S3BucketNotification#queue_arn}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.filterPrefix">filter_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_prefix S3BucketNotification#filter_prefix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.filterSuffix">filter_suffix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_suffix S3BucketNotification#filter_suffix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}. |

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#events S3BucketNotification#events}.

---

##### `queue_arn`<sup>Required</sup> <a name="queue_arn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.queueArn"></a>

```python
queue_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#queue_arn S3BucketNotification#queue_arn}.

---

##### `filter_prefix`<sup>Optional</sup> <a name="filter_prefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.filterPrefix"></a>

```python
filter_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_prefix S3BucketNotification#filter_prefix}.

---

##### `filter_suffix`<sup>Optional</sup> <a name="filter_suffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.filterSuffix"></a>

```python
filter_suffix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_suffix S3BucketNotification#filter_suffix}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### S3BucketNotificationTopic <a name="S3BucketNotificationTopic" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_notification

s3BucketNotification.S3BucketNotificationTopic(
  events: typing.List[str],
  topic_arn: str,
  filter_prefix: str = None,
  filter_suffix: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.events">events</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#events S3BucketNotification#events}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.topicArn">topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#topic_arn S3BucketNotification#topic_arn}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.filterPrefix">filter_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_prefix S3BucketNotification#filter_prefix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.filterSuffix">filter_suffix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_suffix S3BucketNotification#filter_suffix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}. |

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#events S3BucketNotification#events}.

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#topic_arn S3BucketNotification#topic_arn}.

---

##### `filter_prefix`<sup>Optional</sup> <a name="filter_prefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.filterPrefix"></a>

```python
filter_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_prefix S3BucketNotification#filter_prefix}.

---

##### `filter_suffix`<sup>Optional</sup> <a name="filter_suffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.filterSuffix"></a>

```python
filter_suffix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_suffix S3BucketNotification#filter_suffix}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketNotificationLambdaFunctionList <a name="S3BucketNotificationLambdaFunctionList" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_notification

s3BucketNotification.S3BucketNotificationLambdaFunctionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3BucketNotificationLambdaFunctionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction">S3BucketNotificationLambdaFunction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[S3BucketNotificationLambdaFunction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction">S3BucketNotificationLambdaFunction</a>]]

---


### S3BucketNotificationLambdaFunctionOutputReference <a name="S3BucketNotificationLambdaFunctionOutputReference" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_notification

s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resetFilterPrefix">reset_filter_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resetFilterSuffix">reset_filter_suffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resetLambdaFunctionArn">reset_lambda_function_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_filter_prefix` <a name="reset_filter_prefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resetFilterPrefix"></a>

```python
def reset_filter_prefix() -> None
```

##### `reset_filter_suffix` <a name="reset_filter_suffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resetFilterSuffix"></a>

```python
def reset_filter_suffix() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_lambda_function_arn` <a name="reset_lambda_function_arn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resetLambdaFunctionArn"></a>

```python
def reset_lambda_function_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.eventsInput">events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.filterPrefixInput">filter_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.filterSuffixInput">filter_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.lambdaFunctionArnInput">lambda_function_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.events">events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.filterPrefix">filter_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.filterSuffix">filter_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.lambdaFunctionArn">lambda_function_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction">S3BucketNotificationLambdaFunction</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `events_input`<sup>Optional</sup> <a name="events_input" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.eventsInput"></a>

```python
events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_prefix_input`<sup>Optional</sup> <a name="filter_prefix_input" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.filterPrefixInput"></a>

```python
filter_prefix_input: str
```

- *Type:* str

---

##### `filter_suffix_input`<sup>Optional</sup> <a name="filter_suffix_input" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.filterSuffixInput"></a>

```python
filter_suffix_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lambda_function_arn_input`<sup>Optional</sup> <a name="lambda_function_arn_input" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.lambdaFunctionArnInput"></a>

```python
lambda_function_arn_input: str
```

- *Type:* str

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_prefix`<sup>Required</sup> <a name="filter_prefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.filterPrefix"></a>

```python
filter_prefix: str
```

- *Type:* str

---

##### `filter_suffix`<sup>Required</sup> <a name="filter_suffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.filterSuffix"></a>

```python
filter_suffix: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lambda_function_arn`<sup>Required</sup> <a name="lambda_function_arn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.lambdaFunctionArn"></a>

```python
lambda_function_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[S3BucketNotificationLambdaFunction, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction">S3BucketNotificationLambdaFunction</a>, cdktf.IResolvable]

---


### S3BucketNotificationQueueList <a name="S3BucketNotificationQueueList" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_notification

s3BucketNotification.S3BucketNotificationQueueList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3BucketNotificationQueueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue">S3BucketNotificationQueue</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[S3BucketNotificationQueue]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue">S3BucketNotificationQueue</a>]]

---


### S3BucketNotificationQueueOutputReference <a name="S3BucketNotificationQueueOutputReference" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_notification

s3BucketNotification.S3BucketNotificationQueueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resetFilterPrefix">reset_filter_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resetFilterSuffix">reset_filter_suffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resetId">reset_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_filter_prefix` <a name="reset_filter_prefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resetFilterPrefix"></a>

```python
def reset_filter_prefix() -> None
```

##### `reset_filter_suffix` <a name="reset_filter_suffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resetFilterSuffix"></a>

```python
def reset_filter_suffix() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resetId"></a>

```python
def reset_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.eventsInput">events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.filterPrefixInput">filter_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.filterSuffixInput">filter_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.queueArnInput">queue_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.events">events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.filterPrefix">filter_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.filterSuffix">filter_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.queueArn">queue_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue">S3BucketNotificationQueue</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `events_input`<sup>Optional</sup> <a name="events_input" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.eventsInput"></a>

```python
events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_prefix_input`<sup>Optional</sup> <a name="filter_prefix_input" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.filterPrefixInput"></a>

```python
filter_prefix_input: str
```

- *Type:* str

---

##### `filter_suffix_input`<sup>Optional</sup> <a name="filter_suffix_input" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.filterSuffixInput"></a>

```python
filter_suffix_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `queue_arn_input`<sup>Optional</sup> <a name="queue_arn_input" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.queueArnInput"></a>

```python
queue_arn_input: str
```

- *Type:* str

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_prefix`<sup>Required</sup> <a name="filter_prefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.filterPrefix"></a>

```python
filter_prefix: str
```

- *Type:* str

---

##### `filter_suffix`<sup>Required</sup> <a name="filter_suffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.filterSuffix"></a>

```python
filter_suffix: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `queue_arn`<sup>Required</sup> <a name="queue_arn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.queueArn"></a>

```python
queue_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[S3BucketNotificationQueue, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue">S3BucketNotificationQueue</a>, cdktf.IResolvable]

---


### S3BucketNotificationTopicList <a name="S3BucketNotificationTopicList" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_notification

s3BucketNotification.S3BucketNotificationTopicList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3BucketNotificationTopicOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic">S3BucketNotificationTopic</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[S3BucketNotificationTopic]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic">S3BucketNotificationTopic</a>]]

---


### S3BucketNotificationTopicOutputReference <a name="S3BucketNotificationTopicOutputReference" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket_notification

s3BucketNotification.S3BucketNotificationTopicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resetFilterPrefix">reset_filter_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resetFilterSuffix">reset_filter_suffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resetId">reset_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_filter_prefix` <a name="reset_filter_prefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resetFilterPrefix"></a>

```python
def reset_filter_prefix() -> None
```

##### `reset_filter_suffix` <a name="reset_filter_suffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resetFilterSuffix"></a>

```python
def reset_filter_suffix() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resetId"></a>

```python
def reset_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.eventsInput">events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.filterPrefixInput">filter_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.filterSuffixInput">filter_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.topicArnInput">topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.events">events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.filterPrefix">filter_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.filterSuffix">filter_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.topicArn">topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic">S3BucketNotificationTopic</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `events_input`<sup>Optional</sup> <a name="events_input" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.eventsInput"></a>

```python
events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_prefix_input`<sup>Optional</sup> <a name="filter_prefix_input" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.filterPrefixInput"></a>

```python
filter_prefix_input: str
```

- *Type:* str

---

##### `filter_suffix_input`<sup>Optional</sup> <a name="filter_suffix_input" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.filterSuffixInput"></a>

```python
filter_suffix_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `topic_arn_input`<sup>Optional</sup> <a name="topic_arn_input" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.topicArnInput"></a>

```python
topic_arn_input: str
```

- *Type:* str

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_prefix`<sup>Required</sup> <a name="filter_prefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.filterPrefix"></a>

```python
filter_prefix: str
```

- *Type:* str

---

##### `filter_suffix`<sup>Required</sup> <a name="filter_suffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.filterSuffix"></a>

```python
filter_suffix: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[S3BucketNotificationTopic, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic">S3BucketNotificationTopic</a>, cdktf.IResolvable]

---



