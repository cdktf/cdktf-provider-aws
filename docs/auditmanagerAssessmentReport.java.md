# `auditmanagerAssessmentReport` Submodule <a name="`auditmanagerAssessmentReport` Submodule" id="@cdktf/provider-aws.auditmanagerAssessmentReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuditmanagerAssessmentReport <a name="AuditmanagerAssessmentReport" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_report aws_auditmanager_assessment_report}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_assessment_report.AuditmanagerAssessmentReport;

AuditmanagerAssessmentReport.Builder.create(Construct scope, java.lang.String id)
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
    .assessmentId(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.assessmentId">assessmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_report#assessment_id AuditmanagerAssessmentReport#assessment_id}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_report#name AuditmanagerAssessmentReport#name}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_report#description AuditmanagerAssessmentReport#description}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assessmentId`<sup>Required</sup> <a name="assessmentId" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.assessmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_report#assessment_id AuditmanagerAssessmentReport#assessment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_report#name AuditmanagerAssessmentReport#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_report#description AuditmanagerAssessmentReport#description}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.resetDescription"></a>

```java
public void resetDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_assessment_report.AuditmanagerAssessmentReport;

AuditmanagerAssessmentReport.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_assessment_report.AuditmanagerAssessmentReport;

AuditmanagerAssessmentReport.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_assessment_report.AuditmanagerAssessmentReport;

AuditmanagerAssessmentReport.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.author">author</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.assessmentIdInput">assessmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.assessmentId">assessmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `author`<sup>Required</sup> <a name="author" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.author"></a>

```java
public java.lang.String getAuthor();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `assessmentIdInput`<sup>Optional</sup> <a name="assessmentIdInput" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.assessmentIdInput"></a>

```java
public java.lang.String getAssessmentIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `assessmentId`<sup>Required</sup> <a name="assessmentId" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.assessmentId"></a>

```java
public java.lang.String getAssessmentId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReport.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AuditmanagerAssessmentReportConfig <a name="AuditmanagerAssessmentReportConfig" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_assessment_report.AuditmanagerAssessmentReportConfig;

AuditmanagerAssessmentReportConfig.builder()
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
    .assessmentId(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.assessmentId">assessmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_report#assessment_id AuditmanagerAssessmentReport#assessment_id}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_report#name AuditmanagerAssessmentReport#name}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_report#description AuditmanagerAssessmentReport#description}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assessmentId`<sup>Required</sup> <a name="assessmentId" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.assessmentId"></a>

```java
public java.lang.String getAssessmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_report#assessment_id AuditmanagerAssessmentReport#assessment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_report#name AuditmanagerAssessmentReport#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.auditmanagerAssessmentReport.AuditmanagerAssessmentReportConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_report#description AuditmanagerAssessmentReport#description}.

---



