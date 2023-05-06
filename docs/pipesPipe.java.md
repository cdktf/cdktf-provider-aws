# `aws_pipes_pipe`

Refer to the Terraform Registory for docs: [`aws_pipes_pipe`](https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe).

# `pipesPipe` Submodule <a name="`pipesPipe` Submodule" id="@cdktf/provider-aws.pipesPipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PipesPipe <a name="PipesPipe" id="@cdktf/provider-aws.pipesPipe.PipesPipe"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe aws_pipes_pipe}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.pipes_pipe.PipesPipe;

PipesPipe.Builder.create(Construct scope, java.lang.String id)
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
    .roleArn(java.lang.String)
    .source(java.lang.String)
    .sourceParameters(PipesPipeSourceParameters)
    .target(java.lang.String)
    .targetParameters(PipesPipeTargetParameters)
//  .description(java.lang.String)
//  .desiredState(java.lang.String)
//  .enrichment(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(PipesPipeTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#role_arn PipesPipe#role_arn}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#source PipesPipe#source}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.sourceParameters">sourceParameters</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters">PipesPipeSourceParameters</a></code> | source_parameters block. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#target PipesPipe#target}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.targetParameters">targetParameters</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters">PipesPipeTargetParameters</a></code> | target_parameters block. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#description PipesPipe#description}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.desiredState">desiredState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#desired_state PipesPipe#desired_state}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.enrichment">enrichment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#enrichment PipesPipe#enrichment}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#id PipesPipe#id}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#name PipesPipe#name}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#name_prefix PipesPipe#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#tags PipesPipe#tags}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#tags_all PipesPipe#tags_all}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts">PipesPipeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#role_arn PipesPipe#role_arn}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.source"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#source PipesPipe#source}.

---

##### `sourceParameters`<sup>Required</sup> <a name="sourceParameters" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.sourceParameters"></a>

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters">PipesPipeSourceParameters</a>

source_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#source_parameters PipesPipe#source_parameters}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.target"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#target PipesPipe#target}.

---

##### `targetParameters`<sup>Required</sup> <a name="targetParameters" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.targetParameters"></a>

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters">PipesPipeTargetParameters</a>

target_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#target_parameters PipesPipe#target_parameters}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#description PipesPipe#description}.

---

##### `desiredState`<sup>Optional</sup> <a name="desiredState" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.desiredState"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#desired_state PipesPipe#desired_state}.

---

##### `enrichment`<sup>Optional</sup> <a name="enrichment" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.enrichment"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#enrichment PipesPipe#enrichment}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#id PipesPipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#name PipesPipe#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.namePrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#name_prefix PipesPipe#name_prefix}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#tags PipesPipe#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#tags_all PipesPipe#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.pipesPipe.PipesPipe.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts">PipesPipeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#timeouts PipesPipe#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.putSourceParameters">putSourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.putTargetParameters">putTargetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.resetDesiredState">resetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.resetEnrichment">resetEnrichment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.pipesPipe.PipesPipe.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.pipesPipe.PipesPipe.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.pipesPipe.PipesPipe.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pipesPipe.PipesPipe.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.pipesPipe.PipesPipe.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.pipesPipe.PipesPipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.pipesPipe.PipesPipe.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.pipesPipe.PipesPipe.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.pipesPipe.PipesPipe.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putSourceParameters` <a name="putSourceParameters" id="@cdktf/provider-aws.pipesPipe.PipesPipe.putSourceParameters"></a>

```java
public void putSourceParameters(PipesPipeSourceParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pipesPipe.PipesPipe.putSourceParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters">PipesPipeSourceParameters</a>

---

##### `putTargetParameters` <a name="putTargetParameters" id="@cdktf/provider-aws.pipesPipe.PipesPipe.putTargetParameters"></a>

```java
public void putTargetParameters(PipesPipeTargetParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pipesPipe.PipesPipe.putTargetParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters">PipesPipeTargetParameters</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.pipesPipe.PipesPipe.putTimeouts"></a>

```java
public void putTimeouts(PipesPipeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pipesPipe.PipesPipe.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts">PipesPipeTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.pipesPipe.PipesPipe.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDesiredState` <a name="resetDesiredState" id="@cdktf/provider-aws.pipesPipe.PipesPipe.resetDesiredState"></a>

```java
public void resetDesiredState()
```

##### `resetEnrichment` <a name="resetEnrichment" id="@cdktf/provider-aws.pipesPipe.PipesPipe.resetEnrichment"></a>

```java
public void resetEnrichment()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.pipesPipe.PipesPipe.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.pipesPipe.PipesPipe.resetName"></a>

```java
public void resetName()
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.pipesPipe.PipesPipe.resetNamePrefix"></a>

```java
public void resetNamePrefix()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.pipesPipe.PipesPipe.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.pipesPipe.PipesPipe.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.pipesPipe.PipesPipe.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.pipesPipe.PipesPipe.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.pipes_pipe.PipesPipe;

PipesPipe.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pipesPipe.PipesPipe.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.pipesPipe.PipesPipe.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.pipes_pipe.PipesPipe;

PipesPipe.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pipesPipe.PipesPipe.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.pipesPipe.PipesPipe.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.pipes_pipe.PipesPipe;

PipesPipe.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pipesPipe.PipesPipe.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.sourceParameters">sourceParameters</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference">PipesPipeSourceParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.targetParameters">targetParameters</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference">PipesPipeTargetParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference">PipesPipeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.desiredStateInput">desiredStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.enrichmentInput">enrichmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.namePrefixInput">namePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.sourceParametersInput">sourceParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters">PipesPipeSourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.targetParametersInput">targetParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters">PipesPipeTargetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts">PipesPipeTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.desiredState">desiredState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.enrichment">enrichment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `sourceParameters`<sup>Required</sup> <a name="sourceParameters" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.sourceParameters"></a>

```java
public PipesPipeSourceParametersOutputReference getSourceParameters();
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference">PipesPipeSourceParametersOutputReference</a>

---

##### `targetParameters`<sup>Required</sup> <a name="targetParameters" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.targetParameters"></a>

```java
public PipesPipeTargetParametersOutputReference getTargetParameters();
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference">PipesPipeTargetParametersOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.timeouts"></a>

```java
public PipesPipeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference">PipesPipeTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `desiredStateInput`<sup>Optional</sup> <a name="desiredStateInput" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.desiredStateInput"></a>

```java
public java.lang.String getDesiredStateInput();
```

- *Type:* java.lang.String

---

##### `enrichmentInput`<sup>Optional</sup> <a name="enrichmentInput" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.enrichmentInput"></a>

```java
public java.lang.String getEnrichmentInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.namePrefixInput"></a>

```java
public java.lang.String getNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `sourceParametersInput`<sup>Optional</sup> <a name="sourceParametersInput" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.sourceParametersInput"></a>

```java
public PipesPipeSourceParameters getSourceParametersInput();
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters">PipesPipeSourceParameters</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `targetParametersInput`<sup>Optional</sup> <a name="targetParametersInput" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.targetParametersInput"></a>

```java
public PipesPipeTargetParameters getTargetParametersInput();
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters">PipesPipeTargetParameters</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts">PipesPipeTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.desiredState"></a>

```java
public java.lang.String getDesiredState();
```

- *Type:* java.lang.String

---

##### `enrichment`<sup>Required</sup> <a name="enrichment" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.enrichment"></a>

```java
public java.lang.String getEnrichment();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipe.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.pipesPipe.PipesPipe.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PipesPipeConfig <a name="PipesPipeConfig" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.pipes_pipe.PipesPipeConfig;

PipesPipeConfig.builder()
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
    .roleArn(java.lang.String)
    .source(java.lang.String)
    .sourceParameters(PipesPipeSourceParameters)
    .target(java.lang.String)
    .targetParameters(PipesPipeTargetParameters)
//  .description(java.lang.String)
//  .desiredState(java.lang.String)
//  .enrichment(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(PipesPipeTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#role_arn PipesPipe#role_arn}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#source PipesPipe#source}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.sourceParameters">sourceParameters</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters">PipesPipeSourceParameters</a></code> | source_parameters block. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#target PipesPipe#target}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.targetParameters">targetParameters</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters">PipesPipeTargetParameters</a></code> | target_parameters block. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#description PipesPipe#description}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.desiredState">desiredState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#desired_state PipesPipe#desired_state}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.enrichment">enrichment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#enrichment PipesPipe#enrichment}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#id PipesPipe#id}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#name PipesPipe#name}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#name_prefix PipesPipe#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#tags PipesPipe#tags}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#tags_all PipesPipe#tags_all}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts">PipesPipeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#role_arn PipesPipe#role_arn}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#source PipesPipe#source}.

---

##### `sourceParameters`<sup>Required</sup> <a name="sourceParameters" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.sourceParameters"></a>

```java
public PipesPipeSourceParameters getSourceParameters();
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters">PipesPipeSourceParameters</a>

source_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#source_parameters PipesPipe#source_parameters}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#target PipesPipe#target}.

---

##### `targetParameters`<sup>Required</sup> <a name="targetParameters" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.targetParameters"></a>

```java
public PipesPipeTargetParameters getTargetParameters();
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters">PipesPipeTargetParameters</a>

target_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#target_parameters PipesPipe#target_parameters}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#description PipesPipe#description}.

---

##### `desiredState`<sup>Optional</sup> <a name="desiredState" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.desiredState"></a>

```java
public java.lang.String getDesiredState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#desired_state PipesPipe#desired_state}.

---

##### `enrichment`<sup>Optional</sup> <a name="enrichment" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.enrichment"></a>

```java
public java.lang.String getEnrichment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#enrichment PipesPipe#enrichment}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#id PipesPipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#name PipesPipe#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#name_prefix PipesPipe#name_prefix}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#tags PipesPipe#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#tags_all PipesPipe#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.pipesPipe.PipesPipeConfig.property.timeouts"></a>

```java
public PipesPipeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts">PipesPipeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#timeouts PipesPipe#timeouts}

---

### PipesPipeSourceParameters <a name="PipesPipeSourceParameters" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.pipes_pipe.PipesPipeSourceParameters;

PipesPipeSourceParameters.builder()
//  .filterCriteria(PipesPipeSourceParametersFilterCriteria)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters.property.filterCriteria">filterCriteria</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteria">PipesPipeSourceParametersFilterCriteria</a></code> | filter_criteria block. |

---

##### `filterCriteria`<sup>Optional</sup> <a name="filterCriteria" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters.property.filterCriteria"></a>

```java
public PipesPipeSourceParametersFilterCriteria getFilterCriteria();
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteria">PipesPipeSourceParametersFilterCriteria</a>

filter_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#filter_criteria PipesPipe#filter_criteria}

---

### PipesPipeSourceParametersFilterCriteria <a name="PipesPipeSourceParametersFilterCriteria" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteria.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.pipes_pipe.PipesPipeSourceParametersFilterCriteria;

PipesPipeSourceParametersFilterCriteria.builder()
//  .filter(IResolvable)
//  .filter(java.util.List<PipesPipeSourceParametersFilterCriteriaFilter>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteria.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter">PipesPipeSourceParametersFilterCriteriaFilter</a>></code> | filter block. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteria.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter">PipesPipeSourceParametersFilterCriteriaFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#filter PipesPipe#filter}

---

### PipesPipeSourceParametersFilterCriteriaFilter <a name="PipesPipeSourceParametersFilterCriteriaFilter" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.pipes_pipe.PipesPipeSourceParametersFilterCriteriaFilter;

PipesPipeSourceParametersFilterCriteriaFilter.builder()
    .pattern(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter.property.pattern">pattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#pattern PipesPipe#pattern}. |

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#pattern PipesPipe#pattern}.

---

### PipesPipeTargetParameters <a name="PipesPipeTargetParameters" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.pipes_pipe.PipesPipeTargetParameters;

PipesPipeTargetParameters.builder()
//  .inputTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters.property.inputTemplate">inputTemplate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#input_template PipesPipe#input_template}. |

---

##### `inputTemplate`<sup>Optional</sup> <a name="inputTemplate" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters.property.inputTemplate"></a>

```java
public java.lang.String getInputTemplate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#input_template PipesPipe#input_template}.

---

### PipesPipeTimeouts <a name="PipesPipeTimeouts" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.pipes_pipe.PipesPipeTimeouts;

PipesPipeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#create PipesPipe#create}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#delete PipesPipe#delete}. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#update PipesPipe#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#create PipesPipe#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#delete PipesPipe#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/pipes_pipe#update PipesPipe#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PipesPipeSourceParametersFilterCriteriaFilterList <a name="PipesPipeSourceParametersFilterCriteriaFilterList" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.pipes_pipe.PipesPipeSourceParametersFilterCriteriaFilterList;

new PipesPipeSourceParametersFilterCriteriaFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.get"></a>

```java
public PipesPipeSourceParametersFilterCriteriaFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter">PipesPipeSourceParametersFilterCriteriaFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter">PipesPipeSourceParametersFilterCriteriaFilter</a>>

---


### PipesPipeSourceParametersFilterCriteriaFilterOutputReference <a name="PipesPipeSourceParametersFilterCriteriaFilterOutputReference" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.pipes_pipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference;

new PipesPipeSourceParametersFilterCriteriaFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.property.patternInput">patternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter">PipesPipeSourceParametersFilterCriteriaFilter</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.property.patternInput"></a>

```java
public java.lang.String getPatternInput();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter">PipesPipeSourceParametersFilterCriteriaFilter</a> OR com.hashicorp.cdktf.IResolvable

---


### PipesPipeSourceParametersFilterCriteriaOutputReference <a name="PipesPipeSourceParametersFilterCriteriaOutputReference" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.pipes_pipe.PipesPipeSourceParametersFilterCriteriaOutputReference;

new PipesPipeSourceParametersFilterCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<PipesPipeSourceParametersFilterCriteriaFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter">PipesPipeSourceParametersFilterCriteriaFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.resetFilter"></a>

```java
public void resetFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList">PipesPipeSourceParametersFilterCriteriaFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter">PipesPipeSourceParametersFilterCriteriaFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteria">PipesPipeSourceParametersFilterCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.property.filter"></a>

```java
public PipesPipeSourceParametersFilterCriteriaFilterList getFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilterList">PipesPipeSourceParametersFilterCriteriaFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaFilter">PipesPipeSourceParametersFilterCriteriaFilter</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference.property.internalValue"></a>

```java
public PipesPipeSourceParametersFilterCriteria getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteria">PipesPipeSourceParametersFilterCriteria</a>

---


### PipesPipeSourceParametersOutputReference <a name="PipesPipeSourceParametersOutputReference" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.pipes_pipe.PipesPipeSourceParametersOutputReference;

new PipesPipeSourceParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.putFilterCriteria">putFilterCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.resetFilterCriteria">resetFilterCriteria</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilterCriteria` <a name="putFilterCriteria" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.putFilterCriteria"></a>

```java
public void putFilterCriteria(PipesPipeSourceParametersFilterCriteria value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.putFilterCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteria">PipesPipeSourceParametersFilterCriteria</a>

---

##### `resetFilterCriteria` <a name="resetFilterCriteria" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.resetFilterCriteria"></a>

```java
public void resetFilterCriteria()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.property.filterCriteria">filterCriteria</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference">PipesPipeSourceParametersFilterCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.property.filterCriteriaInput">filterCriteriaInput</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteria">PipesPipeSourceParametersFilterCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters">PipesPipeSourceParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filterCriteria`<sup>Required</sup> <a name="filterCriteria" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.property.filterCriteria"></a>

```java
public PipesPipeSourceParametersFilterCriteriaOutputReference getFilterCriteria();
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteriaOutputReference">PipesPipeSourceParametersFilterCriteriaOutputReference</a>

---

##### `filterCriteriaInput`<sup>Optional</sup> <a name="filterCriteriaInput" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.property.filterCriteriaInput"></a>

```java
public PipesPipeSourceParametersFilterCriteria getFilterCriteriaInput();
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersFilterCriteria">PipesPipeSourceParametersFilterCriteria</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.pipesPipe.PipesPipeSourceParametersOutputReference.property.internalValue"></a>

```java
public PipesPipeSourceParameters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeSourceParameters">PipesPipeSourceParameters</a>

---


### PipesPipeTargetParametersOutputReference <a name="PipesPipeTargetParametersOutputReference" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.pipes_pipe.PipesPipeTargetParametersOutputReference;

new PipesPipeTargetParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.resetInputTemplate">resetInputTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInputTemplate` <a name="resetInputTemplate" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.resetInputTemplate"></a>

```java
public void resetInputTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.property.inputTemplateInput">inputTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.property.inputTemplate">inputTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters">PipesPipeTargetParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputTemplateInput`<sup>Optional</sup> <a name="inputTemplateInput" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.property.inputTemplateInput"></a>

```java
public java.lang.String getInputTemplateInput();
```

- *Type:* java.lang.String

---

##### `inputTemplate`<sup>Required</sup> <a name="inputTemplate" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.property.inputTemplate"></a>

```java
public java.lang.String getInputTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.pipesPipe.PipesPipeTargetParametersOutputReference.property.internalValue"></a>

```java
public PipesPipeTargetParameters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTargetParameters">PipesPipeTargetParameters</a>

---


### PipesPipeTimeoutsOutputReference <a name="PipesPipeTimeoutsOutputReference" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.pipes_pipe.PipesPipeTimeoutsOutputReference;

new PipesPipeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts">PipesPipeTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.pipesPipe.PipesPipeTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.pipesPipe.PipesPipeTimeouts">PipesPipeTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



