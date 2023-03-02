# `guarddutyFilter` Submodule <a name="`guarddutyFilter` Submodule" id="@cdktf/provider-aws.guarddutyFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuarddutyFilter <a name="GuarddutyFilter" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter aws_guardduty_filter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.guardduty_filter.GuarddutyFilter;

GuarddutyFilter.Builder.create(Construct scope, java.lang.String id)
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
    .action(java.lang.String)
    .detectorId(java.lang.String)
    .findingCriteria(GuarddutyFilterFindingCriteria)
    .name(java.lang.String)
    .rank(java.lang.Number)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#action GuarddutyFilter#action}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.detectorId">detectorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#detector_id GuarddutyFilter#detector_id}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.findingCriteria">findingCriteria</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria">GuarddutyFilterFindingCriteria</a></code> | finding_criteria block. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#name GuarddutyFilter#name}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.rank">rank</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#rank GuarddutyFilter#rank}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#description GuarddutyFilter#description}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#id GuarddutyFilter#id}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#tags GuarddutyFilter#tags}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#tags_all GuarddutyFilter#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.action"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#action GuarddutyFilter#action}.

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.detectorId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#detector_id GuarddutyFilter#detector_id}.

---

##### `findingCriteria`<sup>Required</sup> <a name="findingCriteria" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.findingCriteria"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria">GuarddutyFilterFindingCriteria</a>

finding_criteria block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#finding_criteria GuarddutyFilter#finding_criteria}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#name GuarddutyFilter#name}.

---

##### `rank`<sup>Required</sup> <a name="rank" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.rank"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#rank GuarddutyFilter#rank}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#description GuarddutyFilter#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#id GuarddutyFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#tags GuarddutyFilter#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#tags_all GuarddutyFilter#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.putFindingCriteria">putFindingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFindingCriteria` <a name="putFindingCriteria" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.putFindingCriteria"></a>

```java
public void putFindingCriteria(GuarddutyFilterFindingCriteria value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.putFindingCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria">GuarddutyFilterFindingCriteria</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.guardduty_filter.GuarddutyFilter;

GuarddutyFilter.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.guardduty_filter.GuarddutyFilter;

GuarddutyFilter.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.guardduty_filter.GuarddutyFilter;

GuarddutyFilter.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.findingCriteria">findingCriteria</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference">GuarddutyFilterFindingCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.detectorIdInput">detectorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.findingCriteriaInput">findingCriteriaInput</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria">GuarddutyFilterFindingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.rankInput">rankInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.detectorId">detectorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.rank">rank</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `findingCriteria`<sup>Required</sup> <a name="findingCriteria" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.findingCriteria"></a>

```java
public GuarddutyFilterFindingCriteriaOutputReference getFindingCriteria();
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference">GuarddutyFilterFindingCriteriaOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `detectorIdInput`<sup>Optional</sup> <a name="detectorIdInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.detectorIdInput"></a>

```java
public java.lang.String getDetectorIdInput();
```

- *Type:* java.lang.String

---

##### `findingCriteriaInput`<sup>Optional</sup> <a name="findingCriteriaInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.findingCriteriaInput"></a>

```java
public GuarddutyFilterFindingCriteria getFindingCriteriaInput();
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria">GuarddutyFilterFindingCriteria</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `rankInput`<sup>Optional</sup> <a name="rankInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.rankInput"></a>

```java
public java.lang.Number getRankInput();
```

- *Type:* java.lang.Number

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.detectorId"></a>

```java
public java.lang.String getDetectorId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `rank`<sup>Required</sup> <a name="rank" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.rank"></a>

```java
public java.lang.Number getRank();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilter.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GuarddutyFilterConfig <a name="GuarddutyFilterConfig" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.guardduty_filter.GuarddutyFilterConfig;

GuarddutyFilterConfig.builder()
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
    .action(java.lang.String)
    .detectorId(java.lang.String)
    .findingCriteria(GuarddutyFilterFindingCriteria)
    .name(java.lang.String)
    .rank(java.lang.Number)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#action GuarddutyFilter#action}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.detectorId">detectorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#detector_id GuarddutyFilter#detector_id}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.findingCriteria">findingCriteria</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria">GuarddutyFilterFindingCriteria</a></code> | finding_criteria block. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#name GuarddutyFilter#name}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.rank">rank</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#rank GuarddutyFilter#rank}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#description GuarddutyFilter#description}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#id GuarddutyFilter#id}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#tags GuarddutyFilter#tags}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#tags_all GuarddutyFilter#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#action GuarddutyFilter#action}.

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.detectorId"></a>

```java
public java.lang.String getDetectorId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#detector_id GuarddutyFilter#detector_id}.

---

##### `findingCriteria`<sup>Required</sup> <a name="findingCriteria" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.findingCriteria"></a>

```java
public GuarddutyFilterFindingCriteria getFindingCriteria();
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria">GuarddutyFilterFindingCriteria</a>

finding_criteria block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#finding_criteria GuarddutyFilter#finding_criteria}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#name GuarddutyFilter#name}.

---

##### `rank`<sup>Required</sup> <a name="rank" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.rank"></a>

```java
public java.lang.Number getRank();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#rank GuarddutyFilter#rank}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#description GuarddutyFilter#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#id GuarddutyFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#tags GuarddutyFilter#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#tags_all GuarddutyFilter#tags_all}.

---

### GuarddutyFilterFindingCriteria <a name="GuarddutyFilterFindingCriteria" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.guardduty_filter.GuarddutyFilterFindingCriteria;

GuarddutyFilterFindingCriteria.builder()
    .criterion(IResolvable)
    .criterion(java.util.List<GuarddutyFilterFindingCriteriaCriterion>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria.property.criterion">criterion</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion">GuarddutyFilterFindingCriteriaCriterion</a>></code> | criterion block. |

---

##### `criterion`<sup>Required</sup> <a name="criterion" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria.property.criterion"></a>

```java
public java.lang.Object getCriterion();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion">GuarddutyFilterFindingCriteriaCriterion</a>>

criterion block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#criterion GuarddutyFilter#criterion}

---

### GuarddutyFilterFindingCriteriaCriterion <a name="GuarddutyFilterFindingCriteriaCriterion" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.guardduty_filter.GuarddutyFilterFindingCriteriaCriterion;

GuarddutyFilterFindingCriteriaCriterion.builder()
    .field(java.lang.String)
//  .equalTo(java.util.List<java.lang.String>)
//  .greaterThan(java.lang.String)
//  .greaterThanOrEqual(java.lang.String)
//  .lessThan(java.lang.String)
//  .lessThanOrEqual(java.lang.String)
//  .notEquals(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.field">field</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#field GuarddutyFilter#field}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.equalTo">equalTo</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#equals GuarddutyFilter#equals}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.greaterThan">greaterThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#greater_than GuarddutyFilter#greater_than}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.greaterThanOrEqual">greaterThanOrEqual</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#greater_than_or_equal GuarddutyFilter#greater_than_or_equal}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.lessThan">lessThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#less_than GuarddutyFilter#less_than}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.lessThanOrEqual">lessThanOrEqual</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#less_than_or_equal GuarddutyFilter#less_than_or_equal}. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.notEquals">notEquals</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#not_equals GuarddutyFilter#not_equals}. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#field GuarddutyFilter#field}.

---

##### `equalTo`<sup>Optional</sup> <a name="equalTo" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.equalTo"></a>

```java
public java.util.List<java.lang.String> getEqualTo();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#equals GuarddutyFilter#equals}.

---

##### `greaterThan`<sup>Optional</sup> <a name="greaterThan" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.greaterThan"></a>

```java
public java.lang.String getGreaterThan();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#greater_than GuarddutyFilter#greater_than}.

---

##### `greaterThanOrEqual`<sup>Optional</sup> <a name="greaterThanOrEqual" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.greaterThanOrEqual"></a>

```java
public java.lang.String getGreaterThanOrEqual();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#greater_than_or_equal GuarddutyFilter#greater_than_or_equal}.

---

##### `lessThan`<sup>Optional</sup> <a name="lessThan" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.lessThan"></a>

```java
public java.lang.String getLessThan();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#less_than GuarddutyFilter#less_than}.

---

##### `lessThanOrEqual`<sup>Optional</sup> <a name="lessThanOrEqual" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.lessThanOrEqual"></a>

```java
public java.lang.String getLessThanOrEqual();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#less_than_or_equal GuarddutyFilter#less_than_or_equal}.

---

##### `notEquals`<sup>Optional</sup> <a name="notEquals" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion.property.notEquals"></a>

```java
public java.util.List<java.lang.String> getNotEquals();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter#not_equals GuarddutyFilter#not_equals}.

---

## Classes <a name="Classes" id="Classes"></a>

### GuarddutyFilterFindingCriteriaCriterionList <a name="GuarddutyFilterFindingCriteriaCriterionList" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.guardduty_filter.GuarddutyFilterFindingCriteriaCriterionList;

new GuarddutyFilterFindingCriteriaCriterionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.get"></a>

```java
public GuarddutyFilterFindingCriteriaCriterionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion">GuarddutyFilterFindingCriteriaCriterion</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion">GuarddutyFilterFindingCriteriaCriterion</a>>

---


### GuarddutyFilterFindingCriteriaCriterionOutputReference <a name="GuarddutyFilterFindingCriteriaCriterionOutputReference" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.guardduty_filter.GuarddutyFilterFindingCriteriaCriterionOutputReference;

new GuarddutyFilterFindingCriteriaCriterionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetEqualTo">resetEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetGreaterThan">resetGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetGreaterThanOrEqual">resetGreaterThanOrEqual</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetLessThan">resetLessThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetLessThanOrEqual">resetLessThanOrEqual</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetNotEquals">resetNotEquals</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEqualTo` <a name="resetEqualTo" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetEqualTo"></a>

```java
public void resetEqualTo()
```

##### `resetGreaterThan` <a name="resetGreaterThan" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetGreaterThan"></a>

```java
public void resetGreaterThan()
```

##### `resetGreaterThanOrEqual` <a name="resetGreaterThanOrEqual" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetGreaterThanOrEqual"></a>

```java
public void resetGreaterThanOrEqual()
```

##### `resetLessThan` <a name="resetLessThan" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetLessThan"></a>

```java
public void resetLessThan()
```

##### `resetLessThanOrEqual` <a name="resetLessThanOrEqual" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetLessThanOrEqual"></a>

```java
public void resetLessThanOrEqual()
```

##### `resetNotEquals` <a name="resetNotEquals" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.resetNotEquals"></a>

```java
public void resetNotEquals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.equalToInput">equalToInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.fieldInput">fieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThanInput">greaterThanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThanOrEqualInput">greaterThanOrEqualInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThanInput">lessThanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThanOrEqualInput">lessThanOrEqualInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.notEqualsInput">notEqualsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.equalTo">equalTo</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.field">field</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThan">greaterThan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThanOrEqual">greaterThanOrEqual</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThan">lessThan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThanOrEqual">lessThanOrEqual</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.notEquals">notEquals</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion">GuarddutyFilterFindingCriteriaCriterion</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `equalToInput`<sup>Optional</sup> <a name="equalToInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.equalToInput"></a>

```java
public java.util.List<java.lang.String> getEqualToInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.fieldInput"></a>

```java
public java.lang.String getFieldInput();
```

- *Type:* java.lang.String

---

##### `greaterThanInput`<sup>Optional</sup> <a name="greaterThanInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThanInput"></a>

```java
public java.lang.String getGreaterThanInput();
```

- *Type:* java.lang.String

---

##### `greaterThanOrEqualInput`<sup>Optional</sup> <a name="greaterThanOrEqualInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThanOrEqualInput"></a>

```java
public java.lang.String getGreaterThanOrEqualInput();
```

- *Type:* java.lang.String

---

##### `lessThanInput`<sup>Optional</sup> <a name="lessThanInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThanInput"></a>

```java
public java.lang.String getLessThanInput();
```

- *Type:* java.lang.String

---

##### `lessThanOrEqualInput`<sup>Optional</sup> <a name="lessThanOrEqualInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThanOrEqualInput"></a>

```java
public java.lang.String getLessThanOrEqualInput();
```

- *Type:* java.lang.String

---

##### `notEqualsInput`<sup>Optional</sup> <a name="notEqualsInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.notEqualsInput"></a>

```java
public java.util.List<java.lang.String> getNotEqualsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `equalTo`<sup>Required</sup> <a name="equalTo" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.equalTo"></a>

```java
public java.util.List<java.lang.String> getEqualTo();
```

- *Type:* java.util.List<java.lang.String>

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

---

##### `greaterThan`<sup>Required</sup> <a name="greaterThan" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThan"></a>

```java
public java.lang.String getGreaterThan();
```

- *Type:* java.lang.String

---

##### `greaterThanOrEqual`<sup>Required</sup> <a name="greaterThanOrEqual" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.greaterThanOrEqual"></a>

```java
public java.lang.String getGreaterThanOrEqual();
```

- *Type:* java.lang.String

---

##### `lessThan`<sup>Required</sup> <a name="lessThan" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThan"></a>

```java
public java.lang.String getLessThan();
```

- *Type:* java.lang.String

---

##### `lessThanOrEqual`<sup>Required</sup> <a name="lessThanOrEqual" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.lessThanOrEqual"></a>

```java
public java.lang.String getLessThanOrEqual();
```

- *Type:* java.lang.String

---

##### `notEquals`<sup>Required</sup> <a name="notEquals" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.notEquals"></a>

```java
public java.util.List<java.lang.String> getNotEquals();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion">GuarddutyFilterFindingCriteriaCriterion</a> OR com.hashicorp.cdktf.IResolvable

---


### GuarddutyFilterFindingCriteriaOutputReference <a name="GuarddutyFilterFindingCriteriaOutputReference" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.guardduty_filter.GuarddutyFilterFindingCriteriaOutputReference;

new GuarddutyFilterFindingCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.putCriterion">putCriterion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCriterion` <a name="putCriterion" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.putCriterion"></a>

```java
public void putCriterion(IResolvable OR java.util.List<GuarddutyFilterFindingCriteriaCriterion> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.putCriterion.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion">GuarddutyFilterFindingCriteriaCriterion</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.criterion">criterion</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList">GuarddutyFilterFindingCriteriaCriterionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.criterionInput">criterionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion">GuarddutyFilterFindingCriteriaCriterion</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria">GuarddutyFilterFindingCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `criterion`<sup>Required</sup> <a name="criterion" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.criterion"></a>

```java
public GuarddutyFilterFindingCriteriaCriterionList getCriterion();
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterionList">GuarddutyFilterFindingCriteriaCriterionList</a>

---

##### `criterionInput`<sup>Optional</sup> <a name="criterionInput" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.criterionInput"></a>

```java
public java.lang.Object getCriterionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaCriterion">GuarddutyFilterFindingCriteriaCriterion</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteriaOutputReference.property.internalValue"></a>

```java
public GuarddutyFilterFindingCriteria getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyFilter.GuarddutyFilterFindingCriteria">GuarddutyFilterFindingCriteria</a>

---



