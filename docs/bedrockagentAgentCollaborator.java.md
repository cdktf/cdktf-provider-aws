# `bedrockagentAgentCollaborator` Submodule <a name="`bedrockagentAgentCollaborator` Submodule" id="@cdktf/provider-aws.bedrockagentAgentCollaborator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentAgentCollaborator <a name="BedrockagentAgentCollaborator" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator aws_bedrockagent_agent_collaborator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_agent_collaborator.BedrockagentAgentCollaborator;

BedrockagentAgentCollaborator.Builder.create(Construct scope, java.lang.String id)
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
    .agentId(java.lang.String)
    .collaborationInstruction(java.lang.String)
    .collaboratorName(java.lang.String)
//  .agentDescriptor(IResolvable)
//  .agentDescriptor(java.util.List<BedrockagentAgentCollaboratorAgentDescriptor>)
//  .agentVersion(java.lang.String)
//  .prepareAgent(java.lang.Boolean)
//  .prepareAgent(IResolvable)
//  .region(java.lang.String)
//  .relayConversationHistory(java.lang.String)
//  .timeouts(BedrockagentAgentCollaboratorTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.agentId">agentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#agent_id BedrockagentAgentCollaborator#agent_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.collaborationInstruction">collaborationInstruction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#collaboration_instruction BedrockagentAgentCollaborator#collaboration_instruction}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.collaboratorName">collaboratorName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#collaborator_name BedrockagentAgentCollaborator#collaborator_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.agentDescriptor">agentDescriptor</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor">BedrockagentAgentCollaboratorAgentDescriptor</a>></code> | agent_descriptor block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.agentVersion">agentVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#agent_version BedrockagentAgentCollaborator#agent_version}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.prepareAgent">prepareAgent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#prepare_agent BedrockagentAgentCollaborator#prepare_agent}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.relayConversationHistory">relayConversationHistory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#relay_conversation_history BedrockagentAgentCollaborator#relay_conversation_history}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts">BedrockagentAgentCollaboratorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.agentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#agent_id BedrockagentAgentCollaborator#agent_id}.

---

##### `collaborationInstruction`<sup>Required</sup> <a name="collaborationInstruction" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.collaborationInstruction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#collaboration_instruction BedrockagentAgentCollaborator#collaboration_instruction}.

---

##### `collaboratorName`<sup>Required</sup> <a name="collaboratorName" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.collaboratorName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#collaborator_name BedrockagentAgentCollaborator#collaborator_name}.

---

##### `agentDescriptor`<sup>Optional</sup> <a name="agentDescriptor" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.agentDescriptor"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor">BedrockagentAgentCollaboratorAgentDescriptor</a>>

agent_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#agent_descriptor BedrockagentAgentCollaborator#agent_descriptor}

---

##### `agentVersion`<sup>Optional</sup> <a name="agentVersion" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.agentVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#agent_version BedrockagentAgentCollaborator#agent_version}.

---

##### `prepareAgent`<sup>Optional</sup> <a name="prepareAgent" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.prepareAgent"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#prepare_agent BedrockagentAgentCollaborator#prepare_agent}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#region BedrockagentAgentCollaborator#region}

---

##### `relayConversationHistory`<sup>Optional</sup> <a name="relayConversationHistory" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.relayConversationHistory"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#relay_conversation_history BedrockagentAgentCollaborator#relay_conversation_history}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts">BedrockagentAgentCollaboratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#timeouts BedrockagentAgentCollaborator#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.putAgentDescriptor">putAgentDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetAgentDescriptor">resetAgentDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetAgentVersion">resetAgentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetPrepareAgent">resetPrepareAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetRelayConversationHistory">resetRelayConversationHistory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAgentDescriptor` <a name="putAgentDescriptor" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.putAgentDescriptor"></a>

```java
public void putAgentDescriptor(IResolvable OR java.util.List<BedrockagentAgentCollaboratorAgentDescriptor> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.putAgentDescriptor.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor">BedrockagentAgentCollaboratorAgentDescriptor</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.putTimeouts"></a>

```java
public void putTimeouts(BedrockagentAgentCollaboratorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts">BedrockagentAgentCollaboratorTimeouts</a>

---

##### `resetAgentDescriptor` <a name="resetAgentDescriptor" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetAgentDescriptor"></a>

```java
public void resetAgentDescriptor()
```

##### `resetAgentVersion` <a name="resetAgentVersion" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetAgentVersion"></a>

```java
public void resetAgentVersion()
```

##### `resetPrepareAgent` <a name="resetPrepareAgent" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetPrepareAgent"></a>

```java
public void resetPrepareAgent()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRelayConversationHistory` <a name="resetRelayConversationHistory" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetRelayConversationHistory"></a>

```java
public void resetRelayConversationHistory()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockagentAgentCollaborator resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_agent_collaborator.BedrockagentAgentCollaborator;

BedrockagentAgentCollaborator.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_agent_collaborator.BedrockagentAgentCollaborator;

BedrockagentAgentCollaborator.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_agent_collaborator.BedrockagentAgentCollaborator;

BedrockagentAgentCollaborator.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_agent_collaborator.BedrockagentAgentCollaborator;

BedrockagentAgentCollaborator.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BedrockagentAgentCollaborator.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BedrockagentAgentCollaborator resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BedrockagentAgentCollaborator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BedrockagentAgentCollaborator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentAgentCollaborator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentDescriptor">agentDescriptor</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList">BedrockagentAgentCollaboratorAgentDescriptorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaboratorId">collaboratorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference">BedrockagentAgentCollaboratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentDescriptorInput">agentDescriptorInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor">BedrockagentAgentCollaboratorAgentDescriptor</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentIdInput">agentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentVersionInput">agentVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaborationInstructionInput">collaborationInstructionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaboratorNameInput">collaboratorNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.prepareAgentInput">prepareAgentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.relayConversationHistoryInput">relayConversationHistoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts">BedrockagentAgentCollaboratorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentId">agentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentVersion">agentVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaborationInstruction">collaborationInstruction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaboratorName">collaboratorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.prepareAgent">prepareAgent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.relayConversationHistory">relayConversationHistory</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `agentDescriptor`<sup>Required</sup> <a name="agentDescriptor" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentDescriptor"></a>

```java
public BedrockagentAgentCollaboratorAgentDescriptorList getAgentDescriptor();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList">BedrockagentAgentCollaboratorAgentDescriptorList</a>

---

##### `collaboratorId`<sup>Required</sup> <a name="collaboratorId" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaboratorId"></a>

```java
public java.lang.String getCollaboratorId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.timeouts"></a>

```java
public BedrockagentAgentCollaboratorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference">BedrockagentAgentCollaboratorTimeoutsOutputReference</a>

---

##### `agentDescriptorInput`<sup>Optional</sup> <a name="agentDescriptorInput" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentDescriptorInput"></a>

```java
public java.lang.Object getAgentDescriptorInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor">BedrockagentAgentCollaboratorAgentDescriptor</a>>

---

##### `agentIdInput`<sup>Optional</sup> <a name="agentIdInput" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentIdInput"></a>

```java
public java.lang.String getAgentIdInput();
```

- *Type:* java.lang.String

---

##### `agentVersionInput`<sup>Optional</sup> <a name="agentVersionInput" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentVersionInput"></a>

```java
public java.lang.String getAgentVersionInput();
```

- *Type:* java.lang.String

---

##### `collaborationInstructionInput`<sup>Optional</sup> <a name="collaborationInstructionInput" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaborationInstructionInput"></a>

```java
public java.lang.String getCollaborationInstructionInput();
```

- *Type:* java.lang.String

---

##### `collaboratorNameInput`<sup>Optional</sup> <a name="collaboratorNameInput" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaboratorNameInput"></a>

```java
public java.lang.String getCollaboratorNameInput();
```

- *Type:* java.lang.String

---

##### `prepareAgentInput`<sup>Optional</sup> <a name="prepareAgentInput" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.prepareAgentInput"></a>

```java
public java.lang.Object getPrepareAgentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `relayConversationHistoryInput`<sup>Optional</sup> <a name="relayConversationHistoryInput" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.relayConversationHistoryInput"></a>

```java
public java.lang.String getRelayConversationHistoryInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts">BedrockagentAgentCollaboratorTimeouts</a>

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentId"></a>

```java
public java.lang.String getAgentId();
```

- *Type:* java.lang.String

---

##### `agentVersion`<sup>Required</sup> <a name="agentVersion" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentVersion"></a>

```java
public java.lang.String getAgentVersion();
```

- *Type:* java.lang.String

---

##### `collaborationInstruction`<sup>Required</sup> <a name="collaborationInstruction" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaborationInstruction"></a>

```java
public java.lang.String getCollaborationInstruction();
```

- *Type:* java.lang.String

---

##### `collaboratorName`<sup>Required</sup> <a name="collaboratorName" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaboratorName"></a>

```java
public java.lang.String getCollaboratorName();
```

- *Type:* java.lang.String

---

##### `prepareAgent`<sup>Required</sup> <a name="prepareAgent" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.prepareAgent"></a>

```java
public java.lang.Object getPrepareAgent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `relayConversationHistory`<sup>Required</sup> <a name="relayConversationHistory" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.relayConversationHistory"></a>

```java
public java.lang.String getRelayConversationHistory();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentAgentCollaboratorAgentDescriptor <a name="BedrockagentAgentCollaboratorAgentDescriptor" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_agent_collaborator.BedrockagentAgentCollaboratorAgentDescriptor;

BedrockagentAgentCollaboratorAgentDescriptor.builder()
    .aliasArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor.property.aliasArn">aliasArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#alias_arn BedrockagentAgentCollaborator#alias_arn}. |

---

##### `aliasArn`<sup>Required</sup> <a name="aliasArn" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor.property.aliasArn"></a>

```java
public java.lang.String getAliasArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#alias_arn BedrockagentAgentCollaborator#alias_arn}.

---

### BedrockagentAgentCollaboratorConfig <a name="BedrockagentAgentCollaboratorConfig" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_agent_collaborator.BedrockagentAgentCollaboratorConfig;

BedrockagentAgentCollaboratorConfig.builder()
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
    .agentId(java.lang.String)
    .collaborationInstruction(java.lang.String)
    .collaboratorName(java.lang.String)
//  .agentDescriptor(IResolvable)
//  .agentDescriptor(java.util.List<BedrockagentAgentCollaboratorAgentDescriptor>)
//  .agentVersion(java.lang.String)
//  .prepareAgent(java.lang.Boolean)
//  .prepareAgent(IResolvable)
//  .region(java.lang.String)
//  .relayConversationHistory(java.lang.String)
//  .timeouts(BedrockagentAgentCollaboratorTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.agentId">agentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#agent_id BedrockagentAgentCollaborator#agent_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.collaborationInstruction">collaborationInstruction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#collaboration_instruction BedrockagentAgentCollaborator#collaboration_instruction}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.collaboratorName">collaboratorName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#collaborator_name BedrockagentAgentCollaborator#collaborator_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.agentDescriptor">agentDescriptor</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor">BedrockagentAgentCollaboratorAgentDescriptor</a>></code> | agent_descriptor block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.agentVersion">agentVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#agent_version BedrockagentAgentCollaborator#agent_version}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.prepareAgent">prepareAgent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#prepare_agent BedrockagentAgentCollaborator#prepare_agent}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.relayConversationHistory">relayConversationHistory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#relay_conversation_history BedrockagentAgentCollaborator#relay_conversation_history}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts">BedrockagentAgentCollaboratorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.agentId"></a>

```java
public java.lang.String getAgentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#agent_id BedrockagentAgentCollaborator#agent_id}.

---

##### `collaborationInstruction`<sup>Required</sup> <a name="collaborationInstruction" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.collaborationInstruction"></a>

```java
public java.lang.String getCollaborationInstruction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#collaboration_instruction BedrockagentAgentCollaborator#collaboration_instruction}.

---

##### `collaboratorName`<sup>Required</sup> <a name="collaboratorName" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.collaboratorName"></a>

```java
public java.lang.String getCollaboratorName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#collaborator_name BedrockagentAgentCollaborator#collaborator_name}.

---

##### `agentDescriptor`<sup>Optional</sup> <a name="agentDescriptor" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.agentDescriptor"></a>

```java
public java.lang.Object getAgentDescriptor();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor">BedrockagentAgentCollaboratorAgentDescriptor</a>>

agent_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#agent_descriptor BedrockagentAgentCollaborator#agent_descriptor}

---

##### `agentVersion`<sup>Optional</sup> <a name="agentVersion" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.agentVersion"></a>

```java
public java.lang.String getAgentVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#agent_version BedrockagentAgentCollaborator#agent_version}.

---

##### `prepareAgent`<sup>Optional</sup> <a name="prepareAgent" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.prepareAgent"></a>

```java
public java.lang.Object getPrepareAgent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#prepare_agent BedrockagentAgentCollaborator#prepare_agent}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#region BedrockagentAgentCollaborator#region}

---

##### `relayConversationHistory`<sup>Optional</sup> <a name="relayConversationHistory" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.relayConversationHistory"></a>

```java
public java.lang.String getRelayConversationHistory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#relay_conversation_history BedrockagentAgentCollaborator#relay_conversation_history}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.timeouts"></a>

```java
public BedrockagentAgentCollaboratorTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts">BedrockagentAgentCollaboratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#timeouts BedrockagentAgentCollaborator#timeouts}

---

### BedrockagentAgentCollaboratorTimeouts <a name="BedrockagentAgentCollaboratorTimeouts" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_agent_collaborator.BedrockagentAgentCollaboratorTimeouts;

BedrockagentAgentCollaboratorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#create BedrockagentAgentCollaborator#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#delete BedrockagentAgentCollaborator#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_collaborator#update BedrockagentAgentCollaborator#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentAgentCollaboratorAgentDescriptorList <a name="BedrockagentAgentCollaboratorAgentDescriptorList" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_agent_collaborator.BedrockagentAgentCollaboratorAgentDescriptorList;

new BedrockagentAgentCollaboratorAgentDescriptorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.get"></a>

```java
public BedrockagentAgentCollaboratorAgentDescriptorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor">BedrockagentAgentCollaboratorAgentDescriptor</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor">BedrockagentAgentCollaboratorAgentDescriptor</a>>

---


### BedrockagentAgentCollaboratorAgentDescriptorOutputReference <a name="BedrockagentAgentCollaboratorAgentDescriptorOutputReference" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_agent_collaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference;

new BedrockagentAgentCollaboratorAgentDescriptorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.aliasArnInput">aliasArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.aliasArn">aliasArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor">BedrockagentAgentCollaboratorAgentDescriptor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aliasArnInput`<sup>Optional</sup> <a name="aliasArnInput" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.aliasArnInput"></a>

```java
public java.lang.String getAliasArnInput();
```

- *Type:* java.lang.String

---

##### `aliasArn`<sup>Required</sup> <a name="aliasArn" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.aliasArn"></a>

```java
public java.lang.String getAliasArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor">BedrockagentAgentCollaboratorAgentDescriptor</a>

---


### BedrockagentAgentCollaboratorTimeoutsOutputReference <a name="BedrockagentAgentCollaboratorTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_agent_collaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference;

new BedrockagentAgentCollaboratorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts">BedrockagentAgentCollaboratorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts">BedrockagentAgentCollaboratorTimeouts</a>

---



