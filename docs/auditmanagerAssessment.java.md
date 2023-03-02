# `auditmanagerAssessment` Submodule <a name="`auditmanagerAssessment` Submodule" id="@cdktf/provider-aws.auditmanagerAssessment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuditmanagerAssessment <a name="AuditmanagerAssessment" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment aws_auditmanager_assessment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_assessment.AuditmanagerAssessment;

AuditmanagerAssessment.Builder.create(Construct scope, java.lang.String id)
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
    .frameworkId(java.lang.String)
    .name(java.lang.String)
    .roles(IResolvable)
    .roles(java.util.List<AuditmanagerAssessmentRoles>)
//  .assessmentReportsDestination(IResolvable)
//  .assessmentReportsDestination(java.util.List<AuditmanagerAssessmentAssessmentReportsDestination>)
//  .description(java.lang.String)
//  .scope(IResolvable)
//  .scope(java.util.List<AuditmanagerAssessmentScope>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.frameworkId">frameworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#framework_id AuditmanagerAssessment#framework_id}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#name AuditmanagerAssessment#name}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.roles">roles</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#roles AuditmanagerAssessment#roles}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.assessmentReportsDestination">assessmentReportsDestination</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a>></code> | assessment_reports_destination block. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#description AuditmanagerAssessment#description}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.scope">scope</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a>></code> | scope block. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#tags AuditmanagerAssessment#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `frameworkId`<sup>Required</sup> <a name="frameworkId" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.frameworkId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#framework_id AuditmanagerAssessment#framework_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#name AuditmanagerAssessment#name}.

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.roles"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#roles AuditmanagerAssessment#roles}.

---

##### `assessmentReportsDestination`<sup>Optional</sup> <a name="assessmentReportsDestination" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.assessmentReportsDestination"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a>>

assessment_reports_destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#assessment_reports_destination AuditmanagerAssessment#assessment_reports_destination}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#description AuditmanagerAssessment#description}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.scope"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a>>

scope block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#scope AuditmanagerAssessment#scope}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#tags AuditmanagerAssessment#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.putAssessmentReportsDestination">putAssessmentReportsDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.putRoles">putRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.putScope">putScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.resetAssessmentReportsDestination">resetAssessmentReportsDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAssessmentReportsDestination` <a name="putAssessmentReportsDestination" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.putAssessmentReportsDestination"></a>

```java
public void putAssessmentReportsDestination(IResolvable OR java.util.List<AuditmanagerAssessmentAssessmentReportsDestination> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.putAssessmentReportsDestination.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a>>

---

##### `putRoles` <a name="putRoles" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.putRoles"></a>

```java
public void putRoles(IResolvable OR java.util.List<AuditmanagerAssessmentRoles> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.putRoles.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>>

---

##### `putScope` <a name="putScope" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.putScope"></a>

```java
public void putScope(IResolvable OR java.util.List<AuditmanagerAssessmentScope> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.putScope.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a>>

---

##### `resetAssessmentReportsDestination` <a name="resetAssessmentReportsDestination" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.resetAssessmentReportsDestination"></a>

```java
public void resetAssessmentReportsDestination()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.resetScope"></a>

```java
public void resetScope()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_assessment.AuditmanagerAssessment;

AuditmanagerAssessment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_assessment.AuditmanagerAssessment;

AuditmanagerAssessment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_assessment.AuditmanagerAssessment;

AuditmanagerAssessment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.assessmentReportsDestination">assessmentReportsDestination</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList">AuditmanagerAssessmentAssessmentReportsDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList">AuditmanagerAssessmentRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.rolesAll">rolesAll</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList">AuditmanagerAssessmentRolesAllList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList">AuditmanagerAssessmentScopeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.assessmentReportsDestinationInput">assessmentReportsDestinationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.frameworkIdInput">frameworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.rolesInput">rolesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.scopeInput">scopeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.frameworkId">frameworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `assessmentReportsDestination`<sup>Required</sup> <a name="assessmentReportsDestination" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.assessmentReportsDestination"></a>

```java
public AuditmanagerAssessmentAssessmentReportsDestinationList getAssessmentReportsDestination();
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList">AuditmanagerAssessmentAssessmentReportsDestinationList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.roles"></a>

```java
public AuditmanagerAssessmentRolesList getRoles();
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList">AuditmanagerAssessmentRolesList</a>

---

##### `rolesAll`<sup>Required</sup> <a name="rolesAll" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.rolesAll"></a>

```java
public AuditmanagerAssessmentRolesAllList getRolesAll();
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList">AuditmanagerAssessmentRolesAllList</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.scope"></a>

```java
public AuditmanagerAssessmentScopeList getScope();
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList">AuditmanagerAssessmentScopeList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `assessmentReportsDestinationInput`<sup>Optional</sup> <a name="assessmentReportsDestinationInput" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.assessmentReportsDestinationInput"></a>

```java
public java.lang.Object getAssessmentReportsDestinationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `frameworkIdInput`<sup>Optional</sup> <a name="frameworkIdInput" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.frameworkIdInput"></a>

```java
public java.lang.String getFrameworkIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.rolesInput"></a>

```java
public java.lang.Object getRolesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>>

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.scopeInput"></a>

```java
public java.lang.Object getScopeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `frameworkId`<sup>Required</sup> <a name="frameworkId" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.frameworkId"></a>

```java
public java.lang.String getFrameworkId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AuditmanagerAssessmentAssessmentReportsDestination <a name="AuditmanagerAssessmentAssessmentReportsDestination" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_assessment.AuditmanagerAssessmentAssessmentReportsDestination;

AuditmanagerAssessmentAssessmentReportsDestination.builder()
    .destination(java.lang.String)
    .destinationType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination.property.destination">destination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#destination AuditmanagerAssessment#destination}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination.property.destinationType">destinationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#destination_type AuditmanagerAssessment#destination_type}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#destination AuditmanagerAssessment#destination}.

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination.property.destinationType"></a>

```java
public java.lang.String getDestinationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#destination_type AuditmanagerAssessment#destination_type}.

---

### AuditmanagerAssessmentConfig <a name="AuditmanagerAssessmentConfig" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_assessment.AuditmanagerAssessmentConfig;

AuditmanagerAssessmentConfig.builder()
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
    .frameworkId(java.lang.String)
    .name(java.lang.String)
    .roles(IResolvable)
    .roles(java.util.List<AuditmanagerAssessmentRoles>)
//  .assessmentReportsDestination(IResolvable)
//  .assessmentReportsDestination(java.util.List<AuditmanagerAssessmentAssessmentReportsDestination>)
//  .description(java.lang.String)
//  .scope(IResolvable)
//  .scope(java.util.List<AuditmanagerAssessmentScope>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.frameworkId">frameworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#framework_id AuditmanagerAssessment#framework_id}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#name AuditmanagerAssessment#name}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.roles">roles</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#roles AuditmanagerAssessment#roles}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.assessmentReportsDestination">assessmentReportsDestination</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a>></code> | assessment_reports_destination block. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#description AuditmanagerAssessment#description}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.scope">scope</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a>></code> | scope block. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#tags AuditmanagerAssessment#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `frameworkId`<sup>Required</sup> <a name="frameworkId" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.frameworkId"></a>

```java
public java.lang.String getFrameworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#framework_id AuditmanagerAssessment#framework_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#name AuditmanagerAssessment#name}.

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.roles"></a>

```java
public java.lang.Object getRoles();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#roles AuditmanagerAssessment#roles}.

---

##### `assessmentReportsDestination`<sup>Optional</sup> <a name="assessmentReportsDestination" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.assessmentReportsDestination"></a>

```java
public java.lang.Object getAssessmentReportsDestination();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a>>

assessment_reports_destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#assessment_reports_destination AuditmanagerAssessment#assessment_reports_destination}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#description AuditmanagerAssessment#description}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.scope"></a>

```java
public java.lang.Object getScope();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a>>

scope block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#scope AuditmanagerAssessment#scope}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#tags AuditmanagerAssessment#tags}.

---

### AuditmanagerAssessmentRoles <a name="AuditmanagerAssessmentRoles" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_assessment.AuditmanagerAssessmentRoles;

AuditmanagerAssessmentRoles.builder()
    .roleArn(java.lang.String)
    .roleType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#role_arn AuditmanagerAssessment#role_arn}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles.property.roleType">roleType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#role_type AuditmanagerAssessment#role_type}. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#role_arn AuditmanagerAssessment#role_arn}.

---

##### `roleType`<sup>Required</sup> <a name="roleType" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles.property.roleType"></a>

```java
public java.lang.String getRoleType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#role_type AuditmanagerAssessment#role_type}.

---

### AuditmanagerAssessmentRolesAll <a name="AuditmanagerAssessmentRolesAll" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAll"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAll.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_assessment.AuditmanagerAssessmentRolesAll;

AuditmanagerAssessmentRolesAll.builder()
    .build();
```


### AuditmanagerAssessmentScope <a name="AuditmanagerAssessmentScope" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_assessment.AuditmanagerAssessmentScope;

AuditmanagerAssessmentScope.builder()
//  .awsAccounts(IResolvable)
//  .awsAccounts(java.util.List<AuditmanagerAssessmentScopeAwsAccounts>)
//  .awsServices(IResolvable)
//  .awsServices(java.util.List<AuditmanagerAssessmentScopeAwsServices>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope.property.awsAccounts">awsAccounts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>></code> | aws_accounts block. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope.property.awsServices">awsServices</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>></code> | aws_services block. |

---

##### `awsAccounts`<sup>Optional</sup> <a name="awsAccounts" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope.property.awsAccounts"></a>

```java
public java.lang.Object getAwsAccounts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>>

aws_accounts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#aws_accounts AuditmanagerAssessment#aws_accounts}

---

##### `awsServices`<sup>Optional</sup> <a name="awsServices" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope.property.awsServices"></a>

```java
public java.lang.Object getAwsServices();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>>

aws_services block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#aws_services AuditmanagerAssessment#aws_services}

---

### AuditmanagerAssessmentScopeAwsAccounts <a name="AuditmanagerAssessmentScopeAwsAccounts" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_assessment.AuditmanagerAssessmentScopeAwsAccounts;

AuditmanagerAssessmentScopeAwsAccounts.builder()
    .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#id AuditmanagerAssessment#id}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#id AuditmanagerAssessment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AuditmanagerAssessmentScopeAwsServices <a name="AuditmanagerAssessmentScopeAwsServices" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_assessment.AuditmanagerAssessmentScopeAwsServices;

AuditmanagerAssessmentScopeAwsServices.builder()
    .serviceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#service_name AuditmanagerAssessment#service_name}. |

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#service_name AuditmanagerAssessment#service_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### AuditmanagerAssessmentAssessmentReportsDestinationList <a name="AuditmanagerAssessmentAssessmentReportsDestinationList" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_assessment.AuditmanagerAssessmentAssessmentReportsDestinationList;

new AuditmanagerAssessmentAssessmentReportsDestinationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.get"></a>

```java
public AuditmanagerAssessmentAssessmentReportsDestinationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a>>

---


### AuditmanagerAssessmentAssessmentReportsDestinationOutputReference <a name="AuditmanagerAssessmentAssessmentReportsDestinationOutputReference" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_assessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference;

new AuditmanagerAssessmentAssessmentReportsDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationTypeInput">destinationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationType">destinationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="destinationTypeInput" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationTypeInput"></a>

```java
public java.lang.String getDestinationTypeInput();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationType"></a>

```java
public java.lang.String getDestinationType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a> OR com.hashicorp.cdktf.IResolvable

---


### AuditmanagerAssessmentRolesAllList <a name="AuditmanagerAssessmentRolesAllList" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_assessment.AuditmanagerAssessmentRolesAllList;

new AuditmanagerAssessmentRolesAllList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.get"></a>

```java
public AuditmanagerAssessmentRolesAllOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### AuditmanagerAssessmentRolesAllOutputReference <a name="AuditmanagerAssessmentRolesAllOutputReference" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_assessment.AuditmanagerAssessmentRolesAllOutputReference;

new AuditmanagerAssessmentRolesAllOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.property.roleType">roleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAll">AuditmanagerAssessmentRolesAll</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `roleType`<sup>Required</sup> <a name="roleType" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.property.roleType"></a>

```java
public java.lang.String getRoleType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.property.internalValue"></a>

```java
public AuditmanagerAssessmentRolesAll getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAll">AuditmanagerAssessmentRolesAll</a>

---


### AuditmanagerAssessmentRolesList <a name="AuditmanagerAssessmentRolesList" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_assessment.AuditmanagerAssessmentRolesList;

new AuditmanagerAssessmentRolesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.get"></a>

```java
public AuditmanagerAssessmentRolesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>>

---


### AuditmanagerAssessmentRolesOutputReference <a name="AuditmanagerAssessmentRolesOutputReference" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_assessment.AuditmanagerAssessmentRolesOutputReference;

new AuditmanagerAssessmentRolesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleTypeInput">roleTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleType">roleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `roleTypeInput`<sup>Optional</sup> <a name="roleTypeInput" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleTypeInput"></a>

```java
public java.lang.String getRoleTypeInput();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `roleType`<sup>Required</sup> <a name="roleType" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleType"></a>

```java
public java.lang.String getRoleType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a> OR com.hashicorp.cdktf.IResolvable

---


### AuditmanagerAssessmentScopeAwsAccountsList <a name="AuditmanagerAssessmentScopeAwsAccountsList" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_assessment.AuditmanagerAssessmentScopeAwsAccountsList;

new AuditmanagerAssessmentScopeAwsAccountsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.get"></a>

```java
public AuditmanagerAssessmentScopeAwsAccountsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>>

---


### AuditmanagerAssessmentScopeAwsAccountsOutputReference <a name="AuditmanagerAssessmentScopeAwsAccountsOutputReference" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_assessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference;

new AuditmanagerAssessmentScopeAwsAccountsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a> OR com.hashicorp.cdktf.IResolvable

---


### AuditmanagerAssessmentScopeAwsServicesList <a name="AuditmanagerAssessmentScopeAwsServicesList" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_assessment.AuditmanagerAssessmentScopeAwsServicesList;

new AuditmanagerAssessmentScopeAwsServicesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.get"></a>

```java
public AuditmanagerAssessmentScopeAwsServicesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>>

---


### AuditmanagerAssessmentScopeAwsServicesOutputReference <a name="AuditmanagerAssessmentScopeAwsServicesOutputReference" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_assessment.AuditmanagerAssessmentScopeAwsServicesOutputReference;

new AuditmanagerAssessmentScopeAwsServicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a> OR com.hashicorp.cdktf.IResolvable

---


### AuditmanagerAssessmentScopeList <a name="AuditmanagerAssessmentScopeList" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_assessment.AuditmanagerAssessmentScopeList;

new AuditmanagerAssessmentScopeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.get"></a>

```java
public AuditmanagerAssessmentScopeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a>>

---


### AuditmanagerAssessmentScopeOutputReference <a name="AuditmanagerAssessmentScopeOutputReference" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_assessment.AuditmanagerAssessmentScopeOutputReference;

new AuditmanagerAssessmentScopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsAccounts">putAwsAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsServices">putAwsServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resetAwsAccounts">resetAwsAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resetAwsServices">resetAwsServices</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsAccounts` <a name="putAwsAccounts" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsAccounts"></a>

```java
public void putAwsAccounts(IResolvable OR java.util.List<AuditmanagerAssessmentScopeAwsAccounts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsAccounts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>>

---

##### `putAwsServices` <a name="putAwsServices" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsServices"></a>

```java
public void putAwsServices(IResolvable OR java.util.List<AuditmanagerAssessmentScopeAwsServices> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsServices.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>>

---

##### `resetAwsAccounts` <a name="resetAwsAccounts" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resetAwsAccounts"></a>

```java
public void resetAwsAccounts()
```

##### `resetAwsServices` <a name="resetAwsServices" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resetAwsServices"></a>

```java
public void resetAwsServices()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsAccounts">awsAccounts</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList">AuditmanagerAssessmentScopeAwsAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsServices">awsServices</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList">AuditmanagerAssessmentScopeAwsServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsAccountsInput">awsAccountsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsServicesInput">awsServicesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsAccounts`<sup>Required</sup> <a name="awsAccounts" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsAccounts"></a>

```java
public AuditmanagerAssessmentScopeAwsAccountsList getAwsAccounts();
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList">AuditmanagerAssessmentScopeAwsAccountsList</a>

---

##### `awsServices`<sup>Required</sup> <a name="awsServices" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsServices"></a>

```java
public AuditmanagerAssessmentScopeAwsServicesList getAwsServices();
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList">AuditmanagerAssessmentScopeAwsServicesList</a>

---

##### `awsAccountsInput`<sup>Optional</sup> <a name="awsAccountsInput" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsAccountsInput"></a>

```java
public java.lang.Object getAwsAccountsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>>

---

##### `awsServicesInput`<sup>Optional</sup> <a name="awsServicesInput" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsServicesInput"></a>

```java
public java.lang.Object getAwsServicesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a> OR com.hashicorp.cdktf.IResolvable

---



