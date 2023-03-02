# `snsTopic` Submodule <a name="`snsTopic` Submodule" id="@cdktf/provider-aws.snsTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnsTopic <a name="SnsTopic" id="@cdktf/provider-aws.snsTopic.SnsTopic"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_topic aws_sns_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sns_topic.SnsTopic;

SnsTopic.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .applicationFailureFeedbackRoleArn(java.lang.String)
//  .applicationSuccessFeedbackRoleArn(java.lang.String)
//  .applicationSuccessFeedbackSampleRate(java.lang.Number)
//  .contentBasedDeduplication(java.lang.Boolean)
//  .contentBasedDeduplication(IResolvable)
//  .deliveryPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .fifoTopic(java.lang.Boolean)
//  .fifoTopic(IResolvable)
//  .firehoseFailureFeedbackRoleArn(java.lang.String)
//  .firehoseSuccessFeedbackRoleArn(java.lang.String)
//  .firehoseSuccessFeedbackSampleRate(java.lang.Number)
//  .httpFailureFeedbackRoleArn(java.lang.String)
//  .httpSuccessFeedbackRoleArn(java.lang.String)
//  .httpSuccessFeedbackSampleRate(java.lang.Number)
//  .id(java.lang.String)
//  .kmsMasterKeyId(java.lang.String)
//  .lambdaFailureFeedbackRoleArn(java.lang.String)
//  .lambdaSuccessFeedbackRoleArn(java.lang.String)
//  .lambdaSuccessFeedbackSampleRate(java.lang.Number)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .policy(java.lang.String)
//  .signatureVersion(java.lang.Number)
//  .sqsFailureFeedbackRoleArn(java.lang.String)
//  .sqsSuccessFeedbackRoleArn(java.lang.String)
//  .sqsSuccessFeedbackSampleRate(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .tracingConfig(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.applicationFailureFeedbackRoleArn">applicationFailureFeedbackRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_failure_feedback_role_arn SnsTopic#application_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.applicationSuccessFeedbackRoleArn">applicationSuccessFeedbackRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_success_feedback_role_arn SnsTopic#application_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.applicationSuccessFeedbackSampleRate">applicationSuccessFeedbackSampleRate</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_success_feedback_sample_rate SnsTopic#application_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.contentBasedDeduplication">contentBasedDeduplication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#content_based_deduplication SnsTopic#content_based_deduplication}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.deliveryPolicy">deliveryPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#delivery_policy SnsTopic#delivery_policy}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#display_name SnsTopic#display_name}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.fifoTopic">fifoTopic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#fifo_topic SnsTopic#fifo_topic}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.firehoseFailureFeedbackRoleArn">firehoseFailureFeedbackRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_failure_feedback_role_arn SnsTopic#firehose_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.firehoseSuccessFeedbackRoleArn">firehoseSuccessFeedbackRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_success_feedback_role_arn SnsTopic#firehose_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.firehoseSuccessFeedbackSampleRate">firehoseSuccessFeedbackSampleRate</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_success_feedback_sample_rate SnsTopic#firehose_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.httpFailureFeedbackRoleArn">httpFailureFeedbackRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_failure_feedback_role_arn SnsTopic#http_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.httpSuccessFeedbackRoleArn">httpSuccessFeedbackRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_success_feedback_role_arn SnsTopic#http_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.httpSuccessFeedbackSampleRate">httpSuccessFeedbackSampleRate</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_success_feedback_sample_rate SnsTopic#http_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#id SnsTopic#id}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#kms_master_key_id SnsTopic#kms_master_key_id}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.lambdaFailureFeedbackRoleArn">lambdaFailureFeedbackRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_failure_feedback_role_arn SnsTopic#lambda_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.lambdaSuccessFeedbackRoleArn">lambdaSuccessFeedbackRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_success_feedback_role_arn SnsTopic#lambda_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.lambdaSuccessFeedbackSampleRate">lambdaSuccessFeedbackSampleRate</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_success_feedback_sample_rate SnsTopic#lambda_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#name SnsTopic#name}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#name_prefix SnsTopic#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.policy">policy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#policy SnsTopic#policy}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.signatureVersion">signatureVersion</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#signature_version SnsTopic#signature_version}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.sqsFailureFeedbackRoleArn">sqsFailureFeedbackRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_failure_feedback_role_arn SnsTopic#sqs_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.sqsSuccessFeedbackRoleArn">sqsSuccessFeedbackRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_success_feedback_role_arn SnsTopic#sqs_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.sqsSuccessFeedbackSampleRate">sqsSuccessFeedbackSampleRate</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_success_feedback_sample_rate SnsTopic#sqs_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tags SnsTopic#tags}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tags_all SnsTopic#tags_all}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.tracingConfig">tracingConfig</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tracing_config SnsTopic#tracing_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationFailureFeedbackRoleArn`<sup>Optional</sup> <a name="applicationFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.applicationFailureFeedbackRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_failure_feedback_role_arn SnsTopic#application_failure_feedback_role_arn}.

---

##### `applicationSuccessFeedbackRoleArn`<sup>Optional</sup> <a name="applicationSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.applicationSuccessFeedbackRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_success_feedback_role_arn SnsTopic#application_success_feedback_role_arn}.

---

##### `applicationSuccessFeedbackSampleRate`<sup>Optional</sup> <a name="applicationSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.applicationSuccessFeedbackSampleRate"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_success_feedback_sample_rate SnsTopic#application_success_feedback_sample_rate}.

---

##### `contentBasedDeduplication`<sup>Optional</sup> <a name="contentBasedDeduplication" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.contentBasedDeduplication"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#content_based_deduplication SnsTopic#content_based_deduplication}.

---

##### `deliveryPolicy`<sup>Optional</sup> <a name="deliveryPolicy" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.deliveryPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#delivery_policy SnsTopic#delivery_policy}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#display_name SnsTopic#display_name}.

---

##### `fifoTopic`<sup>Optional</sup> <a name="fifoTopic" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.fifoTopic"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#fifo_topic SnsTopic#fifo_topic}.

---

##### `firehoseFailureFeedbackRoleArn`<sup>Optional</sup> <a name="firehoseFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.firehoseFailureFeedbackRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_failure_feedback_role_arn SnsTopic#firehose_failure_feedback_role_arn}.

---

##### `firehoseSuccessFeedbackRoleArn`<sup>Optional</sup> <a name="firehoseSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.firehoseSuccessFeedbackRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_success_feedback_role_arn SnsTopic#firehose_success_feedback_role_arn}.

---

##### `firehoseSuccessFeedbackSampleRate`<sup>Optional</sup> <a name="firehoseSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.firehoseSuccessFeedbackSampleRate"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_success_feedback_sample_rate SnsTopic#firehose_success_feedback_sample_rate}.

---

##### `httpFailureFeedbackRoleArn`<sup>Optional</sup> <a name="httpFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.httpFailureFeedbackRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_failure_feedback_role_arn SnsTopic#http_failure_feedback_role_arn}.

---

##### `httpSuccessFeedbackRoleArn`<sup>Optional</sup> <a name="httpSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.httpSuccessFeedbackRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_success_feedback_role_arn SnsTopic#http_success_feedback_role_arn}.

---

##### `httpSuccessFeedbackSampleRate`<sup>Optional</sup> <a name="httpSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.httpSuccessFeedbackSampleRate"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_success_feedback_sample_rate SnsTopic#http_success_feedback_sample_rate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#id SnsTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsMasterKeyId`<sup>Optional</sup> <a name="kmsMasterKeyId" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.kmsMasterKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#kms_master_key_id SnsTopic#kms_master_key_id}.

---

##### `lambdaFailureFeedbackRoleArn`<sup>Optional</sup> <a name="lambdaFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.lambdaFailureFeedbackRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_failure_feedback_role_arn SnsTopic#lambda_failure_feedback_role_arn}.

---

##### `lambdaSuccessFeedbackRoleArn`<sup>Optional</sup> <a name="lambdaSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.lambdaSuccessFeedbackRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_success_feedback_role_arn SnsTopic#lambda_success_feedback_role_arn}.

---

##### `lambdaSuccessFeedbackSampleRate`<sup>Optional</sup> <a name="lambdaSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.lambdaSuccessFeedbackSampleRate"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_success_feedback_sample_rate SnsTopic#lambda_success_feedback_sample_rate}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#name SnsTopic#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.namePrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#name_prefix SnsTopic#name_prefix}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.policy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#policy SnsTopic#policy}.

---

##### `signatureVersion`<sup>Optional</sup> <a name="signatureVersion" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.signatureVersion"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#signature_version SnsTopic#signature_version}.

---

##### `sqsFailureFeedbackRoleArn`<sup>Optional</sup> <a name="sqsFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.sqsFailureFeedbackRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_failure_feedback_role_arn SnsTopic#sqs_failure_feedback_role_arn}.

---

##### `sqsSuccessFeedbackRoleArn`<sup>Optional</sup> <a name="sqsSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.sqsSuccessFeedbackRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_success_feedback_role_arn SnsTopic#sqs_success_feedback_role_arn}.

---

##### `sqsSuccessFeedbackSampleRate`<sup>Optional</sup> <a name="sqsSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.sqsSuccessFeedbackSampleRate"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_success_feedback_sample_rate SnsTopic#sqs_success_feedback_sample_rate}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tags SnsTopic#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tags_all SnsTopic#tags_all}.

---

##### `tracingConfig`<sup>Optional</sup> <a name="tracingConfig" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.tracingConfig"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tracing_config SnsTopic#tracing_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetApplicationFailureFeedbackRoleArn">resetApplicationFailureFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetApplicationSuccessFeedbackRoleArn">resetApplicationSuccessFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetApplicationSuccessFeedbackSampleRate">resetApplicationSuccessFeedbackSampleRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetContentBasedDeduplication">resetContentBasedDeduplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetDeliveryPolicy">resetDeliveryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetFifoTopic">resetFifoTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetFirehoseFailureFeedbackRoleArn">resetFirehoseFailureFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetFirehoseSuccessFeedbackRoleArn">resetFirehoseSuccessFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetFirehoseSuccessFeedbackSampleRate">resetFirehoseSuccessFeedbackSampleRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetHttpFailureFeedbackRoleArn">resetHttpFailureFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetHttpSuccessFeedbackRoleArn">resetHttpSuccessFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetHttpSuccessFeedbackSampleRate">resetHttpSuccessFeedbackSampleRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetKmsMasterKeyId">resetKmsMasterKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetLambdaFailureFeedbackRoleArn">resetLambdaFailureFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetLambdaSuccessFeedbackRoleArn">resetLambdaSuccessFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetLambdaSuccessFeedbackSampleRate">resetLambdaSuccessFeedbackSampleRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetSignatureVersion">resetSignatureVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetSqsFailureFeedbackRoleArn">resetSqsFailureFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetSqsSuccessFeedbackRoleArn">resetSqsSuccessFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetSqsSuccessFeedbackSampleRate">resetSqsSuccessFeedbackSampleRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetTracingConfig">resetTracingConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.snsTopic.SnsTopic.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.snsTopic.SnsTopic.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.snsTopic.SnsTopic.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.snsTopic.SnsTopic.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.snsTopic.SnsTopic.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.snsTopic.SnsTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.snsTopic.SnsTopic.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.snsTopic.SnsTopic.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetApplicationFailureFeedbackRoleArn` <a name="resetApplicationFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetApplicationFailureFeedbackRoleArn"></a>

```java
public void resetApplicationFailureFeedbackRoleArn()
```

##### `resetApplicationSuccessFeedbackRoleArn` <a name="resetApplicationSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetApplicationSuccessFeedbackRoleArn"></a>

```java
public void resetApplicationSuccessFeedbackRoleArn()
```

##### `resetApplicationSuccessFeedbackSampleRate` <a name="resetApplicationSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetApplicationSuccessFeedbackSampleRate"></a>

```java
public void resetApplicationSuccessFeedbackSampleRate()
```

##### `resetContentBasedDeduplication` <a name="resetContentBasedDeduplication" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetContentBasedDeduplication"></a>

```java
public void resetContentBasedDeduplication()
```

##### `resetDeliveryPolicy` <a name="resetDeliveryPolicy" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetDeliveryPolicy"></a>

```java
public void resetDeliveryPolicy()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFifoTopic` <a name="resetFifoTopic" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetFifoTopic"></a>

```java
public void resetFifoTopic()
```

##### `resetFirehoseFailureFeedbackRoleArn` <a name="resetFirehoseFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetFirehoseFailureFeedbackRoleArn"></a>

```java
public void resetFirehoseFailureFeedbackRoleArn()
```

##### `resetFirehoseSuccessFeedbackRoleArn` <a name="resetFirehoseSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetFirehoseSuccessFeedbackRoleArn"></a>

```java
public void resetFirehoseSuccessFeedbackRoleArn()
```

##### `resetFirehoseSuccessFeedbackSampleRate` <a name="resetFirehoseSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetFirehoseSuccessFeedbackSampleRate"></a>

```java
public void resetFirehoseSuccessFeedbackSampleRate()
```

##### `resetHttpFailureFeedbackRoleArn` <a name="resetHttpFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetHttpFailureFeedbackRoleArn"></a>

```java
public void resetHttpFailureFeedbackRoleArn()
```

##### `resetHttpSuccessFeedbackRoleArn` <a name="resetHttpSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetHttpSuccessFeedbackRoleArn"></a>

```java
public void resetHttpSuccessFeedbackRoleArn()
```

##### `resetHttpSuccessFeedbackSampleRate` <a name="resetHttpSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetHttpSuccessFeedbackSampleRate"></a>

```java
public void resetHttpSuccessFeedbackSampleRate()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetId"></a>

```java
public void resetId()
```

##### `resetKmsMasterKeyId` <a name="resetKmsMasterKeyId" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetKmsMasterKeyId"></a>

```java
public void resetKmsMasterKeyId()
```

##### `resetLambdaFailureFeedbackRoleArn` <a name="resetLambdaFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetLambdaFailureFeedbackRoleArn"></a>

```java
public void resetLambdaFailureFeedbackRoleArn()
```

##### `resetLambdaSuccessFeedbackRoleArn` <a name="resetLambdaSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetLambdaSuccessFeedbackRoleArn"></a>

```java
public void resetLambdaSuccessFeedbackRoleArn()
```

##### `resetLambdaSuccessFeedbackSampleRate` <a name="resetLambdaSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetLambdaSuccessFeedbackSampleRate"></a>

```java
public void resetLambdaSuccessFeedbackSampleRate()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetName"></a>

```java
public void resetName()
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetNamePrefix"></a>

```java
public void resetNamePrefix()
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetPolicy"></a>

```java
public void resetPolicy()
```

##### `resetSignatureVersion` <a name="resetSignatureVersion" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetSignatureVersion"></a>

```java
public void resetSignatureVersion()
```

##### `resetSqsFailureFeedbackRoleArn` <a name="resetSqsFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetSqsFailureFeedbackRoleArn"></a>

```java
public void resetSqsFailureFeedbackRoleArn()
```

##### `resetSqsSuccessFeedbackRoleArn` <a name="resetSqsSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetSqsSuccessFeedbackRoleArn"></a>

```java
public void resetSqsSuccessFeedbackRoleArn()
```

##### `resetSqsSuccessFeedbackSampleRate` <a name="resetSqsSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetSqsSuccessFeedbackSampleRate"></a>

```java
public void resetSqsSuccessFeedbackSampleRate()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTracingConfig` <a name="resetTracingConfig" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetTracingConfig"></a>

```java
public void resetTracingConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.snsTopic.SnsTopic.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.sns_topic.SnsTopic;

SnsTopic.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.snsTopic.SnsTopic.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.sns_topic.SnsTopic;

SnsTopic.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsTopic.SnsTopic.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.snsTopic.SnsTopic.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.sns_topic.SnsTopic;

SnsTopic.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsTopic.SnsTopic.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationFailureFeedbackRoleArnInput">applicationFailureFeedbackRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackRoleArnInput">applicationSuccessFeedbackRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackSampleRateInput">applicationSuccessFeedbackSampleRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.contentBasedDeduplicationInput">contentBasedDeduplicationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.deliveryPolicyInput">deliveryPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.fifoTopicInput">fifoTopicInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseFailureFeedbackRoleArnInput">firehoseFailureFeedbackRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackRoleArnInput">firehoseSuccessFeedbackRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackSampleRateInput">firehoseSuccessFeedbackSampleRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.httpFailureFeedbackRoleArnInput">httpFailureFeedbackRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackRoleArnInput">httpSuccessFeedbackRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackSampleRateInput">httpSuccessFeedbackSampleRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.kmsMasterKeyIdInput">kmsMasterKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaFailureFeedbackRoleArnInput">lambdaFailureFeedbackRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackRoleArnInput">lambdaSuccessFeedbackRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackSampleRateInput">lambdaSuccessFeedbackSampleRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.namePrefixInput">namePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.policyInput">policyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.signatureVersionInput">signatureVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsFailureFeedbackRoleArnInput">sqsFailureFeedbackRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackRoleArnInput">sqsSuccessFeedbackRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackSampleRateInput">sqsSuccessFeedbackSampleRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tracingConfigInput">tracingConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationFailureFeedbackRoleArn">applicationFailureFeedbackRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackRoleArn">applicationSuccessFeedbackRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackSampleRate">applicationSuccessFeedbackSampleRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.contentBasedDeduplication">contentBasedDeduplication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.deliveryPolicy">deliveryPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.fifoTopic">fifoTopic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseFailureFeedbackRoleArn">firehoseFailureFeedbackRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackRoleArn">firehoseSuccessFeedbackRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackSampleRate">firehoseSuccessFeedbackSampleRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.httpFailureFeedbackRoleArn">httpFailureFeedbackRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackRoleArn">httpSuccessFeedbackRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackSampleRate">httpSuccessFeedbackSampleRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaFailureFeedbackRoleArn">lambdaFailureFeedbackRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackRoleArn">lambdaSuccessFeedbackRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackSampleRate">lambdaSuccessFeedbackSampleRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.signatureVersion">signatureVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsFailureFeedbackRoleArn">sqsFailureFeedbackRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackRoleArn">sqsSuccessFeedbackRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackSampleRate">sqsSuccessFeedbackSampleRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tracingConfig">tracingConfig</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `applicationFailureFeedbackRoleArnInput`<sup>Optional</sup> <a name="applicationFailureFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationFailureFeedbackRoleArnInput"></a>

```java
public java.lang.String getApplicationFailureFeedbackRoleArnInput();
```

- *Type:* java.lang.String

---

##### `applicationSuccessFeedbackRoleArnInput`<sup>Optional</sup> <a name="applicationSuccessFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackRoleArnInput"></a>

```java
public java.lang.String getApplicationSuccessFeedbackRoleArnInput();
```

- *Type:* java.lang.String

---

##### `applicationSuccessFeedbackSampleRateInput`<sup>Optional</sup> <a name="applicationSuccessFeedbackSampleRateInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackSampleRateInput"></a>

```java
public java.lang.Number getApplicationSuccessFeedbackSampleRateInput();
```

- *Type:* java.lang.Number

---

##### `contentBasedDeduplicationInput`<sup>Optional</sup> <a name="contentBasedDeduplicationInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.contentBasedDeduplicationInput"></a>

```java
public java.lang.Object getContentBasedDeduplicationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deliveryPolicyInput`<sup>Optional</sup> <a name="deliveryPolicyInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.deliveryPolicyInput"></a>

```java
public java.lang.String getDeliveryPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `fifoTopicInput`<sup>Optional</sup> <a name="fifoTopicInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.fifoTopicInput"></a>

```java
public java.lang.Object getFifoTopicInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `firehoseFailureFeedbackRoleArnInput`<sup>Optional</sup> <a name="firehoseFailureFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseFailureFeedbackRoleArnInput"></a>

```java
public java.lang.String getFirehoseFailureFeedbackRoleArnInput();
```

- *Type:* java.lang.String

---

##### `firehoseSuccessFeedbackRoleArnInput`<sup>Optional</sup> <a name="firehoseSuccessFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackRoleArnInput"></a>

```java
public java.lang.String getFirehoseSuccessFeedbackRoleArnInput();
```

- *Type:* java.lang.String

---

##### `firehoseSuccessFeedbackSampleRateInput`<sup>Optional</sup> <a name="firehoseSuccessFeedbackSampleRateInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackSampleRateInput"></a>

```java
public java.lang.Number getFirehoseSuccessFeedbackSampleRateInput();
```

- *Type:* java.lang.Number

---

##### `httpFailureFeedbackRoleArnInput`<sup>Optional</sup> <a name="httpFailureFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.httpFailureFeedbackRoleArnInput"></a>

```java
public java.lang.String getHttpFailureFeedbackRoleArnInput();
```

- *Type:* java.lang.String

---

##### `httpSuccessFeedbackRoleArnInput`<sup>Optional</sup> <a name="httpSuccessFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackRoleArnInput"></a>

```java
public java.lang.String getHttpSuccessFeedbackRoleArnInput();
```

- *Type:* java.lang.String

---

##### `httpSuccessFeedbackSampleRateInput`<sup>Optional</sup> <a name="httpSuccessFeedbackSampleRateInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackSampleRateInput"></a>

```java
public java.lang.Number getHttpSuccessFeedbackSampleRateInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsMasterKeyIdInput`<sup>Optional</sup> <a name="kmsMasterKeyIdInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.kmsMasterKeyIdInput"></a>

```java
public java.lang.String getKmsMasterKeyIdInput();
```

- *Type:* java.lang.String

---

##### `lambdaFailureFeedbackRoleArnInput`<sup>Optional</sup> <a name="lambdaFailureFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaFailureFeedbackRoleArnInput"></a>

```java
public java.lang.String getLambdaFailureFeedbackRoleArnInput();
```

- *Type:* java.lang.String

---

##### `lambdaSuccessFeedbackRoleArnInput`<sup>Optional</sup> <a name="lambdaSuccessFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackRoleArnInput"></a>

```java
public java.lang.String getLambdaSuccessFeedbackRoleArnInput();
```

- *Type:* java.lang.String

---

##### `lambdaSuccessFeedbackSampleRateInput`<sup>Optional</sup> <a name="lambdaSuccessFeedbackSampleRateInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackSampleRateInput"></a>

```java
public java.lang.Number getLambdaSuccessFeedbackSampleRateInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.namePrefixInput"></a>

```java
public java.lang.String getNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.policyInput"></a>

```java
public java.lang.String getPolicyInput();
```

- *Type:* java.lang.String

---

##### `signatureVersionInput`<sup>Optional</sup> <a name="signatureVersionInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.signatureVersionInput"></a>

```java
public java.lang.Number getSignatureVersionInput();
```

- *Type:* java.lang.Number

---

##### `sqsFailureFeedbackRoleArnInput`<sup>Optional</sup> <a name="sqsFailureFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsFailureFeedbackRoleArnInput"></a>

```java
public java.lang.String getSqsFailureFeedbackRoleArnInput();
```

- *Type:* java.lang.String

---

##### `sqsSuccessFeedbackRoleArnInput`<sup>Optional</sup> <a name="sqsSuccessFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackRoleArnInput"></a>

```java
public java.lang.String getSqsSuccessFeedbackRoleArnInput();
```

- *Type:* java.lang.String

---

##### `sqsSuccessFeedbackSampleRateInput`<sup>Optional</sup> <a name="sqsSuccessFeedbackSampleRateInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackSampleRateInput"></a>

```java
public java.lang.Number getSqsSuccessFeedbackSampleRateInput();
```

- *Type:* java.lang.Number

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tracingConfigInput`<sup>Optional</sup> <a name="tracingConfigInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tracingConfigInput"></a>

```java
public java.lang.String getTracingConfigInput();
```

- *Type:* java.lang.String

---

##### `applicationFailureFeedbackRoleArn`<sup>Required</sup> <a name="applicationFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationFailureFeedbackRoleArn"></a>

```java
public java.lang.String getApplicationFailureFeedbackRoleArn();
```

- *Type:* java.lang.String

---

##### `applicationSuccessFeedbackRoleArn`<sup>Required</sup> <a name="applicationSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackRoleArn"></a>

```java
public java.lang.String getApplicationSuccessFeedbackRoleArn();
```

- *Type:* java.lang.String

---

##### `applicationSuccessFeedbackSampleRate`<sup>Required</sup> <a name="applicationSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackSampleRate"></a>

```java
public java.lang.Number getApplicationSuccessFeedbackSampleRate();
```

- *Type:* java.lang.Number

---

##### `contentBasedDeduplication`<sup>Required</sup> <a name="contentBasedDeduplication" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.contentBasedDeduplication"></a>

```java
public java.lang.Object getContentBasedDeduplication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deliveryPolicy`<sup>Required</sup> <a name="deliveryPolicy" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.deliveryPolicy"></a>

```java
public java.lang.String getDeliveryPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `fifoTopic`<sup>Required</sup> <a name="fifoTopic" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.fifoTopic"></a>

```java
public java.lang.Object getFifoTopic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `firehoseFailureFeedbackRoleArn`<sup>Required</sup> <a name="firehoseFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseFailureFeedbackRoleArn"></a>

```java
public java.lang.String getFirehoseFailureFeedbackRoleArn();
```

- *Type:* java.lang.String

---

##### `firehoseSuccessFeedbackRoleArn`<sup>Required</sup> <a name="firehoseSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackRoleArn"></a>

```java
public java.lang.String getFirehoseSuccessFeedbackRoleArn();
```

- *Type:* java.lang.String

---

##### `firehoseSuccessFeedbackSampleRate`<sup>Required</sup> <a name="firehoseSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackSampleRate"></a>

```java
public java.lang.Number getFirehoseSuccessFeedbackSampleRate();
```

- *Type:* java.lang.Number

---

##### `httpFailureFeedbackRoleArn`<sup>Required</sup> <a name="httpFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.httpFailureFeedbackRoleArn"></a>

```java
public java.lang.String getHttpFailureFeedbackRoleArn();
```

- *Type:* java.lang.String

---

##### `httpSuccessFeedbackRoleArn`<sup>Required</sup> <a name="httpSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackRoleArn"></a>

```java
public java.lang.String getHttpSuccessFeedbackRoleArn();
```

- *Type:* java.lang.String

---

##### `httpSuccessFeedbackSampleRate`<sup>Required</sup> <a name="httpSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackSampleRate"></a>

```java
public java.lang.Number getHttpSuccessFeedbackSampleRate();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsMasterKeyId`<sup>Required</sup> <a name="kmsMasterKeyId" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.kmsMasterKeyId"></a>

```java
public java.lang.String getKmsMasterKeyId();
```

- *Type:* java.lang.String

---

##### `lambdaFailureFeedbackRoleArn`<sup>Required</sup> <a name="lambdaFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaFailureFeedbackRoleArn"></a>

```java
public java.lang.String getLambdaFailureFeedbackRoleArn();
```

- *Type:* java.lang.String

---

##### `lambdaSuccessFeedbackRoleArn`<sup>Required</sup> <a name="lambdaSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackRoleArn"></a>

```java
public java.lang.String getLambdaSuccessFeedbackRoleArn();
```

- *Type:* java.lang.String

---

##### `lambdaSuccessFeedbackSampleRate`<sup>Required</sup> <a name="lambdaSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackSampleRate"></a>

```java
public java.lang.Number getLambdaSuccessFeedbackSampleRate();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

##### `signatureVersion`<sup>Required</sup> <a name="signatureVersion" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.signatureVersion"></a>

```java
public java.lang.Number getSignatureVersion();
```

- *Type:* java.lang.Number

---

##### `sqsFailureFeedbackRoleArn`<sup>Required</sup> <a name="sqsFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsFailureFeedbackRoleArn"></a>

```java
public java.lang.String getSqsFailureFeedbackRoleArn();
```

- *Type:* java.lang.String

---

##### `sqsSuccessFeedbackRoleArn`<sup>Required</sup> <a name="sqsSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackRoleArn"></a>

```java
public java.lang.String getSqsSuccessFeedbackRoleArn();
```

- *Type:* java.lang.String

---

##### `sqsSuccessFeedbackSampleRate`<sup>Required</sup> <a name="sqsSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackSampleRate"></a>

```java
public java.lang.Number getSqsSuccessFeedbackSampleRate();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tracingConfig`<sup>Required</sup> <a name="tracingConfig" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tracingConfig"></a>

```java
public java.lang.String getTracingConfig();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SnsTopicConfig <a name="SnsTopicConfig" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sns_topic.SnsTopicConfig;

SnsTopicConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .applicationFailureFeedbackRoleArn(java.lang.String)
//  .applicationSuccessFeedbackRoleArn(java.lang.String)
//  .applicationSuccessFeedbackSampleRate(java.lang.Number)
//  .contentBasedDeduplication(java.lang.Boolean)
//  .contentBasedDeduplication(IResolvable)
//  .deliveryPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .fifoTopic(java.lang.Boolean)
//  .fifoTopic(IResolvable)
//  .firehoseFailureFeedbackRoleArn(java.lang.String)
//  .firehoseSuccessFeedbackRoleArn(java.lang.String)
//  .firehoseSuccessFeedbackSampleRate(java.lang.Number)
//  .httpFailureFeedbackRoleArn(java.lang.String)
//  .httpSuccessFeedbackRoleArn(java.lang.String)
//  .httpSuccessFeedbackSampleRate(java.lang.Number)
//  .id(java.lang.String)
//  .kmsMasterKeyId(java.lang.String)
//  .lambdaFailureFeedbackRoleArn(java.lang.String)
//  .lambdaSuccessFeedbackRoleArn(java.lang.String)
//  .lambdaSuccessFeedbackSampleRate(java.lang.Number)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .policy(java.lang.String)
//  .signatureVersion(java.lang.Number)
//  .sqsFailureFeedbackRoleArn(java.lang.String)
//  .sqsSuccessFeedbackRoleArn(java.lang.String)
//  .sqsSuccessFeedbackSampleRate(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .tracingConfig(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.applicationFailureFeedbackRoleArn">applicationFailureFeedbackRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_failure_feedback_role_arn SnsTopic#application_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.applicationSuccessFeedbackRoleArn">applicationSuccessFeedbackRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_success_feedback_role_arn SnsTopic#application_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.applicationSuccessFeedbackSampleRate">applicationSuccessFeedbackSampleRate</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_success_feedback_sample_rate SnsTopic#application_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.contentBasedDeduplication">contentBasedDeduplication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#content_based_deduplication SnsTopic#content_based_deduplication}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.deliveryPolicy">deliveryPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#delivery_policy SnsTopic#delivery_policy}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#display_name SnsTopic#display_name}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.fifoTopic">fifoTopic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#fifo_topic SnsTopic#fifo_topic}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.firehoseFailureFeedbackRoleArn">firehoseFailureFeedbackRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_failure_feedback_role_arn SnsTopic#firehose_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.firehoseSuccessFeedbackRoleArn">firehoseSuccessFeedbackRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_success_feedback_role_arn SnsTopic#firehose_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.firehoseSuccessFeedbackSampleRate">firehoseSuccessFeedbackSampleRate</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_success_feedback_sample_rate SnsTopic#firehose_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.httpFailureFeedbackRoleArn">httpFailureFeedbackRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_failure_feedback_role_arn SnsTopic#http_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.httpSuccessFeedbackRoleArn">httpSuccessFeedbackRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_success_feedback_role_arn SnsTopic#http_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.httpSuccessFeedbackSampleRate">httpSuccessFeedbackSampleRate</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_success_feedback_sample_rate SnsTopic#http_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#id SnsTopic#id}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#kms_master_key_id SnsTopic#kms_master_key_id}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lambdaFailureFeedbackRoleArn">lambdaFailureFeedbackRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_failure_feedback_role_arn SnsTopic#lambda_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lambdaSuccessFeedbackRoleArn">lambdaSuccessFeedbackRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_success_feedback_role_arn SnsTopic#lambda_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lambdaSuccessFeedbackSampleRate">lambdaSuccessFeedbackSampleRate</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_success_feedback_sample_rate SnsTopic#lambda_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#name SnsTopic#name}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#name_prefix SnsTopic#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.policy">policy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#policy SnsTopic#policy}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.signatureVersion">signatureVersion</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#signature_version SnsTopic#signature_version}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.sqsFailureFeedbackRoleArn">sqsFailureFeedbackRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_failure_feedback_role_arn SnsTopic#sqs_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.sqsSuccessFeedbackRoleArn">sqsSuccessFeedbackRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_success_feedback_role_arn SnsTopic#sqs_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.sqsSuccessFeedbackSampleRate">sqsSuccessFeedbackSampleRate</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_success_feedback_sample_rate SnsTopic#sqs_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tags SnsTopic#tags}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tags_all SnsTopic#tags_all}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.tracingConfig">tracingConfig</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tracing_config SnsTopic#tracing_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationFailureFeedbackRoleArn`<sup>Optional</sup> <a name="applicationFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.applicationFailureFeedbackRoleArn"></a>

```java
public java.lang.String getApplicationFailureFeedbackRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_failure_feedback_role_arn SnsTopic#application_failure_feedback_role_arn}.

---

##### `applicationSuccessFeedbackRoleArn`<sup>Optional</sup> <a name="applicationSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.applicationSuccessFeedbackRoleArn"></a>

```java
public java.lang.String getApplicationSuccessFeedbackRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_success_feedback_role_arn SnsTopic#application_success_feedback_role_arn}.

---

##### `applicationSuccessFeedbackSampleRate`<sup>Optional</sup> <a name="applicationSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.applicationSuccessFeedbackSampleRate"></a>

```java
public java.lang.Number getApplicationSuccessFeedbackSampleRate();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_success_feedback_sample_rate SnsTopic#application_success_feedback_sample_rate}.

---

##### `contentBasedDeduplication`<sup>Optional</sup> <a name="contentBasedDeduplication" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.contentBasedDeduplication"></a>

```java
public java.lang.Object getContentBasedDeduplication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#content_based_deduplication SnsTopic#content_based_deduplication}.

---

##### `deliveryPolicy`<sup>Optional</sup> <a name="deliveryPolicy" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.deliveryPolicy"></a>

```java
public java.lang.String getDeliveryPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#delivery_policy SnsTopic#delivery_policy}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#display_name SnsTopic#display_name}.

---

##### `fifoTopic`<sup>Optional</sup> <a name="fifoTopic" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.fifoTopic"></a>

```java
public java.lang.Object getFifoTopic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#fifo_topic SnsTopic#fifo_topic}.

---

##### `firehoseFailureFeedbackRoleArn`<sup>Optional</sup> <a name="firehoseFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.firehoseFailureFeedbackRoleArn"></a>

```java
public java.lang.String getFirehoseFailureFeedbackRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_failure_feedback_role_arn SnsTopic#firehose_failure_feedback_role_arn}.

---

##### `firehoseSuccessFeedbackRoleArn`<sup>Optional</sup> <a name="firehoseSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.firehoseSuccessFeedbackRoleArn"></a>

```java
public java.lang.String getFirehoseSuccessFeedbackRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_success_feedback_role_arn SnsTopic#firehose_success_feedback_role_arn}.

---

##### `firehoseSuccessFeedbackSampleRate`<sup>Optional</sup> <a name="firehoseSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.firehoseSuccessFeedbackSampleRate"></a>

```java
public java.lang.Number getFirehoseSuccessFeedbackSampleRate();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_success_feedback_sample_rate SnsTopic#firehose_success_feedback_sample_rate}.

---

##### `httpFailureFeedbackRoleArn`<sup>Optional</sup> <a name="httpFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.httpFailureFeedbackRoleArn"></a>

```java
public java.lang.String getHttpFailureFeedbackRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_failure_feedback_role_arn SnsTopic#http_failure_feedback_role_arn}.

---

##### `httpSuccessFeedbackRoleArn`<sup>Optional</sup> <a name="httpSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.httpSuccessFeedbackRoleArn"></a>

```java
public java.lang.String getHttpSuccessFeedbackRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_success_feedback_role_arn SnsTopic#http_success_feedback_role_arn}.

---

##### `httpSuccessFeedbackSampleRate`<sup>Optional</sup> <a name="httpSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.httpSuccessFeedbackSampleRate"></a>

```java
public java.lang.Number getHttpSuccessFeedbackSampleRate();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_success_feedback_sample_rate SnsTopic#http_success_feedback_sample_rate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#id SnsTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsMasterKeyId`<sup>Optional</sup> <a name="kmsMasterKeyId" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.kmsMasterKeyId"></a>

```java
public java.lang.String getKmsMasterKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#kms_master_key_id SnsTopic#kms_master_key_id}.

---

##### `lambdaFailureFeedbackRoleArn`<sup>Optional</sup> <a name="lambdaFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lambdaFailureFeedbackRoleArn"></a>

```java
public java.lang.String getLambdaFailureFeedbackRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_failure_feedback_role_arn SnsTopic#lambda_failure_feedback_role_arn}.

---

##### `lambdaSuccessFeedbackRoleArn`<sup>Optional</sup> <a name="lambdaSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lambdaSuccessFeedbackRoleArn"></a>

```java
public java.lang.String getLambdaSuccessFeedbackRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_success_feedback_role_arn SnsTopic#lambda_success_feedback_role_arn}.

---

##### `lambdaSuccessFeedbackSampleRate`<sup>Optional</sup> <a name="lambdaSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lambdaSuccessFeedbackSampleRate"></a>

```java
public java.lang.Number getLambdaSuccessFeedbackSampleRate();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_success_feedback_sample_rate SnsTopic#lambda_success_feedback_sample_rate}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#name SnsTopic#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#name_prefix SnsTopic#name_prefix}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#policy SnsTopic#policy}.

---

##### `signatureVersion`<sup>Optional</sup> <a name="signatureVersion" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.signatureVersion"></a>

```java
public java.lang.Number getSignatureVersion();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#signature_version SnsTopic#signature_version}.

---

##### `sqsFailureFeedbackRoleArn`<sup>Optional</sup> <a name="sqsFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.sqsFailureFeedbackRoleArn"></a>

```java
public java.lang.String getSqsFailureFeedbackRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_failure_feedback_role_arn SnsTopic#sqs_failure_feedback_role_arn}.

---

##### `sqsSuccessFeedbackRoleArn`<sup>Optional</sup> <a name="sqsSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.sqsSuccessFeedbackRoleArn"></a>

```java
public java.lang.String getSqsSuccessFeedbackRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_success_feedback_role_arn SnsTopic#sqs_success_feedback_role_arn}.

---

##### `sqsSuccessFeedbackSampleRate`<sup>Optional</sup> <a name="sqsSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.sqsSuccessFeedbackSampleRate"></a>

```java
public java.lang.Number getSqsSuccessFeedbackSampleRate();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_success_feedback_sample_rate SnsTopic#sqs_success_feedback_sample_rate}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tags SnsTopic#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tags_all SnsTopic#tags_all}.

---

##### `tracingConfig`<sup>Optional</sup> <a name="tracingConfig" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.tracingConfig"></a>

```java
public java.lang.String getTracingConfig();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tracing_config SnsTopic#tracing_config}.

---



