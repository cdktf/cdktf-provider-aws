# `bedrockProvisionedModelThroughput` Submodule <a name="`bedrockProvisionedModelThroughput` Submodule" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockProvisionedModelThroughput <a name="BedrockProvisionedModelThroughput" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrock_provisioned_model_throughput aws_bedrock_provisioned_model_throughput}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_provisioned_model_throughput.BedrockProvisionedModelThroughput;

BedrockProvisionedModelThroughput.Builder.create(Construct scope, java.lang.String id)
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
    .modelArn(java.lang.String)
    .modelUnits(java.lang.Number)
    .provisionedModelName(java.lang.String)
//  .commitmentDuration(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(BedrockProvisionedModelThroughputTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.modelArn">modelArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrock_provisioned_model_throughput#model_arn BedrockProvisionedModelThroughput#model_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.modelUnits">modelUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrock_provisioned_model_throughput#model_units BedrockProvisionedModelThroughput#model_units}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.provisionedModelName">provisionedModelName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrock_provisioned_model_throughput#provisioned_model_name BedrockProvisionedModelThroughput#provisioned_model_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.commitmentDuration">commitmentDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrock_provisioned_model_throughput#commitment_duration BedrockProvisionedModelThroughput#commitment_duration}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrock_provisioned_model_throughput#tags BedrockProvisionedModelThroughput#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts">BedrockProvisionedModelThroughputTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `modelArn`<sup>Required</sup> <a name="modelArn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.modelArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrock_provisioned_model_throughput#model_arn BedrockProvisionedModelThroughput#model_arn}.

---

##### `modelUnits`<sup>Required</sup> <a name="modelUnits" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.modelUnits"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrock_provisioned_model_throughput#model_units BedrockProvisionedModelThroughput#model_units}.

---

##### `provisionedModelName`<sup>Required</sup> <a name="provisionedModelName" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.provisionedModelName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrock_provisioned_model_throughput#provisioned_model_name BedrockProvisionedModelThroughput#provisioned_model_name}.

---

##### `commitmentDuration`<sup>Optional</sup> <a name="commitmentDuration" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.commitmentDuration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrock_provisioned_model_throughput#commitment_duration BedrockProvisionedModelThroughput#commitment_duration}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrock_provisioned_model_throughput#region BedrockProvisionedModelThroughput#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrock_provisioned_model_throughput#tags BedrockProvisionedModelThroughput#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts">BedrockProvisionedModelThroughputTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrock_provisioned_model_throughput#timeouts BedrockProvisionedModelThroughput#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetCommitmentDuration">resetCommitmentDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.putTimeouts"></a>

```java
public void putTimeouts(BedrockProvisionedModelThroughputTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts">BedrockProvisionedModelThroughputTimeouts</a>

---

##### `resetCommitmentDuration` <a name="resetCommitmentDuration" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetCommitmentDuration"></a>

```java
public void resetCommitmentDuration()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockProvisionedModelThroughput resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_provisioned_model_throughput.BedrockProvisionedModelThroughput;

BedrockProvisionedModelThroughput.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_provisioned_model_throughput.BedrockProvisionedModelThroughput;

BedrockProvisionedModelThroughput.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_provisioned_model_throughput.BedrockProvisionedModelThroughput;

BedrockProvisionedModelThroughput.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_provisioned_model_throughput.BedrockProvisionedModelThroughput;

BedrockProvisionedModelThroughput.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BedrockProvisionedModelThroughput.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BedrockProvisionedModelThroughput resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BedrockProvisionedModelThroughput to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BedrockProvisionedModelThroughput that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrock_provisioned_model_throughput#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BedrockProvisionedModelThroughput to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisionedModelArn">provisionedModelArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference">BedrockProvisionedModelThroughputTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.commitmentDurationInput">commitmentDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelArnInput">modelArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelUnitsInput">modelUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisionedModelNameInput">provisionedModelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts">BedrockProvisionedModelThroughputTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.commitmentDuration">commitmentDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelArn">modelArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelUnits">modelUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisionedModelName">provisionedModelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `provisionedModelArn`<sup>Required</sup> <a name="provisionedModelArn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisionedModelArn"></a>

```java
public java.lang.String getProvisionedModelArn();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.timeouts"></a>

```java
public BedrockProvisionedModelThroughputTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference">BedrockProvisionedModelThroughputTimeoutsOutputReference</a>

---

##### `commitmentDurationInput`<sup>Optional</sup> <a name="commitmentDurationInput" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.commitmentDurationInput"></a>

```java
public java.lang.String getCommitmentDurationInput();
```

- *Type:* java.lang.String

---

##### `modelArnInput`<sup>Optional</sup> <a name="modelArnInput" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelArnInput"></a>

```java
public java.lang.String getModelArnInput();
```

- *Type:* java.lang.String

---

##### `modelUnitsInput`<sup>Optional</sup> <a name="modelUnitsInput" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelUnitsInput"></a>

```java
public java.lang.Number getModelUnitsInput();
```

- *Type:* java.lang.Number

---

##### `provisionedModelNameInput`<sup>Optional</sup> <a name="provisionedModelNameInput" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisionedModelNameInput"></a>

```java
public java.lang.String getProvisionedModelNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts">BedrockProvisionedModelThroughputTimeouts</a>

---

##### `commitmentDuration`<sup>Required</sup> <a name="commitmentDuration" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.commitmentDuration"></a>

```java
public java.lang.String getCommitmentDuration();
```

- *Type:* java.lang.String

---

##### `modelArn`<sup>Required</sup> <a name="modelArn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelArn"></a>

```java
public java.lang.String getModelArn();
```

- *Type:* java.lang.String

---

##### `modelUnits`<sup>Required</sup> <a name="modelUnits" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelUnits"></a>

```java
public java.lang.Number getModelUnits();
```

- *Type:* java.lang.Number

---

##### `provisionedModelName`<sup>Required</sup> <a name="provisionedModelName" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisionedModelName"></a>

```java
public java.lang.String getProvisionedModelName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockProvisionedModelThroughputConfig <a name="BedrockProvisionedModelThroughputConfig" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_provisioned_model_throughput.BedrockProvisionedModelThroughputConfig;

BedrockProvisionedModelThroughputConfig.builder()
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
    .modelArn(java.lang.String)
    .modelUnits(java.lang.Number)
    .provisionedModelName(java.lang.String)
//  .commitmentDuration(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(BedrockProvisionedModelThroughputTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.modelArn">modelArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrock_provisioned_model_throughput#model_arn BedrockProvisionedModelThroughput#model_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.modelUnits">modelUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrock_provisioned_model_throughput#model_units BedrockProvisionedModelThroughput#model_units}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.provisionedModelName">provisionedModelName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrock_provisioned_model_throughput#provisioned_model_name BedrockProvisionedModelThroughput#provisioned_model_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.commitmentDuration">commitmentDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrock_provisioned_model_throughput#commitment_duration BedrockProvisionedModelThroughput#commitment_duration}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrock_provisioned_model_throughput#tags BedrockProvisionedModelThroughput#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts">BedrockProvisionedModelThroughputTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `modelArn`<sup>Required</sup> <a name="modelArn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.modelArn"></a>

```java
public java.lang.String getModelArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrock_provisioned_model_throughput#model_arn BedrockProvisionedModelThroughput#model_arn}.

---

##### `modelUnits`<sup>Required</sup> <a name="modelUnits" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.modelUnits"></a>

```java
public java.lang.Number getModelUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrock_provisioned_model_throughput#model_units BedrockProvisionedModelThroughput#model_units}.

---

##### `provisionedModelName`<sup>Required</sup> <a name="provisionedModelName" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.provisionedModelName"></a>

```java
public java.lang.String getProvisionedModelName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrock_provisioned_model_throughput#provisioned_model_name BedrockProvisionedModelThroughput#provisioned_model_name}.

---

##### `commitmentDuration`<sup>Optional</sup> <a name="commitmentDuration" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.commitmentDuration"></a>

```java
public java.lang.String getCommitmentDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrock_provisioned_model_throughput#commitment_duration BedrockProvisionedModelThroughput#commitment_duration}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrock_provisioned_model_throughput#region BedrockProvisionedModelThroughput#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrock_provisioned_model_throughput#tags BedrockProvisionedModelThroughput#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.timeouts"></a>

```java
public BedrockProvisionedModelThroughputTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts">BedrockProvisionedModelThroughputTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrock_provisioned_model_throughput#timeouts BedrockProvisionedModelThroughput#timeouts}

---

### BedrockProvisionedModelThroughputTimeouts <a name="BedrockProvisionedModelThroughputTimeouts" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_provisioned_model_throughput.BedrockProvisionedModelThroughputTimeouts;

BedrockProvisionedModelThroughputTimeouts.builder()
//  .create(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/bedrock_provisioned_model_throughput#create BedrockProvisionedModelThroughput#create}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockProvisionedModelThroughputTimeoutsOutputReference <a name="BedrockProvisionedModelThroughputTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrock_provisioned_model_throughput.BedrockProvisionedModelThroughputTimeoutsOutputReference;

new BedrockProvisionedModelThroughputTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts">BedrockProvisionedModelThroughputTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts">BedrockProvisionedModelThroughputTimeouts</a>

---



