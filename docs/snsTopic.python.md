# `snsTopic` Submodule <a name="`snsTopic` Submodule" id="@cdktf/provider-aws.snsTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnsTopic <a name="SnsTopic" id="@cdktf/provider-aws.snsTopic.SnsTopic"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_topic aws_sns_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sns_topic

snsTopic.SnsTopic(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_failure_feedback_role_arn: str = None,
  application_success_feedback_role_arn: str = None,
  application_success_feedback_sample_rate: typing.Union[int, float] = None,
  content_based_deduplication: typing.Union[bool, IResolvable] = None,
  delivery_policy: str = None,
  display_name: str = None,
  fifo_topic: typing.Union[bool, IResolvable] = None,
  firehose_failure_feedback_role_arn: str = None,
  firehose_success_feedback_role_arn: str = None,
  firehose_success_feedback_sample_rate: typing.Union[int, float] = None,
  http_failure_feedback_role_arn: str = None,
  http_success_feedback_role_arn: str = None,
  http_success_feedback_sample_rate: typing.Union[int, float] = None,
  id: str = None,
  kms_master_key_id: str = None,
  lambda_failure_feedback_role_arn: str = None,
  lambda_success_feedback_role_arn: str = None,
  lambda_success_feedback_sample_rate: typing.Union[int, float] = None,
  name: str = None,
  name_prefix: str = None,
  policy: str = None,
  signature_version: typing.Union[int, float] = None,
  sqs_failure_feedback_role_arn: str = None,
  sqs_success_feedback_role_arn: str = None,
  sqs_success_feedback_sample_rate: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  tracing_config: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.applicationFailureFeedbackRoleArn">application_failure_feedback_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_failure_feedback_role_arn SnsTopic#application_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.applicationSuccessFeedbackRoleArn">application_success_feedback_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_success_feedback_role_arn SnsTopic#application_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.applicationSuccessFeedbackSampleRate">application_success_feedback_sample_rate</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_success_feedback_sample_rate SnsTopic#application_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.contentBasedDeduplication">content_based_deduplication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#content_based_deduplication SnsTopic#content_based_deduplication}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.deliveryPolicy">delivery_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#delivery_policy SnsTopic#delivery_policy}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#display_name SnsTopic#display_name}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.fifoTopic">fifo_topic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#fifo_topic SnsTopic#fifo_topic}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.firehoseFailureFeedbackRoleArn">firehose_failure_feedback_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_failure_feedback_role_arn SnsTopic#firehose_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.firehoseSuccessFeedbackRoleArn">firehose_success_feedback_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_success_feedback_role_arn SnsTopic#firehose_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.firehoseSuccessFeedbackSampleRate">firehose_success_feedback_sample_rate</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_success_feedback_sample_rate SnsTopic#firehose_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.httpFailureFeedbackRoleArn">http_failure_feedback_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_failure_feedback_role_arn SnsTopic#http_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.httpSuccessFeedbackRoleArn">http_success_feedback_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_success_feedback_role_arn SnsTopic#http_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.httpSuccessFeedbackSampleRate">http_success_feedback_sample_rate</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_success_feedback_sample_rate SnsTopic#http_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#id SnsTopic#id}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.kmsMasterKeyId">kms_master_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#kms_master_key_id SnsTopic#kms_master_key_id}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.lambdaFailureFeedbackRoleArn">lambda_failure_feedback_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_failure_feedback_role_arn SnsTopic#lambda_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.lambdaSuccessFeedbackRoleArn">lambda_success_feedback_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_success_feedback_role_arn SnsTopic#lambda_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.lambdaSuccessFeedbackSampleRate">lambda_success_feedback_sample_rate</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_success_feedback_sample_rate SnsTopic#lambda_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#name SnsTopic#name}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#name_prefix SnsTopic#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#policy SnsTopic#policy}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.signatureVersion">signature_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#signature_version SnsTopic#signature_version}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.sqsFailureFeedbackRoleArn">sqs_failure_feedback_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_failure_feedback_role_arn SnsTopic#sqs_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.sqsSuccessFeedbackRoleArn">sqs_success_feedback_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_success_feedback_role_arn SnsTopic#sqs_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.sqsSuccessFeedbackSampleRate">sqs_success_feedback_sample_rate</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_success_feedback_sample_rate SnsTopic#sqs_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tags SnsTopic#tags}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tags_all SnsTopic#tags_all}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.tracingConfig">tracing_config</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tracing_config SnsTopic#tracing_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_failure_feedback_role_arn`<sup>Optional</sup> <a name="application_failure_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.applicationFailureFeedbackRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_failure_feedback_role_arn SnsTopic#application_failure_feedback_role_arn}.

---

##### `application_success_feedback_role_arn`<sup>Optional</sup> <a name="application_success_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.applicationSuccessFeedbackRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_success_feedback_role_arn SnsTopic#application_success_feedback_role_arn}.

---

##### `application_success_feedback_sample_rate`<sup>Optional</sup> <a name="application_success_feedback_sample_rate" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.applicationSuccessFeedbackSampleRate"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_success_feedback_sample_rate SnsTopic#application_success_feedback_sample_rate}.

---

##### `content_based_deduplication`<sup>Optional</sup> <a name="content_based_deduplication" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.contentBasedDeduplication"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#content_based_deduplication SnsTopic#content_based_deduplication}.

---

##### `delivery_policy`<sup>Optional</sup> <a name="delivery_policy" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.deliveryPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#delivery_policy SnsTopic#delivery_policy}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#display_name SnsTopic#display_name}.

---

##### `fifo_topic`<sup>Optional</sup> <a name="fifo_topic" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.fifoTopic"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#fifo_topic SnsTopic#fifo_topic}.

---

##### `firehose_failure_feedback_role_arn`<sup>Optional</sup> <a name="firehose_failure_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.firehoseFailureFeedbackRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_failure_feedback_role_arn SnsTopic#firehose_failure_feedback_role_arn}.

---

##### `firehose_success_feedback_role_arn`<sup>Optional</sup> <a name="firehose_success_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.firehoseSuccessFeedbackRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_success_feedback_role_arn SnsTopic#firehose_success_feedback_role_arn}.

---

##### `firehose_success_feedback_sample_rate`<sup>Optional</sup> <a name="firehose_success_feedback_sample_rate" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.firehoseSuccessFeedbackSampleRate"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_success_feedback_sample_rate SnsTopic#firehose_success_feedback_sample_rate}.

---

##### `http_failure_feedback_role_arn`<sup>Optional</sup> <a name="http_failure_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.httpFailureFeedbackRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_failure_feedback_role_arn SnsTopic#http_failure_feedback_role_arn}.

---

##### `http_success_feedback_role_arn`<sup>Optional</sup> <a name="http_success_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.httpSuccessFeedbackRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_success_feedback_role_arn SnsTopic#http_success_feedback_role_arn}.

---

##### `http_success_feedback_sample_rate`<sup>Optional</sup> <a name="http_success_feedback_sample_rate" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.httpSuccessFeedbackSampleRate"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_success_feedback_sample_rate SnsTopic#http_success_feedback_sample_rate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#id SnsTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_master_key_id`<sup>Optional</sup> <a name="kms_master_key_id" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.kmsMasterKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#kms_master_key_id SnsTopic#kms_master_key_id}.

---

##### `lambda_failure_feedback_role_arn`<sup>Optional</sup> <a name="lambda_failure_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.lambdaFailureFeedbackRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_failure_feedback_role_arn SnsTopic#lambda_failure_feedback_role_arn}.

---

##### `lambda_success_feedback_role_arn`<sup>Optional</sup> <a name="lambda_success_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.lambdaSuccessFeedbackRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_success_feedback_role_arn SnsTopic#lambda_success_feedback_role_arn}.

---

##### `lambda_success_feedback_sample_rate`<sup>Optional</sup> <a name="lambda_success_feedback_sample_rate" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.lambdaSuccessFeedbackSampleRate"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_success_feedback_sample_rate SnsTopic#lambda_success_feedback_sample_rate}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#name SnsTopic#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.namePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#name_prefix SnsTopic#name_prefix}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.policy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#policy SnsTopic#policy}.

---

##### `signature_version`<sup>Optional</sup> <a name="signature_version" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.signatureVersion"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#signature_version SnsTopic#signature_version}.

---

##### `sqs_failure_feedback_role_arn`<sup>Optional</sup> <a name="sqs_failure_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.sqsFailureFeedbackRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_failure_feedback_role_arn SnsTopic#sqs_failure_feedback_role_arn}.

---

##### `sqs_success_feedback_role_arn`<sup>Optional</sup> <a name="sqs_success_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.sqsSuccessFeedbackRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_success_feedback_role_arn SnsTopic#sqs_success_feedback_role_arn}.

---

##### `sqs_success_feedback_sample_rate`<sup>Optional</sup> <a name="sqs_success_feedback_sample_rate" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.sqsSuccessFeedbackSampleRate"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_success_feedback_sample_rate SnsTopic#sqs_success_feedback_sample_rate}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tags SnsTopic#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tags_all SnsTopic#tags_all}.

---

##### `tracing_config`<sup>Optional</sup> <a name="tracing_config" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.tracingConfig"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tracing_config SnsTopic#tracing_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetApplicationFailureFeedbackRoleArn">reset_application_failure_feedback_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetApplicationSuccessFeedbackRoleArn">reset_application_success_feedback_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetApplicationSuccessFeedbackSampleRate">reset_application_success_feedback_sample_rate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetContentBasedDeduplication">reset_content_based_deduplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetDeliveryPolicy">reset_delivery_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetFifoTopic">reset_fifo_topic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetFirehoseFailureFeedbackRoleArn">reset_firehose_failure_feedback_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetFirehoseSuccessFeedbackRoleArn">reset_firehose_success_feedback_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetFirehoseSuccessFeedbackSampleRate">reset_firehose_success_feedback_sample_rate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetHttpFailureFeedbackRoleArn">reset_http_failure_feedback_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetHttpSuccessFeedbackRoleArn">reset_http_success_feedback_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetHttpSuccessFeedbackSampleRate">reset_http_success_feedback_sample_rate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetKmsMasterKeyId">reset_kms_master_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetLambdaFailureFeedbackRoleArn">reset_lambda_failure_feedback_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetLambdaSuccessFeedbackRoleArn">reset_lambda_success_feedback_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetLambdaSuccessFeedbackSampleRate">reset_lambda_success_feedback_sample_rate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetNamePrefix">reset_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetPolicy">reset_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetSignatureVersion">reset_signature_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetSqsFailureFeedbackRoleArn">reset_sqs_failure_feedback_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetSqsSuccessFeedbackRoleArn">reset_sqs_success_feedback_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetSqsSuccessFeedbackSampleRate">reset_sqs_success_feedback_sample_rate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetTracingConfig">reset_tracing_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.snsTopic.SnsTopic.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.snsTopic.SnsTopic.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.snsTopic.SnsTopic.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.snsTopic.SnsTopic.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.snsTopic.SnsTopic.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.snsTopic.SnsTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.snsTopic.SnsTopic.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.snsTopic.SnsTopic.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_application_failure_feedback_role_arn` <a name="reset_application_failure_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetApplicationFailureFeedbackRoleArn"></a>

```python
def reset_application_failure_feedback_role_arn() -> None
```

##### `reset_application_success_feedback_role_arn` <a name="reset_application_success_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetApplicationSuccessFeedbackRoleArn"></a>

```python
def reset_application_success_feedback_role_arn() -> None
```

##### `reset_application_success_feedback_sample_rate` <a name="reset_application_success_feedback_sample_rate" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetApplicationSuccessFeedbackSampleRate"></a>

```python
def reset_application_success_feedback_sample_rate() -> None
```

##### `reset_content_based_deduplication` <a name="reset_content_based_deduplication" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetContentBasedDeduplication"></a>

```python
def reset_content_based_deduplication() -> None
```

##### `reset_delivery_policy` <a name="reset_delivery_policy" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetDeliveryPolicy"></a>

```python
def reset_delivery_policy() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_fifo_topic` <a name="reset_fifo_topic" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetFifoTopic"></a>

```python
def reset_fifo_topic() -> None
```

##### `reset_firehose_failure_feedback_role_arn` <a name="reset_firehose_failure_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetFirehoseFailureFeedbackRoleArn"></a>

```python
def reset_firehose_failure_feedback_role_arn() -> None
```

##### `reset_firehose_success_feedback_role_arn` <a name="reset_firehose_success_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetFirehoseSuccessFeedbackRoleArn"></a>

```python
def reset_firehose_success_feedback_role_arn() -> None
```

##### `reset_firehose_success_feedback_sample_rate` <a name="reset_firehose_success_feedback_sample_rate" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetFirehoseSuccessFeedbackSampleRate"></a>

```python
def reset_firehose_success_feedback_sample_rate() -> None
```

##### `reset_http_failure_feedback_role_arn` <a name="reset_http_failure_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetHttpFailureFeedbackRoleArn"></a>

```python
def reset_http_failure_feedback_role_arn() -> None
```

##### `reset_http_success_feedback_role_arn` <a name="reset_http_success_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetHttpSuccessFeedbackRoleArn"></a>

```python
def reset_http_success_feedback_role_arn() -> None
```

##### `reset_http_success_feedback_sample_rate` <a name="reset_http_success_feedback_sample_rate" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetHttpSuccessFeedbackSampleRate"></a>

```python
def reset_http_success_feedback_sample_rate() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_master_key_id` <a name="reset_kms_master_key_id" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetKmsMasterKeyId"></a>

```python
def reset_kms_master_key_id() -> None
```

##### `reset_lambda_failure_feedback_role_arn` <a name="reset_lambda_failure_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetLambdaFailureFeedbackRoleArn"></a>

```python
def reset_lambda_failure_feedback_role_arn() -> None
```

##### `reset_lambda_success_feedback_role_arn` <a name="reset_lambda_success_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetLambdaSuccessFeedbackRoleArn"></a>

```python
def reset_lambda_success_feedback_role_arn() -> None
```

##### `reset_lambda_success_feedback_sample_rate` <a name="reset_lambda_success_feedback_sample_rate" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetLambdaSuccessFeedbackSampleRate"></a>

```python
def reset_lambda_success_feedback_sample_rate() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_prefix` <a name="reset_name_prefix" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetNamePrefix"></a>

```python
def reset_name_prefix() -> None
```

##### `reset_policy` <a name="reset_policy" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetPolicy"></a>

```python
def reset_policy() -> None
```

##### `reset_signature_version` <a name="reset_signature_version" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetSignatureVersion"></a>

```python
def reset_signature_version() -> None
```

##### `reset_sqs_failure_feedback_role_arn` <a name="reset_sqs_failure_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetSqsFailureFeedbackRoleArn"></a>

```python
def reset_sqs_failure_feedback_role_arn() -> None
```

##### `reset_sqs_success_feedback_role_arn` <a name="reset_sqs_success_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetSqsSuccessFeedbackRoleArn"></a>

```python
def reset_sqs_success_feedback_role_arn() -> None
```

##### `reset_sqs_success_feedback_sample_rate` <a name="reset_sqs_success_feedback_sample_rate" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetSqsSuccessFeedbackSampleRate"></a>

```python
def reset_sqs_success_feedback_sample_rate() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_tracing_config` <a name="reset_tracing_config" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetTracingConfig"></a>

```python
def reset_tracing_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.snsTopic.SnsTopic.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import sns_topic

snsTopic.SnsTopic.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsTopic.SnsTopic.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.snsTopic.SnsTopic.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import sns_topic

snsTopic.SnsTopic.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsTopic.SnsTopic.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.snsTopic.SnsTopic.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import sns_topic

snsTopic.SnsTopic.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsTopic.SnsTopic.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationFailureFeedbackRoleArnInput">application_failure_feedback_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackRoleArnInput">application_success_feedback_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackSampleRateInput">application_success_feedback_sample_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.contentBasedDeduplicationInput">content_based_deduplication_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.deliveryPolicyInput">delivery_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.fifoTopicInput">fifo_topic_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseFailureFeedbackRoleArnInput">firehose_failure_feedback_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackRoleArnInput">firehose_success_feedback_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackSampleRateInput">firehose_success_feedback_sample_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.httpFailureFeedbackRoleArnInput">http_failure_feedback_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackRoleArnInput">http_success_feedback_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackSampleRateInput">http_success_feedback_sample_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.kmsMasterKeyIdInput">kms_master_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaFailureFeedbackRoleArnInput">lambda_failure_feedback_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackRoleArnInput">lambda_success_feedback_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackSampleRateInput">lambda_success_feedback_sample_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.signatureVersionInput">signature_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsFailureFeedbackRoleArnInput">sqs_failure_feedback_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackRoleArnInput">sqs_success_feedback_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackSampleRateInput">sqs_success_feedback_sample_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tracingConfigInput">tracing_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationFailureFeedbackRoleArn">application_failure_feedback_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackRoleArn">application_success_feedback_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackSampleRate">application_success_feedback_sample_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.contentBasedDeduplication">content_based_deduplication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.deliveryPolicy">delivery_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.fifoTopic">fifo_topic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseFailureFeedbackRoleArn">firehose_failure_feedback_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackRoleArn">firehose_success_feedback_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackSampleRate">firehose_success_feedback_sample_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.httpFailureFeedbackRoleArn">http_failure_feedback_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackRoleArn">http_success_feedback_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackSampleRate">http_success_feedback_sample_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.kmsMasterKeyId">kms_master_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaFailureFeedbackRoleArn">lambda_failure_feedback_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackRoleArn">lambda_success_feedback_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackSampleRate">lambda_success_feedback_sample_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.signatureVersion">signature_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsFailureFeedbackRoleArn">sqs_failure_feedback_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackRoleArn">sqs_success_feedback_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackSampleRate">sqs_success_feedback_sample_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tracingConfig">tracing_config</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `application_failure_feedback_role_arn_input`<sup>Optional</sup> <a name="application_failure_feedback_role_arn_input" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationFailureFeedbackRoleArnInput"></a>

```python
application_failure_feedback_role_arn_input: str
```

- *Type:* str

---

##### `application_success_feedback_role_arn_input`<sup>Optional</sup> <a name="application_success_feedback_role_arn_input" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackRoleArnInput"></a>

```python
application_success_feedback_role_arn_input: str
```

- *Type:* str

---

##### `application_success_feedback_sample_rate_input`<sup>Optional</sup> <a name="application_success_feedback_sample_rate_input" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackSampleRateInput"></a>

```python
application_success_feedback_sample_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `content_based_deduplication_input`<sup>Optional</sup> <a name="content_based_deduplication_input" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.contentBasedDeduplicationInput"></a>

```python
content_based_deduplication_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delivery_policy_input`<sup>Optional</sup> <a name="delivery_policy_input" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.deliveryPolicyInput"></a>

```python
delivery_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `fifo_topic_input`<sup>Optional</sup> <a name="fifo_topic_input" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.fifoTopicInput"></a>

```python
fifo_topic_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `firehose_failure_feedback_role_arn_input`<sup>Optional</sup> <a name="firehose_failure_feedback_role_arn_input" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseFailureFeedbackRoleArnInput"></a>

```python
firehose_failure_feedback_role_arn_input: str
```

- *Type:* str

---

##### `firehose_success_feedback_role_arn_input`<sup>Optional</sup> <a name="firehose_success_feedback_role_arn_input" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackRoleArnInput"></a>

```python
firehose_success_feedback_role_arn_input: str
```

- *Type:* str

---

##### `firehose_success_feedback_sample_rate_input`<sup>Optional</sup> <a name="firehose_success_feedback_sample_rate_input" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackSampleRateInput"></a>

```python
firehose_success_feedback_sample_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_failure_feedback_role_arn_input`<sup>Optional</sup> <a name="http_failure_feedback_role_arn_input" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.httpFailureFeedbackRoleArnInput"></a>

```python
http_failure_feedback_role_arn_input: str
```

- *Type:* str

---

##### `http_success_feedback_role_arn_input`<sup>Optional</sup> <a name="http_success_feedback_role_arn_input" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackRoleArnInput"></a>

```python
http_success_feedback_role_arn_input: str
```

- *Type:* str

---

##### `http_success_feedback_sample_rate_input`<sup>Optional</sup> <a name="http_success_feedback_sample_rate_input" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackSampleRateInput"></a>

```python
http_success_feedback_sample_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_master_key_id_input`<sup>Optional</sup> <a name="kms_master_key_id_input" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.kmsMasterKeyIdInput"></a>

```python
kms_master_key_id_input: str
```

- *Type:* str

---

##### `lambda_failure_feedback_role_arn_input`<sup>Optional</sup> <a name="lambda_failure_feedback_role_arn_input" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaFailureFeedbackRoleArnInput"></a>

```python
lambda_failure_feedback_role_arn_input: str
```

- *Type:* str

---

##### `lambda_success_feedback_role_arn_input`<sup>Optional</sup> <a name="lambda_success_feedback_role_arn_input" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackRoleArnInput"></a>

```python
lambda_success_feedback_role_arn_input: str
```

- *Type:* str

---

##### `lambda_success_feedback_sample_rate_input`<sup>Optional</sup> <a name="lambda_success_feedback_sample_rate_input" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackSampleRateInput"></a>

```python
lambda_success_feedback_sample_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `signature_version_input`<sup>Optional</sup> <a name="signature_version_input" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.signatureVersionInput"></a>

```python
signature_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sqs_failure_feedback_role_arn_input`<sup>Optional</sup> <a name="sqs_failure_feedback_role_arn_input" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsFailureFeedbackRoleArnInput"></a>

```python
sqs_failure_feedback_role_arn_input: str
```

- *Type:* str

---

##### `sqs_success_feedback_role_arn_input`<sup>Optional</sup> <a name="sqs_success_feedback_role_arn_input" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackRoleArnInput"></a>

```python
sqs_success_feedback_role_arn_input: str
```

- *Type:* str

---

##### `sqs_success_feedback_sample_rate_input`<sup>Optional</sup> <a name="sqs_success_feedback_sample_rate_input" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackSampleRateInput"></a>

```python
sqs_success_feedback_sample_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tracing_config_input`<sup>Optional</sup> <a name="tracing_config_input" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tracingConfigInput"></a>

```python
tracing_config_input: str
```

- *Type:* str

---

##### `application_failure_feedback_role_arn`<sup>Required</sup> <a name="application_failure_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationFailureFeedbackRoleArn"></a>

```python
application_failure_feedback_role_arn: str
```

- *Type:* str

---

##### `application_success_feedback_role_arn`<sup>Required</sup> <a name="application_success_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackRoleArn"></a>

```python
application_success_feedback_role_arn: str
```

- *Type:* str

---

##### `application_success_feedback_sample_rate`<sup>Required</sup> <a name="application_success_feedback_sample_rate" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackSampleRate"></a>

```python
application_success_feedback_sample_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `content_based_deduplication`<sup>Required</sup> <a name="content_based_deduplication" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.contentBasedDeduplication"></a>

```python
content_based_deduplication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delivery_policy`<sup>Required</sup> <a name="delivery_policy" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.deliveryPolicy"></a>

```python
delivery_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `fifo_topic`<sup>Required</sup> <a name="fifo_topic" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.fifoTopic"></a>

```python
fifo_topic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `firehose_failure_feedback_role_arn`<sup>Required</sup> <a name="firehose_failure_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseFailureFeedbackRoleArn"></a>

```python
firehose_failure_feedback_role_arn: str
```

- *Type:* str

---

##### `firehose_success_feedback_role_arn`<sup>Required</sup> <a name="firehose_success_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackRoleArn"></a>

```python
firehose_success_feedback_role_arn: str
```

- *Type:* str

---

##### `firehose_success_feedback_sample_rate`<sup>Required</sup> <a name="firehose_success_feedback_sample_rate" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackSampleRate"></a>

```python
firehose_success_feedback_sample_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_failure_feedback_role_arn`<sup>Required</sup> <a name="http_failure_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.httpFailureFeedbackRoleArn"></a>

```python
http_failure_feedback_role_arn: str
```

- *Type:* str

---

##### `http_success_feedback_role_arn`<sup>Required</sup> <a name="http_success_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackRoleArn"></a>

```python
http_success_feedback_role_arn: str
```

- *Type:* str

---

##### `http_success_feedback_sample_rate`<sup>Required</sup> <a name="http_success_feedback_sample_rate" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackSampleRate"></a>

```python
http_success_feedback_sample_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_master_key_id`<sup>Required</sup> <a name="kms_master_key_id" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.kmsMasterKeyId"></a>

```python
kms_master_key_id: str
```

- *Type:* str

---

##### `lambda_failure_feedback_role_arn`<sup>Required</sup> <a name="lambda_failure_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaFailureFeedbackRoleArn"></a>

```python
lambda_failure_feedback_role_arn: str
```

- *Type:* str

---

##### `lambda_success_feedback_role_arn`<sup>Required</sup> <a name="lambda_success_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackRoleArn"></a>

```python
lambda_success_feedback_role_arn: str
```

- *Type:* str

---

##### `lambda_success_feedback_sample_rate`<sup>Required</sup> <a name="lambda_success_feedback_sample_rate" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackSampleRate"></a>

```python
lambda_success_feedback_sample_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `signature_version`<sup>Required</sup> <a name="signature_version" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.signatureVersion"></a>

```python
signature_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sqs_failure_feedback_role_arn`<sup>Required</sup> <a name="sqs_failure_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsFailureFeedbackRoleArn"></a>

```python
sqs_failure_feedback_role_arn: str
```

- *Type:* str

---

##### `sqs_success_feedback_role_arn`<sup>Required</sup> <a name="sqs_success_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackRoleArn"></a>

```python
sqs_success_feedback_role_arn: str
```

- *Type:* str

---

##### `sqs_success_feedback_sample_rate`<sup>Required</sup> <a name="sqs_success_feedback_sample_rate" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackSampleRate"></a>

```python
sqs_success_feedback_sample_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tracing_config`<sup>Required</sup> <a name="tracing_config" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tracingConfig"></a>

```python
tracing_config: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SnsTopicConfig <a name="SnsTopicConfig" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sns_topic

snsTopic.SnsTopicConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_failure_feedback_role_arn: str = None,
  application_success_feedback_role_arn: str = None,
  application_success_feedback_sample_rate: typing.Union[int, float] = None,
  content_based_deduplication: typing.Union[bool, IResolvable] = None,
  delivery_policy: str = None,
  display_name: str = None,
  fifo_topic: typing.Union[bool, IResolvable] = None,
  firehose_failure_feedback_role_arn: str = None,
  firehose_success_feedback_role_arn: str = None,
  firehose_success_feedback_sample_rate: typing.Union[int, float] = None,
  http_failure_feedback_role_arn: str = None,
  http_success_feedback_role_arn: str = None,
  http_success_feedback_sample_rate: typing.Union[int, float] = None,
  id: str = None,
  kms_master_key_id: str = None,
  lambda_failure_feedback_role_arn: str = None,
  lambda_success_feedback_role_arn: str = None,
  lambda_success_feedback_sample_rate: typing.Union[int, float] = None,
  name: str = None,
  name_prefix: str = None,
  policy: str = None,
  signature_version: typing.Union[int, float] = None,
  sqs_failure_feedback_role_arn: str = None,
  sqs_success_feedback_role_arn: str = None,
  sqs_success_feedback_sample_rate: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  tracing_config: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.applicationFailureFeedbackRoleArn">application_failure_feedback_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_failure_feedback_role_arn SnsTopic#application_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.applicationSuccessFeedbackRoleArn">application_success_feedback_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_success_feedback_role_arn SnsTopic#application_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.applicationSuccessFeedbackSampleRate">application_success_feedback_sample_rate</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_success_feedback_sample_rate SnsTopic#application_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.contentBasedDeduplication">content_based_deduplication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#content_based_deduplication SnsTopic#content_based_deduplication}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.deliveryPolicy">delivery_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#delivery_policy SnsTopic#delivery_policy}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#display_name SnsTopic#display_name}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.fifoTopic">fifo_topic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#fifo_topic SnsTopic#fifo_topic}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.firehoseFailureFeedbackRoleArn">firehose_failure_feedback_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_failure_feedback_role_arn SnsTopic#firehose_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.firehoseSuccessFeedbackRoleArn">firehose_success_feedback_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_success_feedback_role_arn SnsTopic#firehose_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.firehoseSuccessFeedbackSampleRate">firehose_success_feedback_sample_rate</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_success_feedback_sample_rate SnsTopic#firehose_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.httpFailureFeedbackRoleArn">http_failure_feedback_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_failure_feedback_role_arn SnsTopic#http_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.httpSuccessFeedbackRoleArn">http_success_feedback_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_success_feedback_role_arn SnsTopic#http_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.httpSuccessFeedbackSampleRate">http_success_feedback_sample_rate</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_success_feedback_sample_rate SnsTopic#http_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#id SnsTopic#id}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.kmsMasterKeyId">kms_master_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#kms_master_key_id SnsTopic#kms_master_key_id}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lambdaFailureFeedbackRoleArn">lambda_failure_feedback_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_failure_feedback_role_arn SnsTopic#lambda_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lambdaSuccessFeedbackRoleArn">lambda_success_feedback_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_success_feedback_role_arn SnsTopic#lambda_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lambdaSuccessFeedbackSampleRate">lambda_success_feedback_sample_rate</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_success_feedback_sample_rate SnsTopic#lambda_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#name SnsTopic#name}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#name_prefix SnsTopic#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#policy SnsTopic#policy}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.signatureVersion">signature_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#signature_version SnsTopic#signature_version}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.sqsFailureFeedbackRoleArn">sqs_failure_feedback_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_failure_feedback_role_arn SnsTopic#sqs_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.sqsSuccessFeedbackRoleArn">sqs_success_feedback_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_success_feedback_role_arn SnsTopic#sqs_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.sqsSuccessFeedbackSampleRate">sqs_success_feedback_sample_rate</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_success_feedback_sample_rate SnsTopic#sqs_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tags SnsTopic#tags}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tags_all SnsTopic#tags_all}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.tracingConfig">tracing_config</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tracing_config SnsTopic#tracing_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_failure_feedback_role_arn`<sup>Optional</sup> <a name="application_failure_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.applicationFailureFeedbackRoleArn"></a>

```python
application_failure_feedback_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_failure_feedback_role_arn SnsTopic#application_failure_feedback_role_arn}.

---

##### `application_success_feedback_role_arn`<sup>Optional</sup> <a name="application_success_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.applicationSuccessFeedbackRoleArn"></a>

```python
application_success_feedback_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_success_feedback_role_arn SnsTopic#application_success_feedback_role_arn}.

---

##### `application_success_feedback_sample_rate`<sup>Optional</sup> <a name="application_success_feedback_sample_rate" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.applicationSuccessFeedbackSampleRate"></a>

```python
application_success_feedback_sample_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_success_feedback_sample_rate SnsTopic#application_success_feedback_sample_rate}.

---

##### `content_based_deduplication`<sup>Optional</sup> <a name="content_based_deduplication" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.contentBasedDeduplication"></a>

```python
content_based_deduplication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#content_based_deduplication SnsTopic#content_based_deduplication}.

---

##### `delivery_policy`<sup>Optional</sup> <a name="delivery_policy" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.deliveryPolicy"></a>

```python
delivery_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#delivery_policy SnsTopic#delivery_policy}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#display_name SnsTopic#display_name}.

---

##### `fifo_topic`<sup>Optional</sup> <a name="fifo_topic" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.fifoTopic"></a>

```python
fifo_topic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#fifo_topic SnsTopic#fifo_topic}.

---

##### `firehose_failure_feedback_role_arn`<sup>Optional</sup> <a name="firehose_failure_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.firehoseFailureFeedbackRoleArn"></a>

```python
firehose_failure_feedback_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_failure_feedback_role_arn SnsTopic#firehose_failure_feedback_role_arn}.

---

##### `firehose_success_feedback_role_arn`<sup>Optional</sup> <a name="firehose_success_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.firehoseSuccessFeedbackRoleArn"></a>

```python
firehose_success_feedback_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_success_feedback_role_arn SnsTopic#firehose_success_feedback_role_arn}.

---

##### `firehose_success_feedback_sample_rate`<sup>Optional</sup> <a name="firehose_success_feedback_sample_rate" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.firehoseSuccessFeedbackSampleRate"></a>

```python
firehose_success_feedback_sample_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_success_feedback_sample_rate SnsTopic#firehose_success_feedback_sample_rate}.

---

##### `http_failure_feedback_role_arn`<sup>Optional</sup> <a name="http_failure_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.httpFailureFeedbackRoleArn"></a>

```python
http_failure_feedback_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_failure_feedback_role_arn SnsTopic#http_failure_feedback_role_arn}.

---

##### `http_success_feedback_role_arn`<sup>Optional</sup> <a name="http_success_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.httpSuccessFeedbackRoleArn"></a>

```python
http_success_feedback_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_success_feedback_role_arn SnsTopic#http_success_feedback_role_arn}.

---

##### `http_success_feedback_sample_rate`<sup>Optional</sup> <a name="http_success_feedback_sample_rate" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.httpSuccessFeedbackSampleRate"></a>

```python
http_success_feedback_sample_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_success_feedback_sample_rate SnsTopic#http_success_feedback_sample_rate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#id SnsTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_master_key_id`<sup>Optional</sup> <a name="kms_master_key_id" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.kmsMasterKeyId"></a>

```python
kms_master_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#kms_master_key_id SnsTopic#kms_master_key_id}.

---

##### `lambda_failure_feedback_role_arn`<sup>Optional</sup> <a name="lambda_failure_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lambdaFailureFeedbackRoleArn"></a>

```python
lambda_failure_feedback_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_failure_feedback_role_arn SnsTopic#lambda_failure_feedback_role_arn}.

---

##### `lambda_success_feedback_role_arn`<sup>Optional</sup> <a name="lambda_success_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lambdaSuccessFeedbackRoleArn"></a>

```python
lambda_success_feedback_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_success_feedback_role_arn SnsTopic#lambda_success_feedback_role_arn}.

---

##### `lambda_success_feedback_sample_rate`<sup>Optional</sup> <a name="lambda_success_feedback_sample_rate" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lambdaSuccessFeedbackSampleRate"></a>

```python
lambda_success_feedback_sample_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_success_feedback_sample_rate SnsTopic#lambda_success_feedback_sample_rate}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#name SnsTopic#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#name_prefix SnsTopic#name_prefix}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.policy"></a>

```python
policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#policy SnsTopic#policy}.

---

##### `signature_version`<sup>Optional</sup> <a name="signature_version" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.signatureVersion"></a>

```python
signature_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#signature_version SnsTopic#signature_version}.

---

##### `sqs_failure_feedback_role_arn`<sup>Optional</sup> <a name="sqs_failure_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.sqsFailureFeedbackRoleArn"></a>

```python
sqs_failure_feedback_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_failure_feedback_role_arn SnsTopic#sqs_failure_feedback_role_arn}.

---

##### `sqs_success_feedback_role_arn`<sup>Optional</sup> <a name="sqs_success_feedback_role_arn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.sqsSuccessFeedbackRoleArn"></a>

```python
sqs_success_feedback_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_success_feedback_role_arn SnsTopic#sqs_success_feedback_role_arn}.

---

##### `sqs_success_feedback_sample_rate`<sup>Optional</sup> <a name="sqs_success_feedback_sample_rate" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.sqsSuccessFeedbackSampleRate"></a>

```python
sqs_success_feedback_sample_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_success_feedback_sample_rate SnsTopic#sqs_success_feedback_sample_rate}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tags SnsTopic#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tags_all SnsTopic#tags_all}.

---

##### `tracing_config`<sup>Optional</sup> <a name="tracing_config" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.tracingConfig"></a>

```python
tracing_config: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tracing_config SnsTopic#tracing_config}.

---



