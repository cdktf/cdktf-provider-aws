# `sfnStateMachine` Submodule <a name="`sfnStateMachine` Submodule" id="@cdktf/provider-aws.sfnStateMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SfnStateMachine <a name="SfnStateMachine" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine aws_sfn_state_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sfn_state_machine.SfnStateMachine;

SfnStateMachine.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .definition(java.lang.String)
    .roleArn(java.lang.String)
//  .encryptionConfiguration(SfnStateMachineEncryptionConfiguration)
//  .id(java.lang.String)
//  .loggingConfiguration(SfnStateMachineLoggingConfiguration)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .publish(java.lang.Boolean)
//  .publish(IResolvable)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SfnStateMachineTimeouts)
//  .tracingConfiguration(SfnStateMachineTracingConfiguration)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.definition">definition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#definition SfnStateMachine#definition}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#role_arn SfnStateMachine#role_arn}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfiguration">SfnStateMachineEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#id SfnStateMachine#id}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration">SfnStateMachineLoggingConfiguration</a></code> | logging_configuration block. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#name SfnStateMachine#name}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#name_prefix SfnStateMachine#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.publish">publish</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#publish SfnStateMachine#publish}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#tags SfnStateMachine#tags}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#tags_all SfnStateMachine#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeouts">SfnStateMachineTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.tracingConfiguration">tracingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration">SfnStateMachineTracingConfiguration</a></code> | tracing_configuration block. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#type SfnStateMachine#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.definition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#definition SfnStateMachine#definition}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#role_arn SfnStateMachine#role_arn}.

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.encryptionConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfiguration">SfnStateMachineEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#encryption_configuration SfnStateMachine#encryption_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#id SfnStateMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="loggingConfiguration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.loggingConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration">SfnStateMachineLoggingConfiguration</a>

logging_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#logging_configuration SfnStateMachine#logging_configuration}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#name SfnStateMachine#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.namePrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#name_prefix SfnStateMachine#name_prefix}.

---

##### `publish`<sup>Optional</sup> <a name="publish" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.publish"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#publish SfnStateMachine#publish}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#region SfnStateMachine#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#tags SfnStateMachine#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#tags_all SfnStateMachine#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeouts">SfnStateMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#timeouts SfnStateMachine#timeouts}

---

##### `tracingConfiguration`<sup>Optional</sup> <a name="tracingConfiguration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.tracingConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration">SfnStateMachineTracingConfiguration</a>

tracing_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#tracing_configuration SfnStateMachine#tracing_configuration}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#type SfnStateMachine#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.putLoggingConfiguration">putLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.putTracingConfiguration">putTracingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetLoggingConfiguration">resetLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetPublish">resetPublish</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetTracingConfiguration">resetTracingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.putEncryptionConfiguration"></a>

```java
public void putEncryptionConfiguration(SfnStateMachineEncryptionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfiguration">SfnStateMachineEncryptionConfiguration</a>

---

##### `putLoggingConfiguration` <a name="putLoggingConfiguration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.putLoggingConfiguration"></a>

```java
public void putLoggingConfiguration(SfnStateMachineLoggingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.putLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration">SfnStateMachineLoggingConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.putTimeouts"></a>

```java
public void putTimeouts(SfnStateMachineTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeouts">SfnStateMachineTimeouts</a>

---

##### `putTracingConfiguration` <a name="putTracingConfiguration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.putTracingConfiguration"></a>

```java
public void putTracingConfiguration(SfnStateMachineTracingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.putTracingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration">SfnStateMachineTracingConfiguration</a>

---

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetEncryptionConfiguration"></a>

```java
public void resetEncryptionConfiguration()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetId"></a>

```java
public void resetId()
```

##### `resetLoggingConfiguration` <a name="resetLoggingConfiguration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetLoggingConfiguration"></a>

```java
public void resetLoggingConfiguration()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetName"></a>

```java
public void resetName()
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetNamePrefix"></a>

```java
public void resetNamePrefix()
```

##### `resetPublish` <a name="resetPublish" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetPublish"></a>

```java
public void resetPublish()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTracingConfiguration` <a name="resetTracingConfiguration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetTracingConfiguration"></a>

```java
public void resetTracingConfiguration()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SfnStateMachine resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.sfn_state_machine.SfnStateMachine;

SfnStateMachine.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.sfn_state_machine.SfnStateMachine;

SfnStateMachine.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.sfn_state_machine.SfnStateMachine;

SfnStateMachine.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.sfn_state_machine.SfnStateMachine;

SfnStateMachine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SfnStateMachine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SfnStateMachine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SfnStateMachine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SfnStateMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SfnStateMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.creationDate">creationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference">SfnStateMachineEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference">SfnStateMachineLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.revisionId">revisionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.stateMachineVersionArn">stateMachineVersionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference">SfnStateMachineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tracingConfiguration">tracingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference">SfnStateMachineTracingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.versionDescription">versionDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.definitionInput">definitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfiguration">SfnStateMachineEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.loggingConfigurationInput">loggingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration">SfnStateMachineLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.namePrefixInput">namePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.publishInput">publishInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeouts">SfnStateMachineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tracingConfigurationInput">tracingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration">SfnStateMachineTracingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.definition">definition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.publish">publish</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.creationDate"></a>

```java
public java.lang.String getCreationDate();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.encryptionConfiguration"></a>

```java
public SfnStateMachineEncryptionConfigurationOutputReference getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference">SfnStateMachineEncryptionConfigurationOutputReference</a>

---

##### `loggingConfiguration`<sup>Required</sup> <a name="loggingConfiguration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.loggingConfiguration"></a>

```java
public SfnStateMachineLoggingConfigurationOutputReference getLoggingConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference">SfnStateMachineLoggingConfigurationOutputReference</a>

---

##### `revisionId`<sup>Required</sup> <a name="revisionId" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.revisionId"></a>

```java
public java.lang.String getRevisionId();
```

- *Type:* java.lang.String

---

##### `stateMachineVersionArn`<sup>Required</sup> <a name="stateMachineVersionArn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.stateMachineVersionArn"></a>

```java
public java.lang.String getStateMachineVersionArn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.timeouts"></a>

```java
public SfnStateMachineTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference">SfnStateMachineTimeoutsOutputReference</a>

---

##### `tracingConfiguration`<sup>Required</sup> <a name="tracingConfiguration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tracingConfiguration"></a>

```java
public SfnStateMachineTracingConfigurationOutputReference getTracingConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference">SfnStateMachineTracingConfigurationOutputReference</a>

---

##### `versionDescription`<sup>Required</sup> <a name="versionDescription" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.versionDescription"></a>

```java
public java.lang.String getVersionDescription();
```

- *Type:* java.lang.String

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.definitionInput"></a>

```java
public java.lang.String getDefinitionInput();
```

- *Type:* java.lang.String

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.encryptionConfigurationInput"></a>

```java
public SfnStateMachineEncryptionConfiguration getEncryptionConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfiguration">SfnStateMachineEncryptionConfiguration</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `loggingConfigurationInput`<sup>Optional</sup> <a name="loggingConfigurationInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.loggingConfigurationInput"></a>

```java
public SfnStateMachineLoggingConfiguration getLoggingConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration">SfnStateMachineLoggingConfiguration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.namePrefixInput"></a>

```java
public java.lang.String getNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `publishInput`<sup>Optional</sup> <a name="publishInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.publishInput"></a>

```java
public java.lang.Object getPublishInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeouts">SfnStateMachineTimeouts</a>

---

##### `tracingConfigurationInput`<sup>Optional</sup> <a name="tracingConfigurationInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tracingConfigurationInput"></a>

```java
public SfnStateMachineTracingConfiguration getTracingConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration">SfnStateMachineTracingConfiguration</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.definition"></a>

```java
public java.lang.String getDefinition();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

---

##### `publish`<sup>Required</sup> <a name="publish" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.publish"></a>

```java
public java.lang.Object getPublish();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachine.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SfnStateMachineConfig <a name="SfnStateMachineConfig" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sfn_state_machine.SfnStateMachineConfig;

SfnStateMachineConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .definition(java.lang.String)
    .roleArn(java.lang.String)
//  .encryptionConfiguration(SfnStateMachineEncryptionConfiguration)
//  .id(java.lang.String)
//  .loggingConfiguration(SfnStateMachineLoggingConfiguration)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .publish(java.lang.Boolean)
//  .publish(IResolvable)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SfnStateMachineTimeouts)
//  .tracingConfiguration(SfnStateMachineTracingConfiguration)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.definition">definition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#definition SfnStateMachine#definition}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#role_arn SfnStateMachine#role_arn}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfiguration">SfnStateMachineEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#id SfnStateMachine#id}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration">SfnStateMachineLoggingConfiguration</a></code> | logging_configuration block. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#name SfnStateMachine#name}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#name_prefix SfnStateMachine#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.publish">publish</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#publish SfnStateMachine#publish}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#tags SfnStateMachine#tags}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#tags_all SfnStateMachine#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeouts">SfnStateMachineTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.tracingConfiguration">tracingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration">SfnStateMachineTracingConfiguration</a></code> | tracing_configuration block. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#type SfnStateMachine#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.definition"></a>

```java
public java.lang.String getDefinition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#definition SfnStateMachine#definition}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#role_arn SfnStateMachine#role_arn}.

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.encryptionConfiguration"></a>

```java
public SfnStateMachineEncryptionConfiguration getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfiguration">SfnStateMachineEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#encryption_configuration SfnStateMachine#encryption_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#id SfnStateMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="loggingConfiguration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.loggingConfiguration"></a>

```java
public SfnStateMachineLoggingConfiguration getLoggingConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration">SfnStateMachineLoggingConfiguration</a>

logging_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#logging_configuration SfnStateMachine#logging_configuration}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#name SfnStateMachine#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#name_prefix SfnStateMachine#name_prefix}.

---

##### `publish`<sup>Optional</sup> <a name="publish" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.publish"></a>

```java
public java.lang.Object getPublish();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#publish SfnStateMachine#publish}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#region SfnStateMachine#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#tags SfnStateMachine#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#tags_all SfnStateMachine#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.timeouts"></a>

```java
public SfnStateMachineTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeouts">SfnStateMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#timeouts SfnStateMachine#timeouts}

---

##### `tracingConfiguration`<sup>Optional</sup> <a name="tracingConfiguration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.tracingConfiguration"></a>

```java
public SfnStateMachineTracingConfiguration getTracingConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration">SfnStateMachineTracingConfiguration</a>

tracing_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#tracing_configuration SfnStateMachine#tracing_configuration}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#type SfnStateMachine#type}.

---

### SfnStateMachineEncryptionConfiguration <a name="SfnStateMachineEncryptionConfiguration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sfn_state_machine.SfnStateMachineEncryptionConfiguration;

SfnStateMachineEncryptionConfiguration.builder()
//  .kmsDataKeyReusePeriodSeconds(java.lang.Number)
//  .kmsKeyId(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfiguration.property.kmsDataKeyReusePeriodSeconds">kmsDataKeyReusePeriodSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#kms_data_key_reuse_period_seconds SfnStateMachine#kms_data_key_reuse_period_seconds}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfiguration.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#kms_key_id SfnStateMachine#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfiguration.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#type SfnStateMachine#type}. |

---

##### `kmsDataKeyReusePeriodSeconds`<sup>Optional</sup> <a name="kmsDataKeyReusePeriodSeconds" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfiguration.property.kmsDataKeyReusePeriodSeconds"></a>

```java
public java.lang.Number getKmsDataKeyReusePeriodSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#kms_data_key_reuse_period_seconds SfnStateMachine#kms_data_key_reuse_period_seconds}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfiguration.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#kms_key_id SfnStateMachine#kms_key_id}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfiguration.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#type SfnStateMachine#type}.

---

### SfnStateMachineLoggingConfiguration <a name="SfnStateMachineLoggingConfiguration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sfn_state_machine.SfnStateMachineLoggingConfiguration;

SfnStateMachineLoggingConfiguration.builder()
//  .includeExecutionData(java.lang.Boolean)
//  .includeExecutionData(IResolvable)
//  .level(java.lang.String)
//  .logDestination(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration.property.includeExecutionData">includeExecutionData</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#include_execution_data SfnStateMachine#include_execution_data}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration.property.level">level</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#level SfnStateMachine#level}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration.property.logDestination">logDestination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#log_destination SfnStateMachine#log_destination}. |

---

##### `includeExecutionData`<sup>Optional</sup> <a name="includeExecutionData" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration.property.includeExecutionData"></a>

```java
public java.lang.Object getIncludeExecutionData();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#include_execution_data SfnStateMachine#include_execution_data}.

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#level SfnStateMachine#level}.

---

##### `logDestination`<sup>Optional</sup> <a name="logDestination" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration.property.logDestination"></a>

```java
public java.lang.String getLogDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#log_destination SfnStateMachine#log_destination}.

---

### SfnStateMachineTimeouts <a name="SfnStateMachineTimeouts" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sfn_state_machine.SfnStateMachineTimeouts;

SfnStateMachineTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#create SfnStateMachine#create}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#delete SfnStateMachine#delete}. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#update SfnStateMachine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#create SfnStateMachine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#delete SfnStateMachine#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#update SfnStateMachine#update}.

---

### SfnStateMachineTracingConfiguration <a name="SfnStateMachineTracingConfiguration" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sfn_state_machine.SfnStateMachineTracingConfiguration;

SfnStateMachineTracingConfiguration.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#enabled SfnStateMachine#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sfn_state_machine#enabled SfnStateMachine#enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### SfnStateMachineEncryptionConfigurationOutputReference <a name="SfnStateMachineEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sfn_state_machine.SfnStateMachineEncryptionConfigurationOutputReference;

new SfnStateMachineEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.resetKmsDataKeyReusePeriodSeconds">resetKmsDataKeyReusePeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsDataKeyReusePeriodSeconds` <a name="resetKmsDataKeyReusePeriodSeconds" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.resetKmsDataKeyReusePeriodSeconds"></a>

```java
public void resetKmsDataKeyReusePeriodSeconds()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.kmsDataKeyReusePeriodSecondsInput">kmsDataKeyReusePeriodSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.kmsDataKeyReusePeriodSeconds">kmsDataKeyReusePeriodSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfiguration">SfnStateMachineEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsDataKeyReusePeriodSecondsInput`<sup>Optional</sup> <a name="kmsDataKeyReusePeriodSecondsInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.kmsDataKeyReusePeriodSecondsInput"></a>

```java
public java.lang.Number getKmsDataKeyReusePeriodSecondsInput();
```

- *Type:* java.lang.Number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `kmsDataKeyReusePeriodSeconds`<sup>Required</sup> <a name="kmsDataKeyReusePeriodSeconds" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.kmsDataKeyReusePeriodSeconds"></a>

```java
public java.lang.Number getKmsDataKeyReusePeriodSeconds();
```

- *Type:* java.lang.Number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public SfnStateMachineEncryptionConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfiguration">SfnStateMachineEncryptionConfiguration</a>

---


### SfnStateMachineLoggingConfigurationOutputReference <a name="SfnStateMachineLoggingConfigurationOutputReference" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sfn_state_machine.SfnStateMachineLoggingConfigurationOutputReference;

new SfnStateMachineLoggingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resetIncludeExecutionData">resetIncludeExecutionData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resetLevel">resetLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resetLogDestination">resetLogDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeExecutionData` <a name="resetIncludeExecutionData" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resetIncludeExecutionData"></a>

```java
public void resetIncludeExecutionData()
```

##### `resetLevel` <a name="resetLevel" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resetLevel"></a>

```java
public void resetLevel()
```

##### `resetLogDestination` <a name="resetLogDestination" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resetLogDestination"></a>

```java
public void resetLogDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.includeExecutionDataInput">includeExecutionDataInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.levelInput">levelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.logDestinationInput">logDestinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.includeExecutionData">includeExecutionData</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.logDestination">logDestination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration">SfnStateMachineLoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeExecutionDataInput`<sup>Optional</sup> <a name="includeExecutionDataInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.includeExecutionDataInput"></a>

```java
public java.lang.Object getIncludeExecutionDataInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.levelInput"></a>

```java
public java.lang.String getLevelInput();
```

- *Type:* java.lang.String

---

##### `logDestinationInput`<sup>Optional</sup> <a name="logDestinationInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.logDestinationInput"></a>

```java
public java.lang.String getLogDestinationInput();
```

- *Type:* java.lang.String

---

##### `includeExecutionData`<sup>Required</sup> <a name="includeExecutionData" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.includeExecutionData"></a>

```java
public java.lang.Object getIncludeExecutionData();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `logDestination`<sup>Required</sup> <a name="logDestination" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.logDestination"></a>

```java
public java.lang.String getLogDestination();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.internalValue"></a>

```java
public SfnStateMachineLoggingConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration">SfnStateMachineLoggingConfiguration</a>

---


### SfnStateMachineTimeoutsOutputReference <a name="SfnStateMachineTimeoutsOutputReference" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sfn_state_machine.SfnStateMachineTimeoutsOutputReference;

new SfnStateMachineTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeouts">SfnStateMachineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTimeouts">SfnStateMachineTimeouts</a>

---


### SfnStateMachineTracingConfigurationOutputReference <a name="SfnStateMachineTracingConfigurationOutputReference" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sfn_state_machine.SfnStateMachineTracingConfigurationOutputReference;

new SfnStateMachineTracingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration">SfnStateMachineTracingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.internalValue"></a>

```java
public SfnStateMachineTracingConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration">SfnStateMachineTracingConfiguration</a>

---



