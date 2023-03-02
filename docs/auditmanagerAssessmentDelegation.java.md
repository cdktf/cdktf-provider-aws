# `auditmanagerAssessmentDelegation` Submodule <a name="`auditmanagerAssessmentDelegation` Submodule" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuditmanagerAssessmentDelegation <a name="AuditmanagerAssessmentDelegation" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation aws_auditmanager_assessment_delegation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_assessment_delegation.AuditmanagerAssessmentDelegation;

AuditmanagerAssessmentDelegation.Builder.create(Construct scope, java.lang.String id)
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
    .controlSetId(java.lang.String)
    .roleArn(java.lang.String)
    .roleType(java.lang.String)
//  .comment(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.assessmentId">assessmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#assessment_id AuditmanagerAssessmentDelegation#assessment_id}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.controlSetId">controlSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#control_set_id AuditmanagerAssessmentDelegation#control_set_id}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#role_arn AuditmanagerAssessmentDelegation#role_arn}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.roleType">roleType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#role_type AuditmanagerAssessmentDelegation#role_type}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#comment AuditmanagerAssessmentDelegation#comment}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assessmentId`<sup>Required</sup> <a name="assessmentId" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.assessmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#assessment_id AuditmanagerAssessmentDelegation#assessment_id}.

---

##### `controlSetId`<sup>Required</sup> <a name="controlSetId" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.controlSetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#control_set_id AuditmanagerAssessmentDelegation#control_set_id}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#role_arn AuditmanagerAssessmentDelegation#role_arn}.

---

##### `roleType`<sup>Required</sup> <a name="roleType" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.roleType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#role_type AuditmanagerAssessmentDelegation#role_type}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#comment AuditmanagerAssessmentDelegation#comment}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.resetComment">resetComment</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.resetComment"></a>

```java
public void resetComment()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_assessment_delegation.AuditmanagerAssessmentDelegation;

AuditmanagerAssessmentDelegation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_assessment_delegation.AuditmanagerAssessmentDelegation;

AuditmanagerAssessmentDelegation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_assessment_delegation.AuditmanagerAssessmentDelegation;

AuditmanagerAssessmentDelegation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.delegationId">delegationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.assessmentIdInput">assessmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.controlSetIdInput">controlSetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleTypeInput">roleTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.assessmentId">assessmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.controlSetId">controlSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleType">roleType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `delegationId`<sup>Required</sup> <a name="delegationId" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.delegationId"></a>

```java
public java.lang.String getDelegationId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `assessmentIdInput`<sup>Optional</sup> <a name="assessmentIdInput" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.assessmentIdInput"></a>

```java
public java.lang.String getAssessmentIdInput();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `controlSetIdInput`<sup>Optional</sup> <a name="controlSetIdInput" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.controlSetIdInput"></a>

```java
public java.lang.String getControlSetIdInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `roleTypeInput`<sup>Optional</sup> <a name="roleTypeInput" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleTypeInput"></a>

```java
public java.lang.String getRoleTypeInput();
```

- *Type:* java.lang.String

---

##### `assessmentId`<sup>Required</sup> <a name="assessmentId" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.assessmentId"></a>

```java
public java.lang.String getAssessmentId();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `controlSetId`<sup>Required</sup> <a name="controlSetId" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.controlSetId"></a>

```java
public java.lang.String getControlSetId();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `roleType`<sup>Required</sup> <a name="roleType" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleType"></a>

```java
public java.lang.String getRoleType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AuditmanagerAssessmentDelegationConfig <a name="AuditmanagerAssessmentDelegationConfig" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_assessment_delegation.AuditmanagerAssessmentDelegationConfig;

AuditmanagerAssessmentDelegationConfig.builder()
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
    .controlSetId(java.lang.String)
    .roleArn(java.lang.String)
    .roleType(java.lang.String)
//  .comment(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.assessmentId">assessmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#assessment_id AuditmanagerAssessmentDelegation#assessment_id}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.controlSetId">controlSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#control_set_id AuditmanagerAssessmentDelegation#control_set_id}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#role_arn AuditmanagerAssessmentDelegation#role_arn}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.roleType">roleType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#role_type AuditmanagerAssessmentDelegation#role_type}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#comment AuditmanagerAssessmentDelegation#comment}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assessmentId`<sup>Required</sup> <a name="assessmentId" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.assessmentId"></a>

```java
public java.lang.String getAssessmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#assessment_id AuditmanagerAssessmentDelegation#assessment_id}.

---

##### `controlSetId`<sup>Required</sup> <a name="controlSetId" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.controlSetId"></a>

```java
public java.lang.String getControlSetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#control_set_id AuditmanagerAssessmentDelegation#control_set_id}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#role_arn AuditmanagerAssessmentDelegation#role_arn}.

---

##### `roleType`<sup>Required</sup> <a name="roleType" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.roleType"></a>

```java
public java.lang.String getRoleType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#role_type AuditmanagerAssessmentDelegation#role_type}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#comment AuditmanagerAssessmentDelegation#comment}.

---



