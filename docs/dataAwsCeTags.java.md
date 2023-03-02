# `dataAwsCeTags` Submodule <a name="`dataAwsCeTags` Submodule" id="@cdktf/provider-aws.dataAwsCeTags"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCeTags <a name="DataAwsCeTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ce_tags aws_ce_tags}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTags;

DataAwsCeTags.Builder.create(Construct scope, java.lang.String id)
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
    .timePeriod(DataAwsCeTagsTimePeriod)
//  .filter(DataAwsCeTagsFilter)
//  .id(java.lang.String)
//  .searchString(java.lang.String)
//  .sortBy(IResolvable)
//  .sortBy(java.util.List<DataAwsCeTagsSortBy>)
//  .tagKey(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.timePeriod">timePeriod</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a></code> | time_period block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#id DataAwsCeTags#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.searchString">searchString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#search_string DataAwsCeTags#search_string}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.sortBy">sortBy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>></code> | sort_by block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#tag_key DataAwsCeTags#tag_key}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timePeriod`<sup>Required</sup> <a name="timePeriod" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.timePeriod"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a>

time_period block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#time_period DataAwsCeTags#time_period}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#filter DataAwsCeTags#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#id DataAwsCeTags#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `searchString`<sup>Optional</sup> <a name="searchString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.searchString"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#search_string DataAwsCeTags#search_string}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.sortBy"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>>

sort_by block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#sort_by DataAwsCeTags#sort_by}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.tagKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#tag_key DataAwsCeTags#tag_key}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putSortBy">putSortBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putTimePeriod">putTimePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetSearchString">resetSearchString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetTagKey">resetTagKey</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putFilter"></a>

```java
public void putFilter(DataAwsCeTagsFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a>

---

##### `putSortBy` <a name="putSortBy" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putSortBy"></a>

```java
public void putSortBy(IResolvable OR java.util.List<DataAwsCeTagsSortBy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putSortBy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>>

---

##### `putTimePeriod` <a name="putTimePeriod" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putTimePeriod"></a>

```java
public void putTimePeriod(DataAwsCeTagsTimePeriod value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putTimePeriod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetId"></a>

```java
public void resetId()
```

##### `resetSearchString` <a name="resetSearchString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetSearchString"></a>

```java
public void resetSearchString()
```

##### `resetSortBy` <a name="resetSortBy" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetSortBy"></a>

```java
public void resetSortBy()
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetTagKey"></a>

```java
public void resetTagKey()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTags;

DataAwsCeTags.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTags;

DataAwsCeTags.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTags;

DataAwsCeTags.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference">DataAwsCeTagsFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.sortBy">sortBy</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList">DataAwsCeTagsSortByList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.timePeriod">timePeriod</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference">DataAwsCeTagsTimePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.filterInput">filterInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.searchStringInput">searchStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.sortByInput">sortByInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.timePeriodInput">timePeriodInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.searchString">searchString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.filter"></a>

```java
public DataAwsCeTagsFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference">DataAwsCeTagsFilterOutputReference</a>

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.sortBy"></a>

```java
public DataAwsCeTagsSortByList getSortBy();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList">DataAwsCeTagsSortByList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timePeriod`<sup>Required</sup> <a name="timePeriod" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.timePeriod"></a>

```java
public DataAwsCeTagsTimePeriodOutputReference getTimePeriod();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference">DataAwsCeTagsTimePeriodOutputReference</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.filterInput"></a>

```java
public DataAwsCeTagsFilter getFilterInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `searchStringInput`<sup>Optional</sup> <a name="searchStringInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.searchStringInput"></a>

```java
public java.lang.String getSearchStringInput();
```

- *Type:* java.lang.String

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.sortByInput"></a>

```java
public java.lang.Object getSortByInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>>

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `timePeriodInput`<sup>Optional</sup> <a name="timePeriodInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.timePeriodInput"></a>

```java
public DataAwsCeTagsTimePeriod getTimePeriodInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `searchString`<sup>Required</sup> <a name="searchString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.searchString"></a>

```java
public java.lang.String getSearchString();
```

- *Type:* java.lang.String

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCeTagsConfig <a name="DataAwsCeTagsConfig" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsConfig;

DataAwsCeTagsConfig.builder()
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
    .timePeriod(DataAwsCeTagsTimePeriod)
//  .filter(DataAwsCeTagsFilter)
//  .id(java.lang.String)
//  .searchString(java.lang.String)
//  .sortBy(IResolvable)
//  .sortBy(java.util.List<DataAwsCeTagsSortBy>)
//  .tagKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.timePeriod">timePeriod</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a></code> | time_period block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#id DataAwsCeTags#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.searchString">searchString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#search_string DataAwsCeTags#search_string}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.sortBy">sortBy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>></code> | sort_by block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#tag_key DataAwsCeTags#tag_key}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timePeriod`<sup>Required</sup> <a name="timePeriod" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.timePeriod"></a>

```java
public DataAwsCeTagsTimePeriod getTimePeriod();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a>

time_period block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#time_period DataAwsCeTags#time_period}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.filter"></a>

```java
public DataAwsCeTagsFilter getFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#filter DataAwsCeTags#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#id DataAwsCeTags#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `searchString`<sup>Optional</sup> <a name="searchString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.searchString"></a>

```java
public java.lang.String getSearchString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#search_string DataAwsCeTags#search_string}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.sortBy"></a>

```java
public java.lang.Object getSortBy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>>

sort_by block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#sort_by DataAwsCeTags#sort_by}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#tag_key DataAwsCeTags#tag_key}.

---

### DataAwsCeTagsFilter <a name="DataAwsCeTagsFilter" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsFilter;

DataAwsCeTagsFilter.builder()
//  .and(IResolvable)
//  .and(java.util.List<DataAwsCeTagsFilterAnd>)
//  .costCategory(DataAwsCeTagsFilterCostCategory)
//  .dimension(DataAwsCeTagsFilterDimension)
//  .not(DataAwsCeTagsFilterNot)
//  .or(IResolvable)
//  .or(java.util.List<DataAwsCeTagsFilterOr>)
//  .tags(DataAwsCeTagsFilterTags)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.and">and</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a>></code> | and block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.not">not</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a></code> | not block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.or">or</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a>></code> | or block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a></code> | tags block. |

---

##### `and`<sup>Optional</sup> <a name="and" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.and"></a>

```java
public java.lang.Object getAnd();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a>>

and block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#and DataAwsCeTags#and}

---

##### `costCategory`<sup>Optional</sup> <a name="costCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.costCategory"></a>

```java
public DataAwsCeTagsFilterCostCategory getCostCategory();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#cost_category DataAwsCeTags#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.dimension"></a>

```java
public DataAwsCeTagsFilterDimension getDimension();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#dimension DataAwsCeTags#dimension}

---

##### `not`<sup>Optional</sup> <a name="not" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.not"></a>

```java
public DataAwsCeTagsFilterNot getNot();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a>

not block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#not DataAwsCeTags#not}

---

##### `or`<sup>Optional</sup> <a name="or" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.or"></a>

```java
public java.lang.Object getOr();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a>>

or block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#or DataAwsCeTags#or}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.tags"></a>

```java
public DataAwsCeTagsFilterTags getTags();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#tags DataAwsCeTags#tags}

---

### DataAwsCeTagsFilterAnd <a name="DataAwsCeTagsFilterAnd" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsFilterAnd;

DataAwsCeTagsFilterAnd.builder()
//  .costCategory(DataAwsCeTagsFilterAndCostCategory)
//  .dimension(DataAwsCeTagsFilterAndDimension)
//  .tags(DataAwsCeTagsFilterAndTags)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory">DataAwsCeTagsFilterAndCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension">DataAwsCeTagsFilterAndDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags">DataAwsCeTagsFilterAndTags</a></code> | tags block. |

---

##### `costCategory`<sup>Optional</sup> <a name="costCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.property.costCategory"></a>

```java
public DataAwsCeTagsFilterAndCostCategory getCostCategory();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory">DataAwsCeTagsFilterAndCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#cost_category DataAwsCeTags#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.property.dimension"></a>

```java
public DataAwsCeTagsFilterAndDimension getDimension();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension">DataAwsCeTagsFilterAndDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#dimension DataAwsCeTags#dimension}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.property.tags"></a>

```java
public DataAwsCeTagsFilterAndTags getTags();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags">DataAwsCeTagsFilterAndTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#tags DataAwsCeTags#tags}

---

### DataAwsCeTagsFilterAndCostCategory <a name="DataAwsCeTagsFilterAndCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsFilterAndCostCategory;

DataAwsCeTagsFilterAndCostCategory.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterAndDimension <a name="DataAwsCeTagsFilterAndDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsFilterAndDimension;

DataAwsCeTagsFilterAndDimension.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterAndTags <a name="DataAwsCeTagsFilterAndTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsFilterAndTags;

DataAwsCeTagsFilterAndTags.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterCostCategory <a name="DataAwsCeTagsFilterCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsFilterCostCategory;

DataAwsCeTagsFilterCostCategory.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterDimension <a name="DataAwsCeTagsFilterDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsFilterDimension;

DataAwsCeTagsFilterDimension.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterNot <a name="DataAwsCeTagsFilterNot" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsFilterNot;

DataAwsCeTagsFilterNot.builder()
//  .costCategory(DataAwsCeTagsFilterNotCostCategory)
//  .dimension(DataAwsCeTagsFilterNotDimension)
//  .tags(DataAwsCeTagsFilterNotTags)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a></code> | tags block. |

---

##### `costCategory`<sup>Optional</sup> <a name="costCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.property.costCategory"></a>

```java
public DataAwsCeTagsFilterNotCostCategory getCostCategory();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#cost_category DataAwsCeTags#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.property.dimension"></a>

```java
public DataAwsCeTagsFilterNotDimension getDimension();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#dimension DataAwsCeTags#dimension}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.property.tags"></a>

```java
public DataAwsCeTagsFilterNotTags getTags();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#tags DataAwsCeTags#tags}

---

### DataAwsCeTagsFilterNotCostCategory <a name="DataAwsCeTagsFilterNotCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsFilterNotCostCategory;

DataAwsCeTagsFilterNotCostCategory.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterNotDimension <a name="DataAwsCeTagsFilterNotDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsFilterNotDimension;

DataAwsCeTagsFilterNotDimension.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterNotTags <a name="DataAwsCeTagsFilterNotTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsFilterNotTags;

DataAwsCeTagsFilterNotTags.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterOr <a name="DataAwsCeTagsFilterOr" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsFilterOr;

DataAwsCeTagsFilterOr.builder()
//  .costCategory(DataAwsCeTagsFilterOrCostCategory)
//  .dimension(DataAwsCeTagsFilterOrDimension)
//  .tags(DataAwsCeTagsFilterOrTags)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory">DataAwsCeTagsFilterOrCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension">DataAwsCeTagsFilterOrDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags">DataAwsCeTagsFilterOrTags</a></code> | tags block. |

---

##### `costCategory`<sup>Optional</sup> <a name="costCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.property.costCategory"></a>

```java
public DataAwsCeTagsFilterOrCostCategory getCostCategory();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory">DataAwsCeTagsFilterOrCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#cost_category DataAwsCeTags#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.property.dimension"></a>

```java
public DataAwsCeTagsFilterOrDimension getDimension();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension">DataAwsCeTagsFilterOrDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#dimension DataAwsCeTags#dimension}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.property.tags"></a>

```java
public DataAwsCeTagsFilterOrTags getTags();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags">DataAwsCeTagsFilterOrTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#tags DataAwsCeTags#tags}

---

### DataAwsCeTagsFilterOrCostCategory <a name="DataAwsCeTagsFilterOrCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsFilterOrCostCategory;

DataAwsCeTagsFilterOrCostCategory.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterOrDimension <a name="DataAwsCeTagsFilterOrDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsFilterOrDimension;

DataAwsCeTagsFilterOrDimension.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterOrTags <a name="DataAwsCeTagsFilterOrTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsFilterOrTags;

DataAwsCeTagsFilterOrTags.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterTags <a name="DataAwsCeTagsFilterTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsFilterTags;

DataAwsCeTagsFilterTags.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsSortBy <a name="DataAwsCeTagsSortBy" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsSortBy;

DataAwsCeTagsSortBy.builder()
//  .key(java.lang.String)
//  .sortOrder(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy.property.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#sort_order DataAwsCeTags#sort_order}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy.property.sortOrder"></a>

```java
public java.lang.String getSortOrder();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#sort_order DataAwsCeTags#sort_order}.

---

### DataAwsCeTagsTimePeriod <a name="DataAwsCeTagsTimePeriod" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsTimePeriod;

DataAwsCeTagsTimePeriod.builder()
    .end(java.lang.String)
    .start(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod.property.end">end</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#end DataAwsCeTags#end}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod.property.start">start</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#start DataAwsCeTags#start}. |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod.property.end"></a>

```java
public java.lang.String getEnd();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#end DataAwsCeTags#end}.

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod.property.start"></a>

```java
public java.lang.String getStart();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#start DataAwsCeTags#start}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsCeTagsFilterAndCostCategoryOutputReference <a name="DataAwsCeTagsFilterAndCostCategoryOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsFilterAndCostCategoryOutputReference;

new DataAwsCeTagsFilterAndCostCategoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory">DataAwsCeTagsFilterAndCostCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.internalValue"></a>

```java
public DataAwsCeTagsFilterAndCostCategory getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory">DataAwsCeTagsFilterAndCostCategory</a>

---


### DataAwsCeTagsFilterAndDimensionOutputReference <a name="DataAwsCeTagsFilterAndDimensionOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsFilterAndDimensionOutputReference;

new DataAwsCeTagsFilterAndDimensionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension">DataAwsCeTagsFilterAndDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.internalValue"></a>

```java
public DataAwsCeTagsFilterAndDimension getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension">DataAwsCeTagsFilterAndDimension</a>

---


### DataAwsCeTagsFilterAndList <a name="DataAwsCeTagsFilterAndList" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsFilterAndList;

new DataAwsCeTagsFilterAndList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.get"></a>

```java
public DataAwsCeTagsFilterAndOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a>>

---


### DataAwsCeTagsFilterAndOutputReference <a name="DataAwsCeTagsFilterAndOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsFilterAndOutputReference;

new DataAwsCeTagsFilterAndOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putCostCategory">putCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putDimension">putDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resetCostCategory">resetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resetDimension">resetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCostCategory` <a name="putCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putCostCategory"></a>

```java
public void putCostCategory(DataAwsCeTagsFilterAndCostCategory value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory">DataAwsCeTagsFilterAndCostCategory</a>

---

##### `putDimension` <a name="putDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putDimension"></a>

```java
public void putDimension(DataAwsCeTagsFilterAndDimension value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension">DataAwsCeTagsFilterAndDimension</a>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putTags"></a>

```java
public void putTags(DataAwsCeTagsFilterAndTags value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags">DataAwsCeTagsFilterAndTags</a>

---

##### `resetCostCategory` <a name="resetCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resetCostCategory"></a>

```java
public void resetCostCategory()
```

##### `resetDimension` <a name="resetDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resetDimension"></a>

```java
public void resetDimension()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference">DataAwsCeTagsFilterAndCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference">DataAwsCeTagsFilterAndDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference">DataAwsCeTagsFilterAndTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.costCategoryInput">costCategoryInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory">DataAwsCeTagsFilterAndCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.dimensionInput">dimensionInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension">DataAwsCeTagsFilterAndDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.tagsInput">tagsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags">DataAwsCeTagsFilterAndTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `costCategory`<sup>Required</sup> <a name="costCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.costCategory"></a>

```java
public DataAwsCeTagsFilterAndCostCategoryOutputReference getCostCategory();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference">DataAwsCeTagsFilterAndCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.dimension"></a>

```java
public DataAwsCeTagsFilterAndDimensionOutputReference getDimension();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference">DataAwsCeTagsFilterAndDimensionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.tags"></a>

```java
public DataAwsCeTagsFilterAndTagsOutputReference getTags();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference">DataAwsCeTagsFilterAndTagsOutputReference</a>

---

##### `costCategoryInput`<sup>Optional</sup> <a name="costCategoryInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.costCategoryInput"></a>

```java
public DataAwsCeTagsFilterAndCostCategory getCostCategoryInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory">DataAwsCeTagsFilterAndCostCategory</a>

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.dimensionInput"></a>

```java
public DataAwsCeTagsFilterAndDimension getDimensionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension">DataAwsCeTagsFilterAndDimension</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.tagsInput"></a>

```java
public DataAwsCeTagsFilterAndTags getTagsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags">DataAwsCeTagsFilterAndTags</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a> OR com.hashicorp.cdktf.IResolvable

---


### DataAwsCeTagsFilterAndTagsOutputReference <a name="DataAwsCeTagsFilterAndTagsOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsFilterAndTagsOutputReference;

new DataAwsCeTagsFilterAndTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags">DataAwsCeTagsFilterAndTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.internalValue"></a>

```java
public DataAwsCeTagsFilterAndTags getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags">DataAwsCeTagsFilterAndTags</a>

---


### DataAwsCeTagsFilterCostCategoryOutputReference <a name="DataAwsCeTagsFilterCostCategoryOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsFilterCostCategoryOutputReference;

new DataAwsCeTagsFilterCostCategoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.internalValue"></a>

```java
public DataAwsCeTagsFilterCostCategory getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a>

---


### DataAwsCeTagsFilterDimensionOutputReference <a name="DataAwsCeTagsFilterDimensionOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsFilterDimensionOutputReference;

new DataAwsCeTagsFilterDimensionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.internalValue"></a>

```java
public DataAwsCeTagsFilterDimension getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a>

---


### DataAwsCeTagsFilterNotCostCategoryOutputReference <a name="DataAwsCeTagsFilterNotCostCategoryOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsFilterNotCostCategoryOutputReference;

new DataAwsCeTagsFilterNotCostCategoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.internalValue"></a>

```java
public DataAwsCeTagsFilterNotCostCategory getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a>

---


### DataAwsCeTagsFilterNotDimensionOutputReference <a name="DataAwsCeTagsFilterNotDimensionOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsFilterNotDimensionOutputReference;

new DataAwsCeTagsFilterNotDimensionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.internalValue"></a>

```java
public DataAwsCeTagsFilterNotDimension getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a>

---


### DataAwsCeTagsFilterNotOutputReference <a name="DataAwsCeTagsFilterNotOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsFilterNotOutputReference;

new DataAwsCeTagsFilterNotOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putCostCategory">putCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putDimension">putDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resetCostCategory">resetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resetDimension">resetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCostCategory` <a name="putCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putCostCategory"></a>

```java
public void putCostCategory(DataAwsCeTagsFilterNotCostCategory value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a>

---

##### `putDimension` <a name="putDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putDimension"></a>

```java
public void putDimension(DataAwsCeTagsFilterNotDimension value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putTags"></a>

```java
public void putTags(DataAwsCeTagsFilterNotTags value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a>

---

##### `resetCostCategory` <a name="resetCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resetCostCategory"></a>

```java
public void resetCostCategory()
```

##### `resetDimension` <a name="resetDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resetDimension"></a>

```java
public void resetDimension()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference">DataAwsCeTagsFilterNotCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference">DataAwsCeTagsFilterNotDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference">DataAwsCeTagsFilterNotTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.costCategoryInput">costCategoryInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.dimensionInput">dimensionInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.tagsInput">tagsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `costCategory`<sup>Required</sup> <a name="costCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.costCategory"></a>

```java
public DataAwsCeTagsFilterNotCostCategoryOutputReference getCostCategory();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference">DataAwsCeTagsFilterNotCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.dimension"></a>

```java
public DataAwsCeTagsFilterNotDimensionOutputReference getDimension();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference">DataAwsCeTagsFilterNotDimensionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.tags"></a>

```java
public DataAwsCeTagsFilterNotTagsOutputReference getTags();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference">DataAwsCeTagsFilterNotTagsOutputReference</a>

---

##### `costCategoryInput`<sup>Optional</sup> <a name="costCategoryInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.costCategoryInput"></a>

```java
public DataAwsCeTagsFilterNotCostCategory getCostCategoryInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a>

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.dimensionInput"></a>

```java
public DataAwsCeTagsFilterNotDimension getDimensionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.tagsInput"></a>

```java
public DataAwsCeTagsFilterNotTags getTagsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.internalValue"></a>

```java
public DataAwsCeTagsFilterNot getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a>

---


### DataAwsCeTagsFilterNotTagsOutputReference <a name="DataAwsCeTagsFilterNotTagsOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsFilterNotTagsOutputReference;

new DataAwsCeTagsFilterNotTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.internalValue"></a>

```java
public DataAwsCeTagsFilterNotTags getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a>

---


### DataAwsCeTagsFilterOrCostCategoryOutputReference <a name="DataAwsCeTagsFilterOrCostCategoryOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsFilterOrCostCategoryOutputReference;

new DataAwsCeTagsFilterOrCostCategoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory">DataAwsCeTagsFilterOrCostCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.internalValue"></a>

```java
public DataAwsCeTagsFilterOrCostCategory getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory">DataAwsCeTagsFilterOrCostCategory</a>

---


### DataAwsCeTagsFilterOrDimensionOutputReference <a name="DataAwsCeTagsFilterOrDimensionOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsFilterOrDimensionOutputReference;

new DataAwsCeTagsFilterOrDimensionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension">DataAwsCeTagsFilterOrDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.internalValue"></a>

```java
public DataAwsCeTagsFilterOrDimension getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension">DataAwsCeTagsFilterOrDimension</a>

---


### DataAwsCeTagsFilterOrList <a name="DataAwsCeTagsFilterOrList" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsFilterOrList;

new DataAwsCeTagsFilterOrList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.get"></a>

```java
public DataAwsCeTagsFilterOrOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a>>

---


### DataAwsCeTagsFilterOrOutputReference <a name="DataAwsCeTagsFilterOrOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsFilterOrOutputReference;

new DataAwsCeTagsFilterOrOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putCostCategory">putCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putDimension">putDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resetCostCategory">resetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resetDimension">resetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCostCategory` <a name="putCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putCostCategory"></a>

```java
public void putCostCategory(DataAwsCeTagsFilterOrCostCategory value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory">DataAwsCeTagsFilterOrCostCategory</a>

---

##### `putDimension` <a name="putDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putDimension"></a>

```java
public void putDimension(DataAwsCeTagsFilterOrDimension value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension">DataAwsCeTagsFilterOrDimension</a>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putTags"></a>

```java
public void putTags(DataAwsCeTagsFilterOrTags value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags">DataAwsCeTagsFilterOrTags</a>

---

##### `resetCostCategory` <a name="resetCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resetCostCategory"></a>

```java
public void resetCostCategory()
```

##### `resetDimension` <a name="resetDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resetDimension"></a>

```java
public void resetDimension()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference">DataAwsCeTagsFilterOrCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference">DataAwsCeTagsFilterOrDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference">DataAwsCeTagsFilterOrTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.costCategoryInput">costCategoryInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory">DataAwsCeTagsFilterOrCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.dimensionInput">dimensionInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension">DataAwsCeTagsFilterOrDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.tagsInput">tagsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags">DataAwsCeTagsFilterOrTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `costCategory`<sup>Required</sup> <a name="costCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.costCategory"></a>

```java
public DataAwsCeTagsFilterOrCostCategoryOutputReference getCostCategory();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference">DataAwsCeTagsFilterOrCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.dimension"></a>

```java
public DataAwsCeTagsFilterOrDimensionOutputReference getDimension();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference">DataAwsCeTagsFilterOrDimensionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.tags"></a>

```java
public DataAwsCeTagsFilterOrTagsOutputReference getTags();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference">DataAwsCeTagsFilterOrTagsOutputReference</a>

---

##### `costCategoryInput`<sup>Optional</sup> <a name="costCategoryInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.costCategoryInput"></a>

```java
public DataAwsCeTagsFilterOrCostCategory getCostCategoryInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory">DataAwsCeTagsFilterOrCostCategory</a>

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.dimensionInput"></a>

```java
public DataAwsCeTagsFilterOrDimension getDimensionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension">DataAwsCeTagsFilterOrDimension</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.tagsInput"></a>

```java
public DataAwsCeTagsFilterOrTags getTagsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags">DataAwsCeTagsFilterOrTags</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a> OR com.hashicorp.cdktf.IResolvable

---


### DataAwsCeTagsFilterOrTagsOutputReference <a name="DataAwsCeTagsFilterOrTagsOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsFilterOrTagsOutputReference;

new DataAwsCeTagsFilterOrTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags">DataAwsCeTagsFilterOrTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.internalValue"></a>

```java
public DataAwsCeTagsFilterOrTags getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags">DataAwsCeTagsFilterOrTags</a>

---


### DataAwsCeTagsFilterOutputReference <a name="DataAwsCeTagsFilterOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsFilterOutputReference;

new DataAwsCeTagsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putAnd">putAnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putCostCategory">putCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putDimension">putDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putNot">putNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putOr">putOr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetAnd">resetAnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetCostCategory">resetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetDimension">resetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetNot">resetNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetOr">resetOr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnd` <a name="putAnd" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putAnd"></a>

```java
public void putAnd(IResolvable OR java.util.List<DataAwsCeTagsFilterAnd> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putAnd.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a>>

---

##### `putCostCategory` <a name="putCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putCostCategory"></a>

```java
public void putCostCategory(DataAwsCeTagsFilterCostCategory value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a>

---

##### `putDimension` <a name="putDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putDimension"></a>

```java
public void putDimension(DataAwsCeTagsFilterDimension value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a>

---

##### `putNot` <a name="putNot" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putNot"></a>

```java
public void putNot(DataAwsCeTagsFilterNot value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putNot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a>

---

##### `putOr` <a name="putOr" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putOr"></a>

```java
public void putOr(IResolvable OR java.util.List<DataAwsCeTagsFilterOr> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putOr.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a>>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putTags"></a>

```java
public void putTags(DataAwsCeTagsFilterTags value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a>

---

##### `resetAnd` <a name="resetAnd" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetAnd"></a>

```java
public void resetAnd()
```

##### `resetCostCategory` <a name="resetCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetCostCategory"></a>

```java
public void resetCostCategory()
```

##### `resetDimension` <a name="resetDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetDimension"></a>

```java
public void resetDimension()
```

##### `resetNot` <a name="resetNot" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetNot"></a>

```java
public void resetNot()
```

##### `resetOr` <a name="resetOr" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetOr"></a>

```java
public void resetOr()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.and">and</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList">DataAwsCeTagsFilterAndList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference">DataAwsCeTagsFilterCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference">DataAwsCeTagsFilterDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.not">not</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference">DataAwsCeTagsFilterNotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.or">or</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList">DataAwsCeTagsFilterOrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference">DataAwsCeTagsFilterTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.andInput">andInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.costCategoryInput">costCategoryInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.dimensionInput">dimensionInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.notInput">notInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.orInput">orInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.tagsInput">tagsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `and`<sup>Required</sup> <a name="and" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.and"></a>

```java
public DataAwsCeTagsFilterAndList getAnd();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList">DataAwsCeTagsFilterAndList</a>

---

##### `costCategory`<sup>Required</sup> <a name="costCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.costCategory"></a>

```java
public DataAwsCeTagsFilterCostCategoryOutputReference getCostCategory();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference">DataAwsCeTagsFilterCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.dimension"></a>

```java
public DataAwsCeTagsFilterDimensionOutputReference getDimension();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference">DataAwsCeTagsFilterDimensionOutputReference</a>

---

##### `not`<sup>Required</sup> <a name="not" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.not"></a>

```java
public DataAwsCeTagsFilterNotOutputReference getNot();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference">DataAwsCeTagsFilterNotOutputReference</a>

---

##### `or`<sup>Required</sup> <a name="or" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.or"></a>

```java
public DataAwsCeTagsFilterOrList getOr();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList">DataAwsCeTagsFilterOrList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.tags"></a>

```java
public DataAwsCeTagsFilterTagsOutputReference getTags();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference">DataAwsCeTagsFilterTagsOutputReference</a>

---

##### `andInput`<sup>Optional</sup> <a name="andInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.andInput"></a>

```java
public java.lang.Object getAndInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a>>

---

##### `costCategoryInput`<sup>Optional</sup> <a name="costCategoryInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.costCategoryInput"></a>

```java
public DataAwsCeTagsFilterCostCategory getCostCategoryInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a>

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.dimensionInput"></a>

```java
public DataAwsCeTagsFilterDimension getDimensionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a>

---

##### `notInput`<sup>Optional</sup> <a name="notInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.notInput"></a>

```java
public DataAwsCeTagsFilterNot getNotInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a>

---

##### `orInput`<sup>Optional</sup> <a name="orInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.orInput"></a>

```java
public java.lang.Object getOrInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.tagsInput"></a>

```java
public DataAwsCeTagsFilterTags getTagsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.internalValue"></a>

```java
public DataAwsCeTagsFilter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a>

---


### DataAwsCeTagsFilterTagsOutputReference <a name="DataAwsCeTagsFilterTagsOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsFilterTagsOutputReference;

new DataAwsCeTagsFilterTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.internalValue"></a>

```java
public DataAwsCeTagsFilterTags getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a>

---


### DataAwsCeTagsSortByList <a name="DataAwsCeTagsSortByList" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsSortByList;

new DataAwsCeTagsSortByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.get"></a>

```java
public DataAwsCeTagsSortByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>>

---


### DataAwsCeTagsSortByOutputReference <a name="DataAwsCeTagsSortByOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsSortByOutputReference;

new DataAwsCeTagsSortByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resetSortOrder">resetSortOrder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetSortOrder` <a name="resetSortOrder" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resetSortOrder"></a>

```java
public void resetSortOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.sortOrderInput">sortOrderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.sortOrderInput"></a>

```java
public java.lang.String getSortOrderInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.sortOrder"></a>

```java
public java.lang.String getSortOrder();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a> OR com.hashicorp.cdktf.IResolvable

---


### DataAwsCeTagsTimePeriodOutputReference <a name="DataAwsCeTagsTimePeriodOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ce_tags.DataAwsCeTagsTimePeriodOutputReference;

new DataAwsCeTagsTimePeriodOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.endInput">endInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.startInput">startInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.end">end</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.start">start</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.endInput"></a>

```java
public java.lang.String getEndInput();
```

- *Type:* java.lang.String

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.startInput"></a>

```java
public java.lang.String getStartInput();
```

- *Type:* java.lang.String

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.end"></a>

```java
public java.lang.String getEnd();
```

- *Type:* java.lang.String

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.start"></a>

```java
public java.lang.String getStart();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.internalValue"></a>

```java
public DataAwsCeTagsTimePeriod getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a>

---



