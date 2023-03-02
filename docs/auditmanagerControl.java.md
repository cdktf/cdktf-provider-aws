# `auditmanagerControl` Submodule <a name="`auditmanagerControl` Submodule" id="@cdktf/provider-aws.auditmanagerControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuditmanagerControl <a name="AuditmanagerControl" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control aws_auditmanager_control}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_control.AuditmanagerControl;

AuditmanagerControl.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .actionPlanInstructions(java.lang.String)
//  .actionPlanTitle(java.lang.String)
//  .controlMappingSources(IResolvable)
//  .controlMappingSources(java.util.List<AuditmanagerControlControlMappingSources>)
//  .description(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .testingInformation(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#name AuditmanagerControl#name}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.actionPlanInstructions">actionPlanInstructions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#action_plan_instructions AuditmanagerControl#action_plan_instructions}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.actionPlanTitle">actionPlanTitle</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#action_plan_title AuditmanagerControl#action_plan_title}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.controlMappingSources">controlMappingSources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>></code> | control_mapping_sources block. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#description AuditmanagerControl#description}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#tags AuditmanagerControl#tags}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.testingInformation">testingInformation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#testing_information AuditmanagerControl#testing_information}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#name AuditmanagerControl#name}.

---

##### `actionPlanInstructions`<sup>Optional</sup> <a name="actionPlanInstructions" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.actionPlanInstructions"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#action_plan_instructions AuditmanagerControl#action_plan_instructions}.

---

##### `actionPlanTitle`<sup>Optional</sup> <a name="actionPlanTitle" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.actionPlanTitle"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#action_plan_title AuditmanagerControl#action_plan_title}.

---

##### `controlMappingSources`<sup>Optional</sup> <a name="controlMappingSources" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.controlMappingSources"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>>

control_mapping_sources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#control_mapping_sources AuditmanagerControl#control_mapping_sources}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#description AuditmanagerControl#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#tags AuditmanagerControl#tags}.

---

##### `testingInformation`<sup>Optional</sup> <a name="testingInformation" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.Initializer.parameter.testingInformation"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#testing_information AuditmanagerControl#testing_information}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.putControlMappingSources">putControlMappingSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetActionPlanInstructions">resetActionPlanInstructions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetActionPlanTitle">resetActionPlanTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetControlMappingSources">resetControlMappingSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetTestingInformation">resetTestingInformation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putControlMappingSources` <a name="putControlMappingSources" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.putControlMappingSources"></a>

```java
public void putControlMappingSources(IResolvable OR java.util.List<AuditmanagerControlControlMappingSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.putControlMappingSources.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>>

---

##### `resetActionPlanInstructions` <a name="resetActionPlanInstructions" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetActionPlanInstructions"></a>

```java
public void resetActionPlanInstructions()
```

##### `resetActionPlanTitle` <a name="resetActionPlanTitle" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetActionPlanTitle"></a>

```java
public void resetActionPlanTitle()
```

##### `resetControlMappingSources` <a name="resetControlMappingSources" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetControlMappingSources"></a>

```java
public void resetControlMappingSources()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetTags"></a>

```java
public void resetTags()
```

##### `resetTestingInformation` <a name="resetTestingInformation" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.resetTestingInformation"></a>

```java
public void resetTestingInformation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_control.AuditmanagerControl;

AuditmanagerControl.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_control.AuditmanagerControl;

AuditmanagerControl.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_control.AuditmanagerControl;

AuditmanagerControl.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.controlMappingSources">controlMappingSources</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList">AuditmanagerControlControlMappingSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.actionPlanInstructionsInput">actionPlanInstructionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.actionPlanTitleInput">actionPlanTitleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.controlMappingSourcesInput">controlMappingSourcesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.testingInformationInput">testingInformationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.actionPlanInstructions">actionPlanInstructions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.actionPlanTitle">actionPlanTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.testingInformation">testingInformation</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `controlMappingSources`<sup>Required</sup> <a name="controlMappingSources" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.controlMappingSources"></a>

```java
public AuditmanagerControlControlMappingSourcesList getControlMappingSources();
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList">AuditmanagerControlControlMappingSourcesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `actionPlanInstructionsInput`<sup>Optional</sup> <a name="actionPlanInstructionsInput" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.actionPlanInstructionsInput"></a>

```java
public java.lang.String getActionPlanInstructionsInput();
```

- *Type:* java.lang.String

---

##### `actionPlanTitleInput`<sup>Optional</sup> <a name="actionPlanTitleInput" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.actionPlanTitleInput"></a>

```java
public java.lang.String getActionPlanTitleInput();
```

- *Type:* java.lang.String

---

##### `controlMappingSourcesInput`<sup>Optional</sup> <a name="controlMappingSourcesInput" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.controlMappingSourcesInput"></a>

```java
public java.lang.Object getControlMappingSourcesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `testingInformationInput`<sup>Optional</sup> <a name="testingInformationInput" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.testingInformationInput"></a>

```java
public java.lang.String getTestingInformationInput();
```

- *Type:* java.lang.String

---

##### `actionPlanInstructions`<sup>Required</sup> <a name="actionPlanInstructions" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.actionPlanInstructions"></a>

```java
public java.lang.String getActionPlanInstructions();
```

- *Type:* java.lang.String

---

##### `actionPlanTitle`<sup>Required</sup> <a name="actionPlanTitle" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.actionPlanTitle"></a>

```java
public java.lang.String getActionPlanTitle();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `testingInformation`<sup>Required</sup> <a name="testingInformation" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.testingInformation"></a>

```java
public java.lang.String getTestingInformation();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControl.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AuditmanagerControlConfig <a name="AuditmanagerControlConfig" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_control.AuditmanagerControlConfig;

AuditmanagerControlConfig.builder()
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
    .name(java.lang.String)
//  .actionPlanInstructions(java.lang.String)
//  .actionPlanTitle(java.lang.String)
//  .controlMappingSources(IResolvable)
//  .controlMappingSources(java.util.List<AuditmanagerControlControlMappingSources>)
//  .description(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .testingInformation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#name AuditmanagerControl#name}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.actionPlanInstructions">actionPlanInstructions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#action_plan_instructions AuditmanagerControl#action_plan_instructions}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.actionPlanTitle">actionPlanTitle</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#action_plan_title AuditmanagerControl#action_plan_title}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.controlMappingSources">controlMappingSources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>></code> | control_mapping_sources block. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#description AuditmanagerControl#description}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#tags AuditmanagerControl#tags}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.testingInformation">testingInformation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#testing_information AuditmanagerControl#testing_information}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#name AuditmanagerControl#name}.

---

##### `actionPlanInstructions`<sup>Optional</sup> <a name="actionPlanInstructions" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.actionPlanInstructions"></a>

```java
public java.lang.String getActionPlanInstructions();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#action_plan_instructions AuditmanagerControl#action_plan_instructions}.

---

##### `actionPlanTitle`<sup>Optional</sup> <a name="actionPlanTitle" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.actionPlanTitle"></a>

```java
public java.lang.String getActionPlanTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#action_plan_title AuditmanagerControl#action_plan_title}.

---

##### `controlMappingSources`<sup>Optional</sup> <a name="controlMappingSources" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.controlMappingSources"></a>

```java
public java.lang.Object getControlMappingSources();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>>

control_mapping_sources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#control_mapping_sources AuditmanagerControl#control_mapping_sources}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#description AuditmanagerControl#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#tags AuditmanagerControl#tags}.

---

##### `testingInformation`<sup>Optional</sup> <a name="testingInformation" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlConfig.property.testingInformation"></a>

```java
public java.lang.String getTestingInformation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#testing_information AuditmanagerControl#testing_information}.

---

### AuditmanagerControlControlMappingSources <a name="AuditmanagerControlControlMappingSources" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_control.AuditmanagerControlControlMappingSources;

AuditmanagerControlControlMappingSources.builder()
    .sourceName(java.lang.String)
    .sourceSetUpOption(java.lang.String)
    .sourceType(java.lang.String)
//  .sourceDescription(java.lang.String)
//  .sourceFrequency(java.lang.String)
//  .sourceKeyword(IResolvable)
//  .sourceKeyword(java.util.List<AuditmanagerControlControlMappingSourcesSourceKeyword>)
//  .troubleshootingText(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceName">sourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#source_name AuditmanagerControl#source_name}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceSetUpOption">sourceSetUpOption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#source_set_up_option AuditmanagerControl#source_set_up_option}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#source_type AuditmanagerControl#source_type}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceDescription">sourceDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#source_description AuditmanagerControl#source_description}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceFrequency">sourceFrequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#source_frequency AuditmanagerControl#source_frequency}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceKeyword">sourceKeyword</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a>></code> | source_keyword block. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.troubleshootingText">troubleshootingText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#troubleshooting_text AuditmanagerControl#troubleshooting_text}. |

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceName"></a>

```java
public java.lang.String getSourceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#source_name AuditmanagerControl#source_name}.

---

##### `sourceSetUpOption`<sup>Required</sup> <a name="sourceSetUpOption" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceSetUpOption"></a>

```java
public java.lang.String getSourceSetUpOption();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#source_set_up_option AuditmanagerControl#source_set_up_option}.

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#source_type AuditmanagerControl#source_type}.

---

##### `sourceDescription`<sup>Optional</sup> <a name="sourceDescription" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceDescription"></a>

```java
public java.lang.String getSourceDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#source_description AuditmanagerControl#source_description}.

---

##### `sourceFrequency`<sup>Optional</sup> <a name="sourceFrequency" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceFrequency"></a>

```java
public java.lang.String getSourceFrequency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#source_frequency AuditmanagerControl#source_frequency}.

---

##### `sourceKeyword`<sup>Optional</sup> <a name="sourceKeyword" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.sourceKeyword"></a>

```java
public java.lang.Object getSourceKeyword();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a>>

source_keyword block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#source_keyword AuditmanagerControl#source_keyword}

---

##### `troubleshootingText`<sup>Optional</sup> <a name="troubleshootingText" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources.property.troubleshootingText"></a>

```java
public java.lang.String getTroubleshootingText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#troubleshooting_text AuditmanagerControl#troubleshooting_text}.

---

### AuditmanagerControlControlMappingSourcesSourceKeyword <a name="AuditmanagerControlControlMappingSourcesSourceKeyword" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_control.AuditmanagerControlControlMappingSourcesSourceKeyword;

AuditmanagerControlControlMappingSourcesSourceKeyword.builder()
    .keywordInputType(java.lang.String)
    .keywordValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword.property.keywordInputType">keywordInputType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#keyword_input_type AuditmanagerControl#keyword_input_type}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword.property.keywordValue">keywordValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#keyword_value AuditmanagerControl#keyword_value}. |

---

##### `keywordInputType`<sup>Required</sup> <a name="keywordInputType" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword.property.keywordInputType"></a>

```java
public java.lang.String getKeywordInputType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#keyword_input_type AuditmanagerControl#keyword_input_type}.

---

##### `keywordValue`<sup>Required</sup> <a name="keywordValue" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword.property.keywordValue"></a>

```java
public java.lang.String getKeywordValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_control#keyword_value AuditmanagerControl#keyword_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AuditmanagerControlControlMappingSourcesList <a name="AuditmanagerControlControlMappingSourcesList" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_control.AuditmanagerControlControlMappingSourcesList;

new AuditmanagerControlControlMappingSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.get"></a>

```java
public AuditmanagerControlControlMappingSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a>>

---


### AuditmanagerControlControlMappingSourcesOutputReference <a name="AuditmanagerControlControlMappingSourcesOutputReference" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_control.AuditmanagerControlControlMappingSourcesOutputReference;

new AuditmanagerControlControlMappingSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.putSourceKeyword">putSourceKeyword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resetSourceDescription">resetSourceDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resetSourceFrequency">resetSourceFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resetSourceKeyword">resetSourceKeyword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resetTroubleshootingText">resetTroubleshootingText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourceKeyword` <a name="putSourceKeyword" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.putSourceKeyword"></a>

```java
public void putSourceKeyword(IResolvable OR java.util.List<AuditmanagerControlControlMappingSourcesSourceKeyword> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.putSourceKeyword.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a>>

---

##### `resetSourceDescription` <a name="resetSourceDescription" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resetSourceDescription"></a>

```java
public void resetSourceDescription()
```

##### `resetSourceFrequency` <a name="resetSourceFrequency" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resetSourceFrequency"></a>

```java
public void resetSourceFrequency()
```

##### `resetSourceKeyword` <a name="resetSourceKeyword" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resetSourceKeyword"></a>

```java
public void resetSourceKeyword()
```

##### `resetTroubleshootingText` <a name="resetTroubleshootingText" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.resetTroubleshootingText"></a>

```java
public void resetTroubleshootingText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceId">sourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceKeyword">sourceKeyword</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList">AuditmanagerControlControlMappingSourcesSourceKeywordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceDescriptionInput">sourceDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceFrequencyInput">sourceFrequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceKeywordInput">sourceKeywordInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceNameInput">sourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceSetUpOptionInput">sourceSetUpOptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceTypeInput">sourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.troubleshootingTextInput">troubleshootingTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceDescription">sourceDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceFrequency">sourceFrequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceName">sourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceSetUpOption">sourceSetUpOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.troubleshootingText">troubleshootingText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceId"></a>

```java
public java.lang.String getSourceId();
```

- *Type:* java.lang.String

---

##### `sourceKeyword`<sup>Required</sup> <a name="sourceKeyword" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceKeyword"></a>

```java
public AuditmanagerControlControlMappingSourcesSourceKeywordList getSourceKeyword();
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList">AuditmanagerControlControlMappingSourcesSourceKeywordList</a>

---

##### `sourceDescriptionInput`<sup>Optional</sup> <a name="sourceDescriptionInput" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceDescriptionInput"></a>

```java
public java.lang.String getSourceDescriptionInput();
```

- *Type:* java.lang.String

---

##### `sourceFrequencyInput`<sup>Optional</sup> <a name="sourceFrequencyInput" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceFrequencyInput"></a>

```java
public java.lang.String getSourceFrequencyInput();
```

- *Type:* java.lang.String

---

##### `sourceKeywordInput`<sup>Optional</sup> <a name="sourceKeywordInput" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceKeywordInput"></a>

```java
public java.lang.Object getSourceKeywordInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a>>

---

##### `sourceNameInput`<sup>Optional</sup> <a name="sourceNameInput" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceNameInput"></a>

```java
public java.lang.String getSourceNameInput();
```

- *Type:* java.lang.String

---

##### `sourceSetUpOptionInput`<sup>Optional</sup> <a name="sourceSetUpOptionInput" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceSetUpOptionInput"></a>

```java
public java.lang.String getSourceSetUpOptionInput();
```

- *Type:* java.lang.String

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceTypeInput"></a>

```java
public java.lang.String getSourceTypeInput();
```

- *Type:* java.lang.String

---

##### `troubleshootingTextInput`<sup>Optional</sup> <a name="troubleshootingTextInput" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.troubleshootingTextInput"></a>

```java
public java.lang.String getTroubleshootingTextInput();
```

- *Type:* java.lang.String

---

##### `sourceDescription`<sup>Required</sup> <a name="sourceDescription" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceDescription"></a>

```java
public java.lang.String getSourceDescription();
```

- *Type:* java.lang.String

---

##### `sourceFrequency`<sup>Required</sup> <a name="sourceFrequency" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceFrequency"></a>

```java
public java.lang.String getSourceFrequency();
```

- *Type:* java.lang.String

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceName"></a>

```java
public java.lang.String getSourceName();
```

- *Type:* java.lang.String

---

##### `sourceSetUpOption`<sup>Required</sup> <a name="sourceSetUpOption" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceSetUpOption"></a>

```java
public java.lang.String getSourceSetUpOption();
```

- *Type:* java.lang.String

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `troubleshootingText`<sup>Required</sup> <a name="troubleshootingText" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.troubleshootingText"></a>

```java
public java.lang.String getTroubleshootingText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSources">AuditmanagerControlControlMappingSources</a> OR com.hashicorp.cdktf.IResolvable

---


### AuditmanagerControlControlMappingSourcesSourceKeywordList <a name="AuditmanagerControlControlMappingSourcesSourceKeywordList" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_control.AuditmanagerControlControlMappingSourcesSourceKeywordList;

new AuditmanagerControlControlMappingSourcesSourceKeywordList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.get"></a>

```java
public AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a>>

---


### AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference <a name="AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_control.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference;

new AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordInputTypeInput">keywordInputTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordValueInput">keywordValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordInputType">keywordInputType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordValue">keywordValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keywordInputTypeInput`<sup>Optional</sup> <a name="keywordInputTypeInput" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordInputTypeInput"></a>

```java
public java.lang.String getKeywordInputTypeInput();
```

- *Type:* java.lang.String

---

##### `keywordValueInput`<sup>Optional</sup> <a name="keywordValueInput" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordValueInput"></a>

```java
public java.lang.String getKeywordValueInput();
```

- *Type:* java.lang.String

---

##### `keywordInputType`<sup>Required</sup> <a name="keywordInputType" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordInputType"></a>

```java
public java.lang.String getKeywordInputType();
```

- *Type:* java.lang.String

---

##### `keywordValue`<sup>Required</sup> <a name="keywordValue" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordValue"></a>

```java
public java.lang.String getKeywordValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerControl.AuditmanagerControlControlMappingSourcesSourceKeyword">AuditmanagerControlControlMappingSourcesSourceKeyword</a> OR com.hashicorp.cdktf.IResolvable

---



