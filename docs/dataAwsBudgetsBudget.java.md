# `dataAwsBudgetsBudget` Submodule <a name="`dataAwsBudgetsBudget` Submodule" id="@cdktf/provider-aws.dataAwsBudgetsBudget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsBudgetsBudget <a name="DataAwsBudgetsBudget" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/data-sources/budgets_budget aws_budgets_budget}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_budgets_budget.DataAwsBudgetsBudget;

DataAwsBudgetsBudget.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .accountId(java.lang.String)
//  .id(java.lang.String)
//  .namePrefix(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/data-sources/budgets_budget#name DataAwsBudgetsBudget#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/data-sources/budgets_budget#account_id DataAwsBudgetsBudget#account_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/data-sources/budgets_budget#id DataAwsBudgetsBudget#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/data-sources/budgets_budget#name_prefix DataAwsBudgetsBudget#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/data-sources/budgets_budget#tags DataAwsBudgetsBudget#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/data-sources/budgets_budget#name DataAwsBudgetsBudget#name}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/data-sources/budgets_budget#account_id DataAwsBudgetsBudget#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/data-sources/budgets_budget#id DataAwsBudgetsBudget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.namePrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/data-sources/budgets_budget#name_prefix DataAwsBudgetsBudget#name_prefix}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/data-sources/budgets_budget#tags DataAwsBudgetsBudget#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.resetId"></a>

```java
public void resetId()
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.resetNamePrefix"></a>

```java
public void resetNamePrefix()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsBudgetsBudget resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_budgets_budget.DataAwsBudgetsBudget;

DataAwsBudgetsBudget.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_budgets_budget.DataAwsBudgetsBudget;

DataAwsBudgetsBudget.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_budgets_budget.DataAwsBudgetsBudget;

DataAwsBudgetsBudget.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_budgets_budget.DataAwsBudgetsBudget;

DataAwsBudgetsBudget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsBudgetsBudget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsBudgetsBudget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsBudgetsBudget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsBudgetsBudget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/data-sources/budgets_budget#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsBudgetsBudget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.autoAdjustData">autoAdjustData</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList">DataAwsBudgetsBudgetAutoAdjustDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.budgetExceeded">budgetExceeded</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.budgetLimit">budgetLimit</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList">DataAwsBudgetsBudgetBudgetLimitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.budgetType">budgetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.calculatedSpend">calculatedSpend</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList">DataAwsBudgetsBudgetCalculatedSpendList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.costFilter">costFilter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList">DataAwsBudgetsBudgetCostFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.costTypes">costTypes</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList">DataAwsBudgetsBudgetCostTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList">DataAwsBudgetsBudgetNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.plannedLimit">plannedLimit</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList">DataAwsBudgetsBudgetPlannedLimitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.timePeriodEnd">timePeriodEnd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.timePeriodStart">timePeriodStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.timeUnit">timeUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.namePrefixInput">namePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `autoAdjustData`<sup>Required</sup> <a name="autoAdjustData" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.autoAdjustData"></a>

```java
public DataAwsBudgetsBudgetAutoAdjustDataList getAutoAdjustData();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList">DataAwsBudgetsBudgetAutoAdjustDataList</a>

---

##### `budgetExceeded`<sup>Required</sup> <a name="budgetExceeded" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.budgetExceeded"></a>

```java
public IResolvable getBudgetExceeded();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `budgetLimit`<sup>Required</sup> <a name="budgetLimit" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.budgetLimit"></a>

```java
public DataAwsBudgetsBudgetBudgetLimitList getBudgetLimit();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList">DataAwsBudgetsBudgetBudgetLimitList</a>

---

##### `budgetType`<sup>Required</sup> <a name="budgetType" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.budgetType"></a>

```java
public java.lang.String getBudgetType();
```

- *Type:* java.lang.String

---

##### `calculatedSpend`<sup>Required</sup> <a name="calculatedSpend" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.calculatedSpend"></a>

```java
public DataAwsBudgetsBudgetCalculatedSpendList getCalculatedSpend();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList">DataAwsBudgetsBudgetCalculatedSpendList</a>

---

##### `costFilter`<sup>Required</sup> <a name="costFilter" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.costFilter"></a>

```java
public DataAwsBudgetsBudgetCostFilterList getCostFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList">DataAwsBudgetsBudgetCostFilterList</a>

---

##### `costTypes`<sup>Required</sup> <a name="costTypes" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.costTypes"></a>

```java
public DataAwsBudgetsBudgetCostTypesList getCostTypes();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList">DataAwsBudgetsBudgetCostTypesList</a>

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.notification"></a>

```java
public DataAwsBudgetsBudgetNotificationList getNotification();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList">DataAwsBudgetsBudgetNotificationList</a>

---

##### `plannedLimit`<sup>Required</sup> <a name="plannedLimit" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.plannedLimit"></a>

```java
public DataAwsBudgetsBudgetPlannedLimitList getPlannedLimit();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList">DataAwsBudgetsBudgetPlannedLimitList</a>

---

##### `timePeriodEnd`<sup>Required</sup> <a name="timePeriodEnd" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.timePeriodEnd"></a>

```java
public java.lang.String getTimePeriodEnd();
```

- *Type:* java.lang.String

---

##### `timePeriodStart`<sup>Required</sup> <a name="timePeriodStart" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.timePeriodStart"></a>

```java
public java.lang.String getTimePeriodStart();
```

- *Type:* java.lang.String

---

##### `timeUnit`<sup>Required</sup> <a name="timeUnit" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.timeUnit"></a>

```java
public java.lang.String getTimeUnit();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.namePrefixInput"></a>

```java
public java.lang.String getNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudget.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsBudgetsBudgetAutoAdjustData <a name="DataAwsBudgetsBudgetAutoAdjustData" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustData.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_budgets_budget.DataAwsBudgetsBudgetAutoAdjustData;

DataAwsBudgetsBudgetAutoAdjustData.builder()
    .build();
```


### DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions <a name="DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_budgets_budget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions;

DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions.builder()
    .build();
```


### DataAwsBudgetsBudgetBudgetLimit <a name="DataAwsBudgetsBudgetBudgetLimit" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimit.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_budgets_budget.DataAwsBudgetsBudgetBudgetLimit;

DataAwsBudgetsBudgetBudgetLimit.builder()
    .build();
```


### DataAwsBudgetsBudgetCalculatedSpend <a name="DataAwsBudgetsBudgetCalculatedSpend" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpend.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_budgets_budget.DataAwsBudgetsBudgetCalculatedSpend;

DataAwsBudgetsBudgetCalculatedSpend.builder()
    .build();
```


### DataAwsBudgetsBudgetCalculatedSpendActualSpend <a name="DataAwsBudgetsBudgetCalculatedSpendActualSpend" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpend.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_budgets_budget.DataAwsBudgetsBudgetCalculatedSpendActualSpend;

DataAwsBudgetsBudgetCalculatedSpendActualSpend.builder()
    .build();
```


### DataAwsBudgetsBudgetConfig <a name="DataAwsBudgetsBudgetConfig" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_budgets_budget.DataAwsBudgetsBudgetConfig;

DataAwsBudgetsBudgetConfig.builder()
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
    .name(java.lang.String)
//  .accountId(java.lang.String)
//  .id(java.lang.String)
//  .namePrefix(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/data-sources/budgets_budget#name DataAwsBudgetsBudget#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/data-sources/budgets_budget#account_id DataAwsBudgetsBudget#account_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/data-sources/budgets_budget#id DataAwsBudgetsBudget#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/data-sources/budgets_budget#name_prefix DataAwsBudgetsBudget#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/data-sources/budgets_budget#tags DataAwsBudgetsBudget#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/data-sources/budgets_budget#name DataAwsBudgetsBudget#name}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/data-sources/budgets_budget#account_id DataAwsBudgetsBudget#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/data-sources/budgets_budget#id DataAwsBudgetsBudget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/data-sources/budgets_budget#name_prefix DataAwsBudgetsBudget#name_prefix}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/data-sources/budgets_budget#tags DataAwsBudgetsBudget#tags}.

---

### DataAwsBudgetsBudgetCostFilter <a name="DataAwsBudgetsBudgetCostFilter" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_budgets_budget.DataAwsBudgetsBudgetCostFilter;

DataAwsBudgetsBudgetCostFilter.builder()
    .build();
```


### DataAwsBudgetsBudgetCostTypes <a name="DataAwsBudgetsBudgetCostTypes" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_budgets_budget.DataAwsBudgetsBudgetCostTypes;

DataAwsBudgetsBudgetCostTypes.builder()
    .build();
```


### DataAwsBudgetsBudgetNotification <a name="DataAwsBudgetsBudgetNotification" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_budgets_budget.DataAwsBudgetsBudgetNotification;

DataAwsBudgetsBudgetNotification.builder()
    .build();
```


### DataAwsBudgetsBudgetPlannedLimit <a name="DataAwsBudgetsBudgetPlannedLimit" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimit.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_budgets_budget.DataAwsBudgetsBudgetPlannedLimit;

DataAwsBudgetsBudgetPlannedLimit.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList <a name="DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_budgets_budget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList;

new DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.get"></a>

```java
public DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference <a name="DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_budgets_budget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference;

new DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.budgetAdjustmentPeriod">budgetAdjustmentPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.lookbackAvailablePeriods">lookbackAvailablePeriods</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions">DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `budgetAdjustmentPeriod`<sup>Required</sup> <a name="budgetAdjustmentPeriod" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.budgetAdjustmentPeriod"></a>

```java
public java.lang.Number getBudgetAdjustmentPeriod();
```

- *Type:* java.lang.Number

---

##### `lookbackAvailablePeriods`<sup>Required</sup> <a name="lookbackAvailablePeriods" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.lookbackAvailablePeriods"></a>

```java
public java.lang.Number getLookbackAvailablePeriods();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference.property.internalValue"></a>

```java
public DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions">DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions</a>

---


### DataAwsBudgetsBudgetAutoAdjustDataList <a name="DataAwsBudgetsBudgetAutoAdjustDataList" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_budgets_budget.DataAwsBudgetsBudgetAutoAdjustDataList;

new DataAwsBudgetsBudgetAutoAdjustDataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.get"></a>

```java
public DataAwsBudgetsBudgetAutoAdjustDataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsBudgetsBudgetAutoAdjustDataOutputReference <a name="DataAwsBudgetsBudgetAutoAdjustDataOutputReference" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_budgets_budget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference;

new DataAwsBudgetsBudgetAutoAdjustDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.autoAdjustType">autoAdjustType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.historicalOptions">historicalOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList">DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.lastAutoAdjustTime">lastAutoAdjustTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustData">DataAwsBudgetsBudgetAutoAdjustData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoAdjustType`<sup>Required</sup> <a name="autoAdjustType" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.autoAdjustType"></a>

```java
public java.lang.String getAutoAdjustType();
```

- *Type:* java.lang.String

---

##### `historicalOptions`<sup>Required</sup> <a name="historicalOptions" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.historicalOptions"></a>

```java
public DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList getHistoricalOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList">DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList</a>

---

##### `lastAutoAdjustTime`<sup>Required</sup> <a name="lastAutoAdjustTime" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.lastAutoAdjustTime"></a>

```java
public java.lang.String getLastAutoAdjustTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustDataOutputReference.property.internalValue"></a>

```java
public DataAwsBudgetsBudgetAutoAdjustData getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetAutoAdjustData">DataAwsBudgetsBudgetAutoAdjustData</a>

---


### DataAwsBudgetsBudgetBudgetLimitList <a name="DataAwsBudgetsBudgetBudgetLimitList" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_budgets_budget.DataAwsBudgetsBudgetBudgetLimitList;

new DataAwsBudgetsBudgetBudgetLimitList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.get"></a>

```java
public DataAwsBudgetsBudgetBudgetLimitOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsBudgetsBudgetBudgetLimitOutputReference <a name="DataAwsBudgetsBudgetBudgetLimitOutputReference" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_budgets_budget.DataAwsBudgetsBudgetBudgetLimitOutputReference;

new DataAwsBudgetsBudgetBudgetLimitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.property.amount">amount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimit">DataAwsBudgetsBudgetBudgetLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.property.amount"></a>

```java
public java.lang.String getAmount();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimitOutputReference.property.internalValue"></a>

```java
public DataAwsBudgetsBudgetBudgetLimit getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetBudgetLimit">DataAwsBudgetsBudgetBudgetLimit</a>

---


### DataAwsBudgetsBudgetCalculatedSpendActualSpendList <a name="DataAwsBudgetsBudgetCalculatedSpendActualSpendList" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_budgets_budget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList;

new DataAwsBudgetsBudgetCalculatedSpendActualSpendList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.get"></a>

```java
public DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference <a name="DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_budgets_budget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference;

new DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.property.amount">amount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpend">DataAwsBudgetsBudgetCalculatedSpendActualSpend</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.property.amount"></a>

```java
public java.lang.String getAmount();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference.property.internalValue"></a>

```java
public DataAwsBudgetsBudgetCalculatedSpendActualSpend getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpend">DataAwsBudgetsBudgetCalculatedSpendActualSpend</a>

---


### DataAwsBudgetsBudgetCalculatedSpendList <a name="DataAwsBudgetsBudgetCalculatedSpendList" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_budgets_budget.DataAwsBudgetsBudgetCalculatedSpendList;

new DataAwsBudgetsBudgetCalculatedSpendList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.get"></a>

```java
public DataAwsBudgetsBudgetCalculatedSpendOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsBudgetsBudgetCalculatedSpendOutputReference <a name="DataAwsBudgetsBudgetCalculatedSpendOutputReference" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_budgets_budget.DataAwsBudgetsBudgetCalculatedSpendOutputReference;

new DataAwsBudgetsBudgetCalculatedSpendOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.property.actualSpend">actualSpend</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList">DataAwsBudgetsBudgetCalculatedSpendActualSpendList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpend">DataAwsBudgetsBudgetCalculatedSpend</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actualSpend`<sup>Required</sup> <a name="actualSpend" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.property.actualSpend"></a>

```java
public DataAwsBudgetsBudgetCalculatedSpendActualSpendList getActualSpend();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendActualSpendList">DataAwsBudgetsBudgetCalculatedSpendActualSpendList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpendOutputReference.property.internalValue"></a>

```java
public DataAwsBudgetsBudgetCalculatedSpend getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCalculatedSpend">DataAwsBudgetsBudgetCalculatedSpend</a>

---


### DataAwsBudgetsBudgetCostFilterList <a name="DataAwsBudgetsBudgetCostFilterList" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_budgets_budget.DataAwsBudgetsBudgetCostFilterList;

new DataAwsBudgetsBudgetCostFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.get"></a>

```java
public DataAwsBudgetsBudgetCostFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsBudgetsBudgetCostFilterOutputReference <a name="DataAwsBudgetsBudgetCostFilterOutputReference" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_budgets_budget.DataAwsBudgetsBudgetCostFilterOutputReference;

new DataAwsBudgetsBudgetCostFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilter">DataAwsBudgetsBudgetCostFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilterOutputReference.property.internalValue"></a>

```java
public DataAwsBudgetsBudgetCostFilter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostFilter">DataAwsBudgetsBudgetCostFilter</a>

---


### DataAwsBudgetsBudgetCostTypesList <a name="DataAwsBudgetsBudgetCostTypesList" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_budgets_budget.DataAwsBudgetsBudgetCostTypesList;

new DataAwsBudgetsBudgetCostTypesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.get"></a>

```java
public DataAwsBudgetsBudgetCostTypesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsBudgetsBudgetCostTypesOutputReference <a name="DataAwsBudgetsBudgetCostTypesOutputReference" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_budgets_budget.DataAwsBudgetsBudgetCostTypesOutputReference;

new DataAwsBudgetsBudgetCostTypesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeCredit">includeCredit</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeDiscount">includeDiscount</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeOtherSubscription">includeOtherSubscription</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeRecurring">includeRecurring</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeRefund">includeRefund</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeSubscription">includeSubscription</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeSupport">includeSupport</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeTax">includeTax</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeUpfront">includeUpfront</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.useAmortized">useAmortized</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.useBlended">useBlended</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypes">DataAwsBudgetsBudgetCostTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeCredit`<sup>Required</sup> <a name="includeCredit" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeCredit"></a>

```java
public IResolvable getIncludeCredit();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `includeDiscount`<sup>Required</sup> <a name="includeDiscount" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeDiscount"></a>

```java
public IResolvable getIncludeDiscount();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `includeOtherSubscription`<sup>Required</sup> <a name="includeOtherSubscription" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeOtherSubscription"></a>

```java
public IResolvable getIncludeOtherSubscription();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `includeRecurring`<sup>Required</sup> <a name="includeRecurring" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeRecurring"></a>

```java
public IResolvable getIncludeRecurring();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `includeRefund`<sup>Required</sup> <a name="includeRefund" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeRefund"></a>

```java
public IResolvable getIncludeRefund();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `includeSubscription`<sup>Required</sup> <a name="includeSubscription" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeSubscription"></a>

```java
public IResolvable getIncludeSubscription();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `includeSupport`<sup>Required</sup> <a name="includeSupport" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeSupport"></a>

```java
public IResolvable getIncludeSupport();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `includeTax`<sup>Required</sup> <a name="includeTax" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeTax"></a>

```java
public IResolvable getIncludeTax();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `includeUpfront`<sup>Required</sup> <a name="includeUpfront" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.includeUpfront"></a>

```java
public IResolvable getIncludeUpfront();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `useAmortized`<sup>Required</sup> <a name="useAmortized" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.useAmortized"></a>

```java
public IResolvable getUseAmortized();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `useBlended`<sup>Required</sup> <a name="useBlended" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.useBlended"></a>

```java
public IResolvable getUseBlended();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypesOutputReference.property.internalValue"></a>

```java
public DataAwsBudgetsBudgetCostTypes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetCostTypes">DataAwsBudgetsBudgetCostTypes</a>

---


### DataAwsBudgetsBudgetNotificationList <a name="DataAwsBudgetsBudgetNotificationList" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_budgets_budget.DataAwsBudgetsBudgetNotificationList;

new DataAwsBudgetsBudgetNotificationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.get"></a>

```java
public DataAwsBudgetsBudgetNotificationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsBudgetsBudgetNotificationOutputReference <a name="DataAwsBudgetsBudgetNotificationOutputReference" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_budgets_budget.DataAwsBudgetsBudgetNotificationOutputReference;

new DataAwsBudgetsBudgetNotificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.notificationType">notificationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.subscriberEmailAddresses">subscriberEmailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.subscriberSnsTopicArns">subscriberSnsTopicArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.thresholdType">thresholdType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotification">DataAwsBudgetsBudgetNotification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.notificationType"></a>

```java
public java.lang.String getNotificationType();
```

- *Type:* java.lang.String

---

##### `subscriberEmailAddresses`<sup>Required</sup> <a name="subscriberEmailAddresses" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.subscriberEmailAddresses"></a>

```java
public java.util.List<java.lang.String> getSubscriberEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subscriberSnsTopicArns`<sup>Required</sup> <a name="subscriberSnsTopicArns" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.subscriberSnsTopicArns"></a>

```java
public java.util.List<java.lang.String> getSubscriberSnsTopicArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `thresholdType`<sup>Required</sup> <a name="thresholdType" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.thresholdType"></a>

```java
public java.lang.String getThresholdType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotificationOutputReference.property.internalValue"></a>

```java
public DataAwsBudgetsBudgetNotification getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetNotification">DataAwsBudgetsBudgetNotification</a>

---


### DataAwsBudgetsBudgetPlannedLimitList <a name="DataAwsBudgetsBudgetPlannedLimitList" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_budgets_budget.DataAwsBudgetsBudgetPlannedLimitList;

new DataAwsBudgetsBudgetPlannedLimitList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.get"></a>

```java
public DataAwsBudgetsBudgetPlannedLimitOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsBudgetsBudgetPlannedLimitOutputReference <a name="DataAwsBudgetsBudgetPlannedLimitOutputReference" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_budgets_budget.DataAwsBudgetsBudgetPlannedLimitOutputReference;

new DataAwsBudgetsBudgetPlannedLimitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.amount">amount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimit">DataAwsBudgetsBudgetPlannedLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.amount"></a>

```java
public java.lang.String getAmount();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimitOutputReference.property.internalValue"></a>

```java
public DataAwsBudgetsBudgetPlannedLimit getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBudgetsBudget.DataAwsBudgetsBudgetPlannedLimit">DataAwsBudgetsBudgetPlannedLimit</a>

---



