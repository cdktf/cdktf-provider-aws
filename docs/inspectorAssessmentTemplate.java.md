# `inspectorAssessmentTemplate` Submodule <a name="`inspectorAssessmentTemplate` Submodule" id="@cdktf/provider-aws.inspectorAssessmentTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InspectorAssessmentTemplate <a name="InspectorAssessmentTemplate" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template aws_inspector_assessment_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.inspector_assessment_template.InspectorAssessmentTemplate;

InspectorAssessmentTemplate.Builder.create(Construct scope, java.lang.String id)
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
    .duration(java.lang.Number)
    .name(java.lang.String)
    .rulesPackageArns(java.util.List<java.lang.String>)
    .targetArn(java.lang.String)
//  .eventSubscription(IResolvable)
//  .eventSubscription(java.util.List<InspectorAssessmentTemplateEventSubscription>)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.duration">duration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#duration InspectorAssessmentTemplate#duration}. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#name InspectorAssessmentTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.rulesPackageArns">rulesPackageArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#rules_package_arns InspectorAssessmentTemplate#rules_package_arns}. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.targetArn">targetArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#target_arn InspectorAssessmentTemplate#target_arn}. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.eventSubscription">eventSubscription</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription">InspectorAssessmentTemplateEventSubscription</a>></code> | event_subscription block. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#id InspectorAssessmentTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#tags InspectorAssessmentTemplate#tags}. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#tags_all InspectorAssessmentTemplate#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.duration"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#duration InspectorAssessmentTemplate#duration}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#name InspectorAssessmentTemplate#name}.

---

##### `rulesPackageArns`<sup>Required</sup> <a name="rulesPackageArns" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.rulesPackageArns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#rules_package_arns InspectorAssessmentTemplate#rules_package_arns}.

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.targetArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#target_arn InspectorAssessmentTemplate#target_arn}.

---

##### `eventSubscription`<sup>Optional</sup> <a name="eventSubscription" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.eventSubscription"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription">InspectorAssessmentTemplateEventSubscription</a>>

event_subscription block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#event_subscription InspectorAssessmentTemplate#event_subscription}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#id InspectorAssessmentTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#tags InspectorAssessmentTemplate#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#tags_all InspectorAssessmentTemplate#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.putEventSubscription">putEventSubscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetEventSubscription">resetEventSubscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putEventSubscription` <a name="putEventSubscription" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.putEventSubscription"></a>

```java
public void putEventSubscription(IResolvable OR java.util.List<InspectorAssessmentTemplateEventSubscription> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.putEventSubscription.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription">InspectorAssessmentTemplateEventSubscription</a>>

---

##### `resetEventSubscription` <a name="resetEventSubscription" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetEventSubscription"></a>

```java
public void resetEventSubscription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.inspector_assessment_template.InspectorAssessmentTemplate;

InspectorAssessmentTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.inspector_assessment_template.InspectorAssessmentTemplate;

InspectorAssessmentTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.inspector_assessment_template.InspectorAssessmentTemplate;

InspectorAssessmentTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.eventSubscription">eventSubscription</a></code> | <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList">InspectorAssessmentTemplateEventSubscriptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.durationInput">durationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.eventSubscriptionInput">eventSubscriptionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription">InspectorAssessmentTemplateEventSubscription</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.rulesPackageArnsInput">rulesPackageArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.targetArnInput">targetArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.duration">duration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.rulesPackageArns">rulesPackageArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.targetArn">targetArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `eventSubscription`<sup>Required</sup> <a name="eventSubscription" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.eventSubscription"></a>

```java
public InspectorAssessmentTemplateEventSubscriptionList getEventSubscription();
```

- *Type:* <a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList">InspectorAssessmentTemplateEventSubscriptionList</a>

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.durationInput"></a>

```java
public java.lang.Number getDurationInput();
```

- *Type:* java.lang.Number

---

##### `eventSubscriptionInput`<sup>Optional</sup> <a name="eventSubscriptionInput" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.eventSubscriptionInput"></a>

```java
public java.lang.Object getEventSubscriptionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription">InspectorAssessmentTemplateEventSubscription</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `rulesPackageArnsInput`<sup>Optional</sup> <a name="rulesPackageArnsInput" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.rulesPackageArnsInput"></a>

```java
public java.util.List<java.lang.String> getRulesPackageArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetArnInput`<sup>Optional</sup> <a name="targetArnInput" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.targetArnInput"></a>

```java
public java.lang.String getTargetArnInput();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.duration"></a>

```java
public java.lang.Number getDuration();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `rulesPackageArns`<sup>Required</sup> <a name="rulesPackageArns" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.rulesPackageArns"></a>

```java
public java.util.List<java.lang.String> getRulesPackageArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.targetArn"></a>

```java
public java.lang.String getTargetArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### InspectorAssessmentTemplateConfig <a name="InspectorAssessmentTemplateConfig" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.inspector_assessment_template.InspectorAssessmentTemplateConfig;

InspectorAssessmentTemplateConfig.builder()
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
    .duration(java.lang.Number)
    .name(java.lang.String)
    .rulesPackageArns(java.util.List<java.lang.String>)
    .targetArn(java.lang.String)
//  .eventSubscription(IResolvable)
//  .eventSubscription(java.util.List<InspectorAssessmentTemplateEventSubscription>)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.duration">duration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#duration InspectorAssessmentTemplate#duration}. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#name InspectorAssessmentTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.rulesPackageArns">rulesPackageArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#rules_package_arns InspectorAssessmentTemplate#rules_package_arns}. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.targetArn">targetArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#target_arn InspectorAssessmentTemplate#target_arn}. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.eventSubscription">eventSubscription</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription">InspectorAssessmentTemplateEventSubscription</a>></code> | event_subscription block. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#id InspectorAssessmentTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#tags InspectorAssessmentTemplate#tags}. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#tags_all InspectorAssessmentTemplate#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.duration"></a>

```java
public java.lang.Number getDuration();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#duration InspectorAssessmentTemplate#duration}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#name InspectorAssessmentTemplate#name}.

---

##### `rulesPackageArns`<sup>Required</sup> <a name="rulesPackageArns" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.rulesPackageArns"></a>

```java
public java.util.List<java.lang.String> getRulesPackageArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#rules_package_arns InspectorAssessmentTemplate#rules_package_arns}.

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.targetArn"></a>

```java
public java.lang.String getTargetArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#target_arn InspectorAssessmentTemplate#target_arn}.

---

##### `eventSubscription`<sup>Optional</sup> <a name="eventSubscription" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.eventSubscription"></a>

```java
public java.lang.Object getEventSubscription();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription">InspectorAssessmentTemplateEventSubscription</a>>

event_subscription block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#event_subscription InspectorAssessmentTemplate#event_subscription}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#id InspectorAssessmentTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#tags InspectorAssessmentTemplate#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#tags_all InspectorAssessmentTemplate#tags_all}.

---

### InspectorAssessmentTemplateEventSubscription <a name="InspectorAssessmentTemplateEventSubscription" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.inspector_assessment_template.InspectorAssessmentTemplateEventSubscription;

InspectorAssessmentTemplateEventSubscription.builder()
    .event(java.lang.String)
    .topicArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription.property.event">event</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#event InspectorAssessmentTemplate#event}. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#topic_arn InspectorAssessmentTemplate#topic_arn}. |

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription.property.event"></a>

```java
public java.lang.String getEvent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#event InspectorAssessmentTemplate#event}.

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template#topic_arn InspectorAssessmentTemplate#topic_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### InspectorAssessmentTemplateEventSubscriptionList <a name="InspectorAssessmentTemplateEventSubscriptionList" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.inspector_assessment_template.InspectorAssessmentTemplateEventSubscriptionList;

new InspectorAssessmentTemplateEventSubscriptionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.get"></a>

```java
public InspectorAssessmentTemplateEventSubscriptionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription">InspectorAssessmentTemplateEventSubscription</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription">InspectorAssessmentTemplateEventSubscription</a>>

---


### InspectorAssessmentTemplateEventSubscriptionOutputReference <a name="InspectorAssessmentTemplateEventSubscriptionOutputReference" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.inspector_assessment_template.InspectorAssessmentTemplateEventSubscriptionOutputReference;

new InspectorAssessmentTemplateEventSubscriptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.eventInput">eventInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.topicArnInput">topicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.event">event</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription">InspectorAssessmentTemplateEventSubscription</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventInput`<sup>Optional</sup> <a name="eventInput" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.eventInput"></a>

```java
public java.lang.String getEventInput();
```

- *Type:* java.lang.String

---

##### `topicArnInput`<sup>Optional</sup> <a name="topicArnInput" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.topicArnInput"></a>

```java
public java.lang.String getTopicArnInput();
```

- *Type:* java.lang.String

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.event"></a>

```java
public java.lang.String getEvent();
```

- *Type:* java.lang.String

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscriptionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.inspectorAssessmentTemplate.InspectorAssessmentTemplateEventSubscription">InspectorAssessmentTemplateEventSubscription</a> OR com.hashicorp.cdktf.IResolvable

---



