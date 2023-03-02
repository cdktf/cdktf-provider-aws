# `sagemakerFlowDefinition` Submodule <a name="`sagemakerFlowDefinition` Submodule" id="@cdktf/provider-aws.sagemakerFlowDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerFlowDefinition <a name="SagemakerFlowDefinition" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition aws_sagemaker_flow_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_flow_definition.SagemakerFlowDefinition;

SagemakerFlowDefinition.Builder.create(Construct scope, java.lang.String id)
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
    .flowDefinitionName(java.lang.String)
    .humanLoopConfig(SagemakerFlowDefinitionHumanLoopConfig)
    .outputConfig(SagemakerFlowDefinitionOutputConfig)
    .roleArn(java.lang.String)
//  .humanLoopActivationConfig(SagemakerFlowDefinitionHumanLoopActivationConfig)
//  .humanLoopRequestSource(SagemakerFlowDefinitionHumanLoopRequestSource)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.flowDefinitionName">flowDefinitionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#flow_definition_name SagemakerFlowDefinition#flow_definition_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.humanLoopConfig">humanLoopConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a></code> | human_loop_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.outputConfig">outputConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a></code> | output_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#role_arn SagemakerFlowDefinition#role_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.humanLoopActivationConfig">humanLoopActivationConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a></code> | human_loop_activation_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.humanLoopRequestSource">humanLoopRequestSource</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a></code> | human_loop_request_source block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#id SagemakerFlowDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tags SagemakerFlowDefinition#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tags_all SagemakerFlowDefinition#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `flowDefinitionName`<sup>Required</sup> <a name="flowDefinitionName" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.flowDefinitionName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#flow_definition_name SagemakerFlowDefinition#flow_definition_name}.

---

##### `humanLoopConfig`<sup>Required</sup> <a name="humanLoopConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.humanLoopConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a>

human_loop_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_config SagemakerFlowDefinition#human_loop_config}

---

##### `outputConfig`<sup>Required</sup> <a name="outputConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.outputConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a>

output_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#output_config SagemakerFlowDefinition#output_config}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#role_arn SagemakerFlowDefinition#role_arn}.

---

##### `humanLoopActivationConfig`<sup>Optional</sup> <a name="humanLoopActivationConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.humanLoopActivationConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a>

human_loop_activation_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_activation_config SagemakerFlowDefinition#human_loop_activation_config}

---

##### `humanLoopRequestSource`<sup>Optional</sup> <a name="humanLoopRequestSource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.humanLoopRequestSource"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a>

human_loop_request_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_request_source SagemakerFlowDefinition#human_loop_request_source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#id SagemakerFlowDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tags SagemakerFlowDefinition#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tags_all SagemakerFlowDefinition#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopActivationConfig">putHumanLoopActivationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopConfig">putHumanLoopConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopRequestSource">putHumanLoopRequestSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putOutputConfig">putOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetHumanLoopActivationConfig">resetHumanLoopActivationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetHumanLoopRequestSource">resetHumanLoopRequestSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putHumanLoopActivationConfig` <a name="putHumanLoopActivationConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopActivationConfig"></a>

```java
public void putHumanLoopActivationConfig(SagemakerFlowDefinitionHumanLoopActivationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopActivationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a>

---

##### `putHumanLoopConfig` <a name="putHumanLoopConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopConfig"></a>

```java
public void putHumanLoopConfig(SagemakerFlowDefinitionHumanLoopConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a>

---

##### `putHumanLoopRequestSource` <a name="putHumanLoopRequestSource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopRequestSource"></a>

```java
public void putHumanLoopRequestSource(SagemakerFlowDefinitionHumanLoopRequestSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopRequestSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a>

---

##### `putOutputConfig` <a name="putOutputConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putOutputConfig"></a>

```java
public void putOutputConfig(SagemakerFlowDefinitionOutputConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a>

---

##### `resetHumanLoopActivationConfig` <a name="resetHumanLoopActivationConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetHumanLoopActivationConfig"></a>

```java
public void resetHumanLoopActivationConfig()
```

##### `resetHumanLoopRequestSource` <a name="resetHumanLoopRequestSource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetHumanLoopRequestSource"></a>

```java
public void resetHumanLoopRequestSource()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_flow_definition.SagemakerFlowDefinition;

SagemakerFlowDefinition.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_flow_definition.SagemakerFlowDefinition;

SagemakerFlowDefinition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_flow_definition.SagemakerFlowDefinition;

SagemakerFlowDefinition.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopActivationConfig">humanLoopActivationConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference">SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopConfig">humanLoopConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference">SagemakerFlowDefinitionHumanLoopConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopRequestSource">humanLoopRequestSource</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference">SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.outputConfig">outputConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference">SagemakerFlowDefinitionOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.flowDefinitionNameInput">flowDefinitionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopActivationConfigInput">humanLoopActivationConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopConfigInput">humanLoopConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopRequestSourceInput">humanLoopRequestSourceInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.outputConfigInput">outputConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.flowDefinitionName">flowDefinitionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `humanLoopActivationConfig`<sup>Required</sup> <a name="humanLoopActivationConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopActivationConfig"></a>

```java
public SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference getHumanLoopActivationConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference">SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference</a>

---

##### `humanLoopConfig`<sup>Required</sup> <a name="humanLoopConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopConfig"></a>

```java
public SagemakerFlowDefinitionHumanLoopConfigOutputReference getHumanLoopConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference">SagemakerFlowDefinitionHumanLoopConfigOutputReference</a>

---

##### `humanLoopRequestSource`<sup>Required</sup> <a name="humanLoopRequestSource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopRequestSource"></a>

```java
public SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference getHumanLoopRequestSource();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference">SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference</a>

---

##### `outputConfig`<sup>Required</sup> <a name="outputConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.outputConfig"></a>

```java
public SagemakerFlowDefinitionOutputConfigOutputReference getOutputConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference">SagemakerFlowDefinitionOutputConfigOutputReference</a>

---

##### `flowDefinitionNameInput`<sup>Optional</sup> <a name="flowDefinitionNameInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.flowDefinitionNameInput"></a>

```java
public java.lang.String getFlowDefinitionNameInput();
```

- *Type:* java.lang.String

---

##### `humanLoopActivationConfigInput`<sup>Optional</sup> <a name="humanLoopActivationConfigInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopActivationConfigInput"></a>

```java
public SagemakerFlowDefinitionHumanLoopActivationConfig getHumanLoopActivationConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a>

---

##### `humanLoopConfigInput`<sup>Optional</sup> <a name="humanLoopConfigInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopConfigInput"></a>

```java
public SagemakerFlowDefinitionHumanLoopConfig getHumanLoopConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a>

---

##### `humanLoopRequestSourceInput`<sup>Optional</sup> <a name="humanLoopRequestSourceInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopRequestSourceInput"></a>

```java
public SagemakerFlowDefinitionHumanLoopRequestSource getHumanLoopRequestSourceInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `outputConfigInput`<sup>Optional</sup> <a name="outputConfigInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.outputConfigInput"></a>

```java
public SagemakerFlowDefinitionOutputConfig getOutputConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `flowDefinitionName`<sup>Required</sup> <a name="flowDefinitionName" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.flowDefinitionName"></a>

```java
public java.lang.String getFlowDefinitionName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerFlowDefinitionConfig <a name="SagemakerFlowDefinitionConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_flow_definition.SagemakerFlowDefinitionConfig;

SagemakerFlowDefinitionConfig.builder()
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
    .flowDefinitionName(java.lang.String)
    .humanLoopConfig(SagemakerFlowDefinitionHumanLoopConfig)
    .outputConfig(SagemakerFlowDefinitionOutputConfig)
    .roleArn(java.lang.String)
//  .humanLoopActivationConfig(SagemakerFlowDefinitionHumanLoopActivationConfig)
//  .humanLoopRequestSource(SagemakerFlowDefinitionHumanLoopRequestSource)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.flowDefinitionName">flowDefinitionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#flow_definition_name SagemakerFlowDefinition#flow_definition_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.humanLoopConfig">humanLoopConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a></code> | human_loop_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.outputConfig">outputConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a></code> | output_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#role_arn SagemakerFlowDefinition#role_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.humanLoopActivationConfig">humanLoopActivationConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a></code> | human_loop_activation_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.humanLoopRequestSource">humanLoopRequestSource</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a></code> | human_loop_request_source block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#id SagemakerFlowDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tags SagemakerFlowDefinition#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tags_all SagemakerFlowDefinition#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `flowDefinitionName`<sup>Required</sup> <a name="flowDefinitionName" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.flowDefinitionName"></a>

```java
public java.lang.String getFlowDefinitionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#flow_definition_name SagemakerFlowDefinition#flow_definition_name}.

---

##### `humanLoopConfig`<sup>Required</sup> <a name="humanLoopConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.humanLoopConfig"></a>

```java
public SagemakerFlowDefinitionHumanLoopConfig getHumanLoopConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a>

human_loop_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_config SagemakerFlowDefinition#human_loop_config}

---

##### `outputConfig`<sup>Required</sup> <a name="outputConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.outputConfig"></a>

```java
public SagemakerFlowDefinitionOutputConfig getOutputConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a>

output_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#output_config SagemakerFlowDefinition#output_config}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#role_arn SagemakerFlowDefinition#role_arn}.

---

##### `humanLoopActivationConfig`<sup>Optional</sup> <a name="humanLoopActivationConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.humanLoopActivationConfig"></a>

```java
public SagemakerFlowDefinitionHumanLoopActivationConfig getHumanLoopActivationConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a>

human_loop_activation_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_activation_config SagemakerFlowDefinition#human_loop_activation_config}

---

##### `humanLoopRequestSource`<sup>Optional</sup> <a name="humanLoopRequestSource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.humanLoopRequestSource"></a>

```java
public SagemakerFlowDefinitionHumanLoopRequestSource getHumanLoopRequestSource();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a>

human_loop_request_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_request_source SagemakerFlowDefinition#human_loop_request_source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#id SagemakerFlowDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tags SagemakerFlowDefinition#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tags_all SagemakerFlowDefinition#tags_all}.

---

### SagemakerFlowDefinitionHumanLoopActivationConfig <a name="SagemakerFlowDefinitionHumanLoopActivationConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_flow_definition.SagemakerFlowDefinitionHumanLoopActivationConfig;

SagemakerFlowDefinitionHumanLoopActivationConfig.builder()
//  .humanLoopActivationConditionsConfig(SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig.property.humanLoopActivationConditionsConfig">humanLoopActivationConditionsConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a></code> | human_loop_activation_conditions_config block. |

---

##### `humanLoopActivationConditionsConfig`<sup>Optional</sup> <a name="humanLoopActivationConditionsConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig.property.humanLoopActivationConditionsConfig"></a>

```java
public SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig getHumanLoopActivationConditionsConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a>

human_loop_activation_conditions_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_activation_conditions_config SagemakerFlowDefinition#human_loop_activation_conditions_config}

---

### SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig <a name="SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_flow_definition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig;

SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig.builder()
    .humanLoopActivationConditions(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig.property.humanLoopActivationConditions">humanLoopActivationConditions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_activation_conditions SagemakerFlowDefinition#human_loop_activation_conditions}. |

---

##### `humanLoopActivationConditions`<sup>Required</sup> <a name="humanLoopActivationConditions" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig.property.humanLoopActivationConditions"></a>

```java
public java.lang.String getHumanLoopActivationConditions();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_activation_conditions SagemakerFlowDefinition#human_loop_activation_conditions}.

---

### SagemakerFlowDefinitionHumanLoopConfig <a name="SagemakerFlowDefinitionHumanLoopConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_flow_definition.SagemakerFlowDefinitionHumanLoopConfig;

SagemakerFlowDefinitionHumanLoopConfig.builder()
    .humanTaskUiArn(java.lang.String)
    .taskCount(java.lang.Number)
    .taskDescription(java.lang.String)
    .taskTitle(java.lang.String)
    .workteamArn(java.lang.String)
//  .publicWorkforceTaskPrice(SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice)
//  .taskAvailabilityLifetimeInSeconds(java.lang.Number)
//  .taskKeywords(java.util.List<java.lang.String>)
//  .taskTimeLimitInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.humanTaskUiArn">humanTaskUiArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_task_ui_arn SagemakerFlowDefinition#human_task_ui_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskCount">taskCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_count SagemakerFlowDefinition#task_count}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskDescription">taskDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_description SagemakerFlowDefinition#task_description}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskTitle">taskTitle</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_title SagemakerFlowDefinition#task_title}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.workteamArn">workteamArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#workteam_arn SagemakerFlowDefinition#workteam_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.publicWorkforceTaskPrice">publicWorkforceTaskPrice</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a></code> | public_workforce_task_price block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskAvailabilityLifetimeInSeconds">taskAvailabilityLifetimeInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_availability_lifetime_in_seconds SagemakerFlowDefinition#task_availability_lifetime_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskKeywords">taskKeywords</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_keywords SagemakerFlowDefinition#task_keywords}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskTimeLimitInSeconds">taskTimeLimitInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_time_limit_in_seconds SagemakerFlowDefinition#task_time_limit_in_seconds}. |

---

##### `humanTaskUiArn`<sup>Required</sup> <a name="humanTaskUiArn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.humanTaskUiArn"></a>

```java
public java.lang.String getHumanTaskUiArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_task_ui_arn SagemakerFlowDefinition#human_task_ui_arn}.

---

##### `taskCount`<sup>Required</sup> <a name="taskCount" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskCount"></a>

```java
public java.lang.Number getTaskCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_count SagemakerFlowDefinition#task_count}.

---

##### `taskDescription`<sup>Required</sup> <a name="taskDescription" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskDescription"></a>

```java
public java.lang.String getTaskDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_description SagemakerFlowDefinition#task_description}.

---

##### `taskTitle`<sup>Required</sup> <a name="taskTitle" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskTitle"></a>

```java
public java.lang.String getTaskTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_title SagemakerFlowDefinition#task_title}.

---

##### `workteamArn`<sup>Required</sup> <a name="workteamArn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.workteamArn"></a>

```java
public java.lang.String getWorkteamArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#workteam_arn SagemakerFlowDefinition#workteam_arn}.

---

##### `publicWorkforceTaskPrice`<sup>Optional</sup> <a name="publicWorkforceTaskPrice" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.publicWorkforceTaskPrice"></a>

```java
public SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice getPublicWorkforceTaskPrice();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a>

public_workforce_task_price block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#public_workforce_task_price SagemakerFlowDefinition#public_workforce_task_price}

---

##### `taskAvailabilityLifetimeInSeconds`<sup>Optional</sup> <a name="taskAvailabilityLifetimeInSeconds" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskAvailabilityLifetimeInSeconds"></a>

```java
public java.lang.Number getTaskAvailabilityLifetimeInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_availability_lifetime_in_seconds SagemakerFlowDefinition#task_availability_lifetime_in_seconds}.

---

##### `taskKeywords`<sup>Optional</sup> <a name="taskKeywords" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskKeywords"></a>

```java
public java.util.List<java.lang.String> getTaskKeywords();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_keywords SagemakerFlowDefinition#task_keywords}.

---

##### `taskTimeLimitInSeconds`<sup>Optional</sup> <a name="taskTimeLimitInSeconds" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskTimeLimitInSeconds"></a>

```java
public java.lang.Number getTaskTimeLimitInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_time_limit_in_seconds SagemakerFlowDefinition#task_time_limit_in_seconds}.

---

### SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice <a name="SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_flow_definition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice;

SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice.builder()
//  .amountInUsd(SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice.property.amountInUsd">amountInUsd</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a></code> | amount_in_usd block. |

---

##### `amountInUsd`<sup>Optional</sup> <a name="amountInUsd" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice.property.amountInUsd"></a>

```java
public SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd getAmountInUsd();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a>

amount_in_usd block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#amount_in_usd SagemakerFlowDefinition#amount_in_usd}

---

### SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd <a name="SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_flow_definition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd;

SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.builder()
//  .cents(java.lang.Number)
//  .dollars(java.lang.Number)
//  .tenthFractionsOfACent(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.property.cents">cents</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#cents SagemakerFlowDefinition#cents}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.property.dollars">dollars</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#dollars SagemakerFlowDefinition#dollars}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.property.tenthFractionsOfACent">tenthFractionsOfACent</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tenth_fractions_of_a_cent SagemakerFlowDefinition#tenth_fractions_of_a_cent}. |

---

##### `cents`<sup>Optional</sup> <a name="cents" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.property.cents"></a>

```java
public java.lang.Number getCents();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#cents SagemakerFlowDefinition#cents}.

---

##### `dollars`<sup>Optional</sup> <a name="dollars" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.property.dollars"></a>

```java
public java.lang.Number getDollars();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#dollars SagemakerFlowDefinition#dollars}.

---

##### `tenthFractionsOfACent`<sup>Optional</sup> <a name="tenthFractionsOfACent" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.property.tenthFractionsOfACent"></a>

```java
public java.lang.Number getTenthFractionsOfACent();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tenth_fractions_of_a_cent SagemakerFlowDefinition#tenth_fractions_of_a_cent}.

---

### SagemakerFlowDefinitionHumanLoopRequestSource <a name="SagemakerFlowDefinitionHumanLoopRequestSource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_flow_definition.SagemakerFlowDefinitionHumanLoopRequestSource;

SagemakerFlowDefinitionHumanLoopRequestSource.builder()
    .awsManagedHumanLoopRequestSource(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource.property.awsManagedHumanLoopRequestSource">awsManagedHumanLoopRequestSource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#aws_managed_human_loop_request_source SagemakerFlowDefinition#aws_managed_human_loop_request_source}. |

---

##### `awsManagedHumanLoopRequestSource`<sup>Required</sup> <a name="awsManagedHumanLoopRequestSource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource.property.awsManagedHumanLoopRequestSource"></a>

```java
public java.lang.String getAwsManagedHumanLoopRequestSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#aws_managed_human_loop_request_source SagemakerFlowDefinition#aws_managed_human_loop_request_source}.

---

### SagemakerFlowDefinitionOutputConfig <a name="SagemakerFlowDefinitionOutputConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_flow_definition.SagemakerFlowDefinitionOutputConfig;

SagemakerFlowDefinitionOutputConfig.builder()
    .s3OutputPath(java.lang.String)
//  .kmsKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig.property.s3OutputPath">s3OutputPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#s3_output_path SagemakerFlowDefinition#s3_output_path}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#kms_key_id SagemakerFlowDefinition#kms_key_id}. |

---

##### `s3OutputPath`<sup>Required</sup> <a name="s3OutputPath" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig.property.s3OutputPath"></a>

```java
public java.lang.String getS3OutputPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#s3_output_path SagemakerFlowDefinition#s3_output_path}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#kms_key_id SagemakerFlowDefinition#kms_key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference <a name="SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_flow_definition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference;

new SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.humanLoopActivationConditionsInput">humanLoopActivationConditionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.humanLoopActivationConditions">humanLoopActivationConditions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `humanLoopActivationConditionsInput`<sup>Optional</sup> <a name="humanLoopActivationConditionsInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.humanLoopActivationConditionsInput"></a>

```java
public java.lang.String getHumanLoopActivationConditionsInput();
```

- *Type:* java.lang.String

---

##### `humanLoopActivationConditions`<sup>Required</sup> <a name="humanLoopActivationConditions" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.humanLoopActivationConditions"></a>

```java
public java.lang.String getHumanLoopActivationConditions();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.internalValue"></a>

```java
public SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a>

---


### SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference <a name="SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_flow_definition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference;

new SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.putHumanLoopActivationConditionsConfig">putHumanLoopActivationConditionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.resetHumanLoopActivationConditionsConfig">resetHumanLoopActivationConditionsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHumanLoopActivationConditionsConfig` <a name="putHumanLoopActivationConditionsConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.putHumanLoopActivationConditionsConfig"></a>

```java
public void putHumanLoopActivationConditionsConfig(SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.putHumanLoopActivationConditionsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a>

---

##### `resetHumanLoopActivationConditionsConfig` <a name="resetHumanLoopActivationConditionsConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.resetHumanLoopActivationConditionsConfig"></a>

```java
public void resetHumanLoopActivationConditionsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.humanLoopActivationConditionsConfig">humanLoopActivationConditionsConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.humanLoopActivationConditionsConfigInput">humanLoopActivationConditionsConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `humanLoopActivationConditionsConfig`<sup>Required</sup> <a name="humanLoopActivationConditionsConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.humanLoopActivationConditionsConfig"></a>

```java
public SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference getHumanLoopActivationConditionsConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference</a>

---

##### `humanLoopActivationConditionsConfigInput`<sup>Optional</sup> <a name="humanLoopActivationConditionsConfigInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.humanLoopActivationConditionsConfigInput"></a>

```java
public SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig getHumanLoopActivationConditionsConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.internalValue"></a>

```java
public SagemakerFlowDefinitionHumanLoopActivationConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a>

---


### SagemakerFlowDefinitionHumanLoopConfigOutputReference <a name="SagemakerFlowDefinitionHumanLoopConfigOutputReference" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_flow_definition.SagemakerFlowDefinitionHumanLoopConfigOutputReference;

new SagemakerFlowDefinitionHumanLoopConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.putPublicWorkforceTaskPrice">putPublicWorkforceTaskPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetPublicWorkforceTaskPrice">resetPublicWorkforceTaskPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetTaskAvailabilityLifetimeInSeconds">resetTaskAvailabilityLifetimeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetTaskKeywords">resetTaskKeywords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetTaskTimeLimitInSeconds">resetTaskTimeLimitInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPublicWorkforceTaskPrice` <a name="putPublicWorkforceTaskPrice" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.putPublicWorkforceTaskPrice"></a>

```java
public void putPublicWorkforceTaskPrice(SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.putPublicWorkforceTaskPrice.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a>

---

##### `resetPublicWorkforceTaskPrice` <a name="resetPublicWorkforceTaskPrice" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetPublicWorkforceTaskPrice"></a>

```java
public void resetPublicWorkforceTaskPrice()
```

##### `resetTaskAvailabilityLifetimeInSeconds` <a name="resetTaskAvailabilityLifetimeInSeconds" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetTaskAvailabilityLifetimeInSeconds"></a>

```java
public void resetTaskAvailabilityLifetimeInSeconds()
```

##### `resetTaskKeywords` <a name="resetTaskKeywords" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetTaskKeywords"></a>

```java
public void resetTaskKeywords()
```

##### `resetTaskTimeLimitInSeconds` <a name="resetTaskTimeLimitInSeconds" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetTaskTimeLimitInSeconds"></a>

```java
public void resetTaskTimeLimitInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.publicWorkforceTaskPrice">publicWorkforceTaskPrice</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.humanTaskUiArnInput">humanTaskUiArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.publicWorkforceTaskPriceInput">publicWorkforceTaskPriceInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskAvailabilityLifetimeInSecondsInput">taskAvailabilityLifetimeInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskCountInput">taskCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskDescriptionInput">taskDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskKeywordsInput">taskKeywordsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTimeLimitInSecondsInput">taskTimeLimitInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTitleInput">taskTitleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.workteamArnInput">workteamArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.humanTaskUiArn">humanTaskUiArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskAvailabilityLifetimeInSeconds">taskAvailabilityLifetimeInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskCount">taskCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskDescription">taskDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskKeywords">taskKeywords</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTimeLimitInSeconds">taskTimeLimitInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTitle">taskTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.workteamArn">workteamArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `publicWorkforceTaskPrice`<sup>Required</sup> <a name="publicWorkforceTaskPrice" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.publicWorkforceTaskPrice"></a>

```java
public SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference getPublicWorkforceTaskPrice();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference</a>

---

##### `humanTaskUiArnInput`<sup>Optional</sup> <a name="humanTaskUiArnInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.humanTaskUiArnInput"></a>

```java
public java.lang.String getHumanTaskUiArnInput();
```

- *Type:* java.lang.String

---

##### `publicWorkforceTaskPriceInput`<sup>Optional</sup> <a name="publicWorkforceTaskPriceInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.publicWorkforceTaskPriceInput"></a>

```java
public SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice getPublicWorkforceTaskPriceInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a>

---

##### `taskAvailabilityLifetimeInSecondsInput`<sup>Optional</sup> <a name="taskAvailabilityLifetimeInSecondsInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskAvailabilityLifetimeInSecondsInput"></a>

```java
public java.lang.Number getTaskAvailabilityLifetimeInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `taskCountInput`<sup>Optional</sup> <a name="taskCountInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskCountInput"></a>

```java
public java.lang.Number getTaskCountInput();
```

- *Type:* java.lang.Number

---

##### `taskDescriptionInput`<sup>Optional</sup> <a name="taskDescriptionInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskDescriptionInput"></a>

```java
public java.lang.String getTaskDescriptionInput();
```

- *Type:* java.lang.String

---

##### `taskKeywordsInput`<sup>Optional</sup> <a name="taskKeywordsInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskKeywordsInput"></a>

```java
public java.util.List<java.lang.String> getTaskKeywordsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `taskTimeLimitInSecondsInput`<sup>Optional</sup> <a name="taskTimeLimitInSecondsInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTimeLimitInSecondsInput"></a>

```java
public java.lang.Number getTaskTimeLimitInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `taskTitleInput`<sup>Optional</sup> <a name="taskTitleInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTitleInput"></a>

```java
public java.lang.String getTaskTitleInput();
```

- *Type:* java.lang.String

---

##### `workteamArnInput`<sup>Optional</sup> <a name="workteamArnInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.workteamArnInput"></a>

```java
public java.lang.String getWorkteamArnInput();
```

- *Type:* java.lang.String

---

##### `humanTaskUiArn`<sup>Required</sup> <a name="humanTaskUiArn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.humanTaskUiArn"></a>

```java
public java.lang.String getHumanTaskUiArn();
```

- *Type:* java.lang.String

---

##### `taskAvailabilityLifetimeInSeconds`<sup>Required</sup> <a name="taskAvailabilityLifetimeInSeconds" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskAvailabilityLifetimeInSeconds"></a>

```java
public java.lang.Number getTaskAvailabilityLifetimeInSeconds();
```

- *Type:* java.lang.Number

---

##### `taskCount`<sup>Required</sup> <a name="taskCount" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskCount"></a>

```java
public java.lang.Number getTaskCount();
```

- *Type:* java.lang.Number

---

##### `taskDescription`<sup>Required</sup> <a name="taskDescription" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskDescription"></a>

```java
public java.lang.String getTaskDescription();
```

- *Type:* java.lang.String

---

##### `taskKeywords`<sup>Required</sup> <a name="taskKeywords" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskKeywords"></a>

```java
public java.util.List<java.lang.String> getTaskKeywords();
```

- *Type:* java.util.List<java.lang.String>

---

##### `taskTimeLimitInSeconds`<sup>Required</sup> <a name="taskTimeLimitInSeconds" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTimeLimitInSeconds"></a>

```java
public java.lang.Number getTaskTimeLimitInSeconds();
```

- *Type:* java.lang.Number

---

##### `taskTitle`<sup>Required</sup> <a name="taskTitle" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTitle"></a>

```java
public java.lang.String getTaskTitle();
```

- *Type:* java.lang.String

---

##### `workteamArn`<sup>Required</sup> <a name="workteamArn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.workteamArn"></a>

```java
public java.lang.String getWorkteamArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.internalValue"></a>

```java
public SagemakerFlowDefinitionHumanLoopConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a>

---


### SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference <a name="SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_flow_definition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference;

new SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetCents">resetCents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetDollars">resetDollars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetTenthFractionsOfACent">resetTenthFractionsOfACent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCents` <a name="resetCents" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetCents"></a>

```java
public void resetCents()
```

##### `resetDollars` <a name="resetDollars" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetDollars"></a>

```java
public void resetDollars()
```

##### `resetTenthFractionsOfACent` <a name="resetTenthFractionsOfACent" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetTenthFractionsOfACent"></a>

```java
public void resetTenthFractionsOfACent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.centsInput">centsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollarsInput">dollarsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACentInput">tenthFractionsOfACentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.cents">cents</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollars">dollars</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACent">tenthFractionsOfACent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `centsInput`<sup>Optional</sup> <a name="centsInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.centsInput"></a>

```java
public java.lang.Number getCentsInput();
```

- *Type:* java.lang.Number

---

##### `dollarsInput`<sup>Optional</sup> <a name="dollarsInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollarsInput"></a>

```java
public java.lang.Number getDollarsInput();
```

- *Type:* java.lang.Number

---

##### `tenthFractionsOfACentInput`<sup>Optional</sup> <a name="tenthFractionsOfACentInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACentInput"></a>

```java
public java.lang.Number getTenthFractionsOfACentInput();
```

- *Type:* java.lang.Number

---

##### `cents`<sup>Required</sup> <a name="cents" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.cents"></a>

```java
public java.lang.Number getCents();
```

- *Type:* java.lang.Number

---

##### `dollars`<sup>Required</sup> <a name="dollars" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollars"></a>

```java
public java.lang.Number getDollars();
```

- *Type:* java.lang.Number

---

##### `tenthFractionsOfACent`<sup>Required</sup> <a name="tenthFractionsOfACent" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACent"></a>

```java
public java.lang.Number getTenthFractionsOfACent();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.internalValue"></a>

```java
public SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a>

---


### SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference <a name="SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_flow_definition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference;

new SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.putAmountInUsd">putAmountInUsd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.resetAmountInUsd">resetAmountInUsd</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAmountInUsd` <a name="putAmountInUsd" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.putAmountInUsd"></a>

```java
public void putAmountInUsd(SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.putAmountInUsd.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a>

---

##### `resetAmountInUsd` <a name="resetAmountInUsd" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.resetAmountInUsd"></a>

```java
public void resetAmountInUsd()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsd">amountInUsd</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsdInput">amountInUsdInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `amountInUsd`<sup>Required</sup> <a name="amountInUsd" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsd"></a>

```java
public SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference getAmountInUsd();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference</a>

---

##### `amountInUsdInput`<sup>Optional</sup> <a name="amountInUsdInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsdInput"></a>

```java
public SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd getAmountInUsdInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.internalValue"></a>

```java
public SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a>

---


### SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference <a name="SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_flow_definition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference;

new SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.awsManagedHumanLoopRequestSourceInput">awsManagedHumanLoopRequestSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.awsManagedHumanLoopRequestSource">awsManagedHumanLoopRequestSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsManagedHumanLoopRequestSourceInput`<sup>Optional</sup> <a name="awsManagedHumanLoopRequestSourceInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.awsManagedHumanLoopRequestSourceInput"></a>

```java
public java.lang.String getAwsManagedHumanLoopRequestSourceInput();
```

- *Type:* java.lang.String

---

##### `awsManagedHumanLoopRequestSource`<sup>Required</sup> <a name="awsManagedHumanLoopRequestSource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.awsManagedHumanLoopRequestSource"></a>

```java
public java.lang.String getAwsManagedHumanLoopRequestSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.internalValue"></a>

```java
public SagemakerFlowDefinitionHumanLoopRequestSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a>

---


### SagemakerFlowDefinitionOutputConfigOutputReference <a name="SagemakerFlowDefinitionOutputConfigOutputReference" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_flow_definition.SagemakerFlowDefinitionOutputConfigOutputReference;

new SagemakerFlowDefinitionOutputConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.s3OutputPathInput">s3OutputPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.s3OutputPath">s3OutputPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `s3OutputPathInput`<sup>Optional</sup> <a name="s3OutputPathInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.s3OutputPathInput"></a>

```java
public java.lang.String getS3OutputPathInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `s3OutputPath`<sup>Required</sup> <a name="s3OutputPath" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.s3OutputPath"></a>

```java
public java.lang.String getS3OutputPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.internalValue"></a>

```java
public SagemakerFlowDefinitionOutputConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a>

---



