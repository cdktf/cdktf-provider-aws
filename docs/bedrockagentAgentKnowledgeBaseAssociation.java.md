# `bedrockagentAgentKnowledgeBaseAssociation` Submodule <a name="`bedrockagentAgentKnowledgeBaseAssociation` Submodule" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentAgentKnowledgeBaseAssociation <a name="BedrockagentAgentKnowledgeBaseAssociation" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/bedrockagent_agent_knowledge_base_association aws_bedrockagent_agent_knowledge_base_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_agent_knowledge_base_association.BedrockagentAgentKnowledgeBaseAssociation;

BedrockagentAgentKnowledgeBaseAssociation.Builder.create(Construct scope, java.lang.String id)
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
    .description(java.lang.String)
    .knowledgeBaseId(java.lang.String)
    .knowledgeBaseState(java.lang.String)
//  .agentVersion(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.agentId">agentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/bedrockagent_agent_knowledge_base_association#agent_id BedrockagentAgentKnowledgeBaseAssociation#agent_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/bedrockagent_agent_knowledge_base_association#description BedrockagentAgentKnowledgeBaseAssociation#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.knowledgeBaseId">knowledgeBaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/bedrockagent_agent_knowledge_base_association#knowledge_base_id BedrockagentAgentKnowledgeBaseAssociation#knowledge_base_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.knowledgeBaseState">knowledgeBaseState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/bedrockagent_agent_knowledge_base_association#knowledge_base_state BedrockagentAgentKnowledgeBaseAssociation#knowledge_base_state}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.agentVersion">agentVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/bedrockagent_agent_knowledge_base_association#agent_version BedrockagentAgentKnowledgeBaseAssociation#agent_version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.agentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/bedrockagent_agent_knowledge_base_association#agent_id BedrockagentAgentKnowledgeBaseAssociation#agent_id}.

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/bedrockagent_agent_knowledge_base_association#description BedrockagentAgentKnowledgeBaseAssociation#description}.

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.knowledgeBaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/bedrockagent_agent_knowledge_base_association#knowledge_base_id BedrockagentAgentKnowledgeBaseAssociation#knowledge_base_id}.

---

##### `knowledgeBaseState`<sup>Required</sup> <a name="knowledgeBaseState" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.knowledgeBaseState"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/bedrockagent_agent_knowledge_base_association#knowledge_base_state BedrockagentAgentKnowledgeBaseAssociation#knowledge_base_state}.

---

##### `agentVersion`<sup>Optional</sup> <a name="agentVersion" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.agentVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/bedrockagent_agent_knowledge_base_association#agent_version BedrockagentAgentKnowledgeBaseAssociation#agent_version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.resetAgentVersion">resetAgentVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAgentVersion` <a name="resetAgentVersion" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.resetAgentVersion"></a>

```java
public void resetAgentVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockagentAgentKnowledgeBaseAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_agent_knowledge_base_association.BedrockagentAgentKnowledgeBaseAssociation;

BedrockagentAgentKnowledgeBaseAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_agent_knowledge_base_association.BedrockagentAgentKnowledgeBaseAssociation;

BedrockagentAgentKnowledgeBaseAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_agent_knowledge_base_association.BedrockagentAgentKnowledgeBaseAssociation;

BedrockagentAgentKnowledgeBaseAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_agent_knowledge_base_association.BedrockagentAgentKnowledgeBaseAssociation;

BedrockagentAgentKnowledgeBaseAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BedrockagentAgentKnowledgeBaseAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BedrockagentAgentKnowledgeBaseAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BedrockagentAgentKnowledgeBaseAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BedrockagentAgentKnowledgeBaseAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/bedrockagent_agent_knowledge_base_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentAgentKnowledgeBaseAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.agentIdInput">agentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.agentVersionInput">agentVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.knowledgeBaseIdInput">knowledgeBaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.knowledgeBaseStateInput">knowledgeBaseStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.agentId">agentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.agentVersion">agentVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.knowledgeBaseState">knowledgeBaseState</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `agentIdInput`<sup>Optional</sup> <a name="agentIdInput" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.agentIdInput"></a>

```java
public java.lang.String getAgentIdInput();
```

- *Type:* java.lang.String

---

##### `agentVersionInput`<sup>Optional</sup> <a name="agentVersionInput" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.agentVersionInput"></a>

```java
public java.lang.String getAgentVersionInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `knowledgeBaseIdInput`<sup>Optional</sup> <a name="knowledgeBaseIdInput" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.knowledgeBaseIdInput"></a>

```java
public java.lang.String getKnowledgeBaseIdInput();
```

- *Type:* java.lang.String

---

##### `knowledgeBaseStateInput`<sup>Optional</sup> <a name="knowledgeBaseStateInput" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.knowledgeBaseStateInput"></a>

```java
public java.lang.String getKnowledgeBaseStateInput();
```

- *Type:* java.lang.String

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.agentId"></a>

```java
public java.lang.String getAgentId();
```

- *Type:* java.lang.String

---

##### `agentVersion`<sup>Required</sup> <a name="agentVersion" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.agentVersion"></a>

```java
public java.lang.String getAgentVersion();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.knowledgeBaseId"></a>

```java
public java.lang.String getKnowledgeBaseId();
```

- *Type:* java.lang.String

---

##### `knowledgeBaseState`<sup>Required</sup> <a name="knowledgeBaseState" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.knowledgeBaseState"></a>

```java
public java.lang.String getKnowledgeBaseState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentAgentKnowledgeBaseAssociationConfig <a name="BedrockagentAgentKnowledgeBaseAssociationConfig" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.bedrockagent_agent_knowledge_base_association.BedrockagentAgentKnowledgeBaseAssociationConfig;

BedrockagentAgentKnowledgeBaseAssociationConfig.builder()
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
    .description(java.lang.String)
    .knowledgeBaseId(java.lang.String)
    .knowledgeBaseState(java.lang.String)
//  .agentVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.agentId">agentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/bedrockagent_agent_knowledge_base_association#agent_id BedrockagentAgentKnowledgeBaseAssociation#agent_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/bedrockagent_agent_knowledge_base_association#description BedrockagentAgentKnowledgeBaseAssociation#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/bedrockagent_agent_knowledge_base_association#knowledge_base_id BedrockagentAgentKnowledgeBaseAssociation#knowledge_base_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.knowledgeBaseState">knowledgeBaseState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/bedrockagent_agent_knowledge_base_association#knowledge_base_state BedrockagentAgentKnowledgeBaseAssociation#knowledge_base_state}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.agentVersion">agentVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/bedrockagent_agent_knowledge_base_association#agent_version BedrockagentAgentKnowledgeBaseAssociation#agent_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.agentId"></a>

```java
public java.lang.String getAgentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/bedrockagent_agent_knowledge_base_association#agent_id BedrockagentAgentKnowledgeBaseAssociation#agent_id}.

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/bedrockagent_agent_knowledge_base_association#description BedrockagentAgentKnowledgeBaseAssociation#description}.

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.knowledgeBaseId"></a>

```java
public java.lang.String getKnowledgeBaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/bedrockagent_agent_knowledge_base_association#knowledge_base_id BedrockagentAgentKnowledgeBaseAssociation#knowledge_base_id}.

---

##### `knowledgeBaseState`<sup>Required</sup> <a name="knowledgeBaseState" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.knowledgeBaseState"></a>

```java
public java.lang.String getKnowledgeBaseState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/bedrockagent_agent_knowledge_base_association#knowledge_base_state BedrockagentAgentKnowledgeBaseAssociation#knowledge_base_state}.

---

##### `agentVersion`<sup>Optional</sup> <a name="agentVersion" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.agentVersion"></a>

```java
public java.lang.String getAgentVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/bedrockagent_agent_knowledge_base_association#agent_version BedrockagentAgentKnowledgeBaseAssociation#agent_version}.

---



