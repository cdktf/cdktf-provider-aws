# `evidentlyFeature` Submodule <a name="`evidentlyFeature` Submodule" id="@cdktf/provider-aws.evidentlyFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EvidentlyFeature <a name="EvidentlyFeature" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature aws_evidently_feature}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_feature.EvidentlyFeature;

EvidentlyFeature.Builder.create(Construct scope, java.lang.String id)
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
    .project(java.lang.String)
    .variations(IResolvable)
    .variations(java.util.List<EvidentlyFeatureVariations>)
//  .defaultVariation(java.lang.String)
//  .description(java.lang.String)
//  .entityOverrides(java.util.Map<java.lang.String, java.lang.String>)
//  .evaluationStrategy(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(EvidentlyFeatureTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#name EvidentlyFeature#name}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#project EvidentlyFeature#project}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.variations">variations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>></code> | variations block. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.defaultVariation">defaultVariation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#default_variation EvidentlyFeature#default_variation}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#description EvidentlyFeature#description}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.entityOverrides">entityOverrides</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#entity_overrides EvidentlyFeature#entity_overrides}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.evaluationStrategy">evaluationStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#evaluation_strategy EvidentlyFeature#evaluation_strategy}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#id EvidentlyFeature#id}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#tags EvidentlyFeature#tags}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#tags_all EvidentlyFeature#tags_all}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts">EvidentlyFeatureTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#name EvidentlyFeature#name}.

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#project EvidentlyFeature#project}.

---

##### `variations`<sup>Required</sup> <a name="variations" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.variations"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>>

variations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#variations EvidentlyFeature#variations}

---

##### `defaultVariation`<sup>Optional</sup> <a name="defaultVariation" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.defaultVariation"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#default_variation EvidentlyFeature#default_variation}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#description EvidentlyFeature#description}.

---

##### `entityOverrides`<sup>Optional</sup> <a name="entityOverrides" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.entityOverrides"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#entity_overrides EvidentlyFeature#entity_overrides}.

---

##### `evaluationStrategy`<sup>Optional</sup> <a name="evaluationStrategy" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.evaluationStrategy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#evaluation_strategy EvidentlyFeature#evaluation_strategy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#id EvidentlyFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#tags EvidentlyFeature#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#tags_all EvidentlyFeature#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts">EvidentlyFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#timeouts EvidentlyFeature#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.putVariations">putVariations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetDefaultVariation">resetDefaultVariation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetEntityOverrides">resetEntityOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetEvaluationStrategy">resetEvaluationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.putTimeouts"></a>

```java
public void putTimeouts(EvidentlyFeatureTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts">EvidentlyFeatureTimeouts</a>

---

##### `putVariations` <a name="putVariations" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.putVariations"></a>

```java
public void putVariations(IResolvable OR java.util.List<EvidentlyFeatureVariations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.putVariations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>>

---

##### `resetDefaultVariation` <a name="resetDefaultVariation" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetDefaultVariation"></a>

```java
public void resetDefaultVariation()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEntityOverrides` <a name="resetEntityOverrides" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetEntityOverrides"></a>

```java
public void resetEntityOverrides()
```

##### `resetEvaluationStrategy` <a name="resetEvaluationStrategy" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetEvaluationStrategy"></a>

```java
public void resetEvaluationStrategy()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_feature.EvidentlyFeature;

EvidentlyFeature.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_feature.EvidentlyFeature;

EvidentlyFeature.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_feature.EvidentlyFeature;

EvidentlyFeature.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.evaluationRules">evaluationRules</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList">EvidentlyFeatureEvaluationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference">EvidentlyFeatureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.valueType">valueType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.variations">variations</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList">EvidentlyFeatureVariationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.defaultVariationInput">defaultVariationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.entityOverridesInput">entityOverridesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.evaluationStrategyInput">evaluationStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts">EvidentlyFeatureTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.variationsInput">variationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.defaultVariation">defaultVariation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.entityOverrides">entityOverrides</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.evaluationStrategy">evaluationStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `evaluationRules`<sup>Required</sup> <a name="evaluationRules" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.evaluationRules"></a>

```java
public EvidentlyFeatureEvaluationRulesList getEvaluationRules();
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList">EvidentlyFeatureEvaluationRulesList</a>

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.lastUpdatedTime"></a>

```java
public java.lang.String getLastUpdatedTime();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.timeouts"></a>

```java
public EvidentlyFeatureTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference">EvidentlyFeatureTimeoutsOutputReference</a>

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

---

##### `variations`<sup>Required</sup> <a name="variations" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.variations"></a>

```java
public EvidentlyFeatureVariationsList getVariations();
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList">EvidentlyFeatureVariationsList</a>

---

##### `defaultVariationInput`<sup>Optional</sup> <a name="defaultVariationInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.defaultVariationInput"></a>

```java
public java.lang.String getDefaultVariationInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `entityOverridesInput`<sup>Optional</sup> <a name="entityOverridesInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.entityOverridesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEntityOverridesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `evaluationStrategyInput`<sup>Optional</sup> <a name="evaluationStrategyInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.evaluationStrategyInput"></a>

```java
public java.lang.String getEvaluationStrategyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts">EvidentlyFeatureTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `variationsInput`<sup>Optional</sup> <a name="variationsInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.variationsInput"></a>

```java
public java.lang.Object getVariationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>>

---

##### `defaultVariation`<sup>Required</sup> <a name="defaultVariation" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.defaultVariation"></a>

```java
public java.lang.String getDefaultVariation();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `entityOverrides`<sup>Required</sup> <a name="entityOverrides" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.entityOverrides"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEntityOverrides();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `evaluationStrategy`<sup>Required</sup> <a name="evaluationStrategy" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.evaluationStrategy"></a>

```java
public java.lang.String getEvaluationStrategy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EvidentlyFeatureConfig <a name="EvidentlyFeatureConfig" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_feature.EvidentlyFeatureConfig;

EvidentlyFeatureConfig.builder()
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
    .project(java.lang.String)
    .variations(IResolvable)
    .variations(java.util.List<EvidentlyFeatureVariations>)
//  .defaultVariation(java.lang.String)
//  .description(java.lang.String)
//  .entityOverrides(java.util.Map<java.lang.String, java.lang.String>)
//  .evaluationStrategy(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(EvidentlyFeatureTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#name EvidentlyFeature#name}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#project EvidentlyFeature#project}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.variations">variations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>></code> | variations block. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.defaultVariation">defaultVariation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#default_variation EvidentlyFeature#default_variation}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#description EvidentlyFeature#description}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.entityOverrides">entityOverrides</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#entity_overrides EvidentlyFeature#entity_overrides}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.evaluationStrategy">evaluationStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#evaluation_strategy EvidentlyFeature#evaluation_strategy}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#id EvidentlyFeature#id}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#tags EvidentlyFeature#tags}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#tags_all EvidentlyFeature#tags_all}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts">EvidentlyFeatureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#name EvidentlyFeature#name}.

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#project EvidentlyFeature#project}.

---

##### `variations`<sup>Required</sup> <a name="variations" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.variations"></a>

```java
public java.lang.Object getVariations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>>

variations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#variations EvidentlyFeature#variations}

---

##### `defaultVariation`<sup>Optional</sup> <a name="defaultVariation" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.defaultVariation"></a>

```java
public java.lang.String getDefaultVariation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#default_variation EvidentlyFeature#default_variation}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#description EvidentlyFeature#description}.

---

##### `entityOverrides`<sup>Optional</sup> <a name="entityOverrides" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.entityOverrides"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEntityOverrides();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#entity_overrides EvidentlyFeature#entity_overrides}.

---

##### `evaluationStrategy`<sup>Optional</sup> <a name="evaluationStrategy" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.evaluationStrategy"></a>

```java
public java.lang.String getEvaluationStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#evaluation_strategy EvidentlyFeature#evaluation_strategy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#id EvidentlyFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#tags EvidentlyFeature#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#tags_all EvidentlyFeature#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.timeouts"></a>

```java
public EvidentlyFeatureTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts">EvidentlyFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#timeouts EvidentlyFeature#timeouts}

---

### EvidentlyFeatureEvaluationRules <a name="EvidentlyFeatureEvaluationRules" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_feature.EvidentlyFeatureEvaluationRules;

EvidentlyFeatureEvaluationRules.builder()
    .build();
```


### EvidentlyFeatureTimeouts <a name="EvidentlyFeatureTimeouts" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_feature.EvidentlyFeatureTimeouts;

EvidentlyFeatureTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#create EvidentlyFeature#create}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#delete EvidentlyFeature#delete}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#update EvidentlyFeature#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#create EvidentlyFeature#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#delete EvidentlyFeature#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#update EvidentlyFeature#update}.

---

### EvidentlyFeatureVariations <a name="EvidentlyFeatureVariations" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_feature.EvidentlyFeatureVariations;

EvidentlyFeatureVariations.builder()
    .name(java.lang.String)
    .value(EvidentlyFeatureVariationsValue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#name EvidentlyFeature#name}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations.property.value">value</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue">EvidentlyFeatureVariationsValue</a></code> | value block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#name EvidentlyFeature#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations.property.value"></a>

```java
public EvidentlyFeatureVariationsValue getValue();
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue">EvidentlyFeatureVariationsValue</a>

value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#value EvidentlyFeature#value}

---

### EvidentlyFeatureVariationsValue <a name="EvidentlyFeatureVariationsValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_feature.EvidentlyFeatureVariationsValue;

EvidentlyFeatureVariationsValue.builder()
//  .boolValue(java.lang.String)
//  .doubleValue(java.lang.String)
//  .longValue(java.lang.String)
//  .stringValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue.property.boolValue">boolValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#bool_value EvidentlyFeature#bool_value}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue.property.doubleValue">doubleValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#double_value EvidentlyFeature#double_value}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue.property.longValue">longValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#long_value EvidentlyFeature#long_value}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#string_value EvidentlyFeature#string_value}. |

---

##### `boolValue`<sup>Optional</sup> <a name="boolValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue.property.boolValue"></a>

```java
public java.lang.String getBoolValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#bool_value EvidentlyFeature#bool_value}.

---

##### `doubleValue`<sup>Optional</sup> <a name="doubleValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue.property.doubleValue"></a>

```java
public java.lang.String getDoubleValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#double_value EvidentlyFeature#double_value}.

---

##### `longValue`<sup>Optional</sup> <a name="longValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue.property.longValue"></a>

```java
public java.lang.String getLongValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#long_value EvidentlyFeature#long_value}.

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#string_value EvidentlyFeature#string_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### EvidentlyFeatureEvaluationRulesList <a name="EvidentlyFeatureEvaluationRulesList" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_feature.EvidentlyFeatureEvaluationRulesList;

new EvidentlyFeatureEvaluationRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.get"></a>

```java
public EvidentlyFeatureEvaluationRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### EvidentlyFeatureEvaluationRulesOutputReference <a name="EvidentlyFeatureEvaluationRulesOutputReference" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_feature.EvidentlyFeatureEvaluationRulesOutputReference;

new EvidentlyFeatureEvaluationRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRules">EvidentlyFeatureEvaluationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.property.internalValue"></a>

```java
public EvidentlyFeatureEvaluationRules getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRules">EvidentlyFeatureEvaluationRules</a>

---


### EvidentlyFeatureTimeoutsOutputReference <a name="EvidentlyFeatureTimeoutsOutputReference" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_feature.EvidentlyFeatureTimeoutsOutputReference;

new EvidentlyFeatureTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts">EvidentlyFeatureTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts">EvidentlyFeatureTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---


### EvidentlyFeatureVariationsList <a name="EvidentlyFeatureVariationsList" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_feature.EvidentlyFeatureVariationsList;

new EvidentlyFeatureVariationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.get"></a>

```java
public EvidentlyFeatureVariationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>>

---


### EvidentlyFeatureVariationsOutputReference <a name="EvidentlyFeatureVariationsOutputReference" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_feature.EvidentlyFeatureVariationsOutputReference;

new EvidentlyFeatureVariationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.putValue">putValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.putValue"></a>

```java
public void putValue(EvidentlyFeatureVariationsValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue">EvidentlyFeatureVariationsValue</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference">EvidentlyFeatureVariationsValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.valueInput">valueInput</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue">EvidentlyFeatureVariationsValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.value"></a>

```java
public EvidentlyFeatureVariationsValueOutputReference getValue();
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference">EvidentlyFeatureVariationsValueOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.valueInput"></a>

```java
public EvidentlyFeatureVariationsValue getValueInput();
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue">EvidentlyFeatureVariationsValue</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a> OR com.hashicorp.cdktf.IResolvable

---


### EvidentlyFeatureVariationsValueOutputReference <a name="EvidentlyFeatureVariationsValueOutputReference" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.evidently_feature.EvidentlyFeatureVariationsValueOutputReference;

new EvidentlyFeatureVariationsValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.resetBoolValue">resetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.resetDoubleValue">resetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.resetLongValue">resetLongValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBoolValue` <a name="resetBoolValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.resetBoolValue"></a>

```java
public void resetBoolValue()
```

##### `resetDoubleValue` <a name="resetDoubleValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.resetDoubleValue"></a>

```java
public void resetDoubleValue()
```

##### `resetLongValue` <a name="resetLongValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.resetLongValue"></a>

```java
public void resetLongValue()
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.resetStringValue"></a>

```java
public void resetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.boolValueInput">boolValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.doubleValueInput">doubleValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.longValueInput">longValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.boolValue">boolValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.doubleValue">doubleValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.longValue">longValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue">EvidentlyFeatureVariationsValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `boolValueInput`<sup>Optional</sup> <a name="boolValueInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.boolValueInput"></a>

```java
public java.lang.String getBoolValueInput();
```

- *Type:* java.lang.String

---

##### `doubleValueInput`<sup>Optional</sup> <a name="doubleValueInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.doubleValueInput"></a>

```java
public java.lang.String getDoubleValueInput();
```

- *Type:* java.lang.String

---

##### `longValueInput`<sup>Optional</sup> <a name="longValueInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.longValueInput"></a>

```java
public java.lang.String getLongValueInput();
```

- *Type:* java.lang.String

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `boolValue`<sup>Required</sup> <a name="boolValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.boolValue"></a>

```java
public java.lang.String getBoolValue();
```

- *Type:* java.lang.String

---

##### `doubleValue`<sup>Required</sup> <a name="doubleValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.doubleValue"></a>

```java
public java.lang.String getDoubleValue();
```

- *Type:* java.lang.String

---

##### `longValue`<sup>Required</sup> <a name="longValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.longValue"></a>

```java
public java.lang.String getLongValue();
```

- *Type:* java.lang.String

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.internalValue"></a>

```java
public EvidentlyFeatureVariationsValue getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue">EvidentlyFeatureVariationsValue</a>

---



