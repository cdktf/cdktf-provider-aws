# `dataAwsGlueScript` Submodule <a name="`dataAwsGlueScript` Submodule" id="@cdktf/provider-aws.dataAwsGlueScript"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsGlueScript <a name="DataAwsGlueScript" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/glue_script aws_glue_script}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_glue_script.DataAwsGlueScript;

DataAwsGlueScript.Builder.create(Construct scope, java.lang.String id)
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
    .dagEdge(IResolvable)
    .dagEdge(java.util.List<DataAwsGlueScriptDagEdge>)
    .dagNode(IResolvable)
    .dagNode(java.util.List<DataAwsGlueScriptDagNode>)
//  .id(java.lang.String)
//  .language(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.dagEdge">dagEdge</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge">DataAwsGlueScriptDagEdge</a>></code> | dag_edge block. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.dagNode">dagNode</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode">DataAwsGlueScriptDagNode</a>></code> | dag_node block. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#id DataAwsGlueScript#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.language">language</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#language DataAwsGlueScript#language}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dagEdge`<sup>Required</sup> <a name="dagEdge" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.dagEdge"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge">DataAwsGlueScriptDagEdge</a>>

dag_edge block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#dag_edge DataAwsGlueScript#dag_edge}

---

##### `dagNode`<sup>Required</sup> <a name="dagNode" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.dagNode"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode">DataAwsGlueScriptDagNode</a>>

dag_node block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#dag_node DataAwsGlueScript#dag_node}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#id DataAwsGlueScript#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.language"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#language DataAwsGlueScript#language}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.putDagEdge">putDagEdge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.putDagNode">putDagNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.resetLanguage">resetLanguage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putDagEdge` <a name="putDagEdge" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.putDagEdge"></a>

```java
public void putDagEdge(IResolvable OR java.util.List<DataAwsGlueScriptDagEdge> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.putDagEdge.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge">DataAwsGlueScriptDagEdge</a>>

---

##### `putDagNode` <a name="putDagNode" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.putDagNode"></a>

```java
public void putDagNode(IResolvable OR java.util.List<DataAwsGlueScriptDagNode> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.putDagNode.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode">DataAwsGlueScriptDagNode</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.resetId"></a>

```java
public void resetId()
```

##### `resetLanguage` <a name="resetLanguage" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.resetLanguage"></a>

```java
public void resetLanguage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_glue_script.DataAwsGlueScript;

DataAwsGlueScript.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_glue_script.DataAwsGlueScript;

DataAwsGlueScript.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_glue_script.DataAwsGlueScript;

DataAwsGlueScript.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.dagEdge">dagEdge</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList">DataAwsGlueScriptDagEdgeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.dagNode">dagNode</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList">DataAwsGlueScriptDagNodeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.pythonScript">pythonScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.scalaCode">scalaCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.dagEdgeInput">dagEdgeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge">DataAwsGlueScriptDagEdge</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.dagNodeInput">dagNodeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode">DataAwsGlueScriptDagNode</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.languageInput">languageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.language">language</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `dagEdge`<sup>Required</sup> <a name="dagEdge" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.dagEdge"></a>

```java
public DataAwsGlueScriptDagEdgeList getDagEdge();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList">DataAwsGlueScriptDagEdgeList</a>

---

##### `dagNode`<sup>Required</sup> <a name="dagNode" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.dagNode"></a>

```java
public DataAwsGlueScriptDagNodeList getDagNode();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList">DataAwsGlueScriptDagNodeList</a>

---

##### `pythonScript`<sup>Required</sup> <a name="pythonScript" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.pythonScript"></a>

```java
public java.lang.String getPythonScript();
```

- *Type:* java.lang.String

---

##### `scalaCode`<sup>Required</sup> <a name="scalaCode" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.scalaCode"></a>

```java
public java.lang.String getScalaCode();
```

- *Type:* java.lang.String

---

##### `dagEdgeInput`<sup>Optional</sup> <a name="dagEdgeInput" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.dagEdgeInput"></a>

```java
public java.lang.Object getDagEdgeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge">DataAwsGlueScriptDagEdge</a>>

---

##### `dagNodeInput`<sup>Optional</sup> <a name="dagNodeInput" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.dagNodeInput"></a>

```java
public java.lang.Object getDagNodeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode">DataAwsGlueScriptDagNode</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.languageInput"></a>

```java
public java.lang.String getLanguageInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsGlueScriptConfig <a name="DataAwsGlueScriptConfig" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_glue_script.DataAwsGlueScriptConfig;

DataAwsGlueScriptConfig.builder()
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
    .dagEdge(IResolvable)
    .dagEdge(java.util.List<DataAwsGlueScriptDagEdge>)
    .dagNode(IResolvable)
    .dagNode(java.util.List<DataAwsGlueScriptDagNode>)
//  .id(java.lang.String)
//  .language(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.dagEdge">dagEdge</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge">DataAwsGlueScriptDagEdge</a>></code> | dag_edge block. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.dagNode">dagNode</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode">DataAwsGlueScriptDagNode</a>></code> | dag_node block. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#id DataAwsGlueScript#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.language">language</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#language DataAwsGlueScript#language}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dagEdge`<sup>Required</sup> <a name="dagEdge" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.dagEdge"></a>

```java
public java.lang.Object getDagEdge();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge">DataAwsGlueScriptDagEdge</a>>

dag_edge block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#dag_edge DataAwsGlueScript#dag_edge}

---

##### `dagNode`<sup>Required</sup> <a name="dagNode" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.dagNode"></a>

```java
public java.lang.Object getDagNode();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode">DataAwsGlueScriptDagNode</a>>

dag_node block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#dag_node DataAwsGlueScript#dag_node}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#id DataAwsGlueScript#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#language DataAwsGlueScript#language}.

---

### DataAwsGlueScriptDagEdge <a name="DataAwsGlueScriptDagEdge" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_glue_script.DataAwsGlueScriptDagEdge;

DataAwsGlueScriptDagEdge.builder()
    .source(java.lang.String)
    .target(java.lang.String)
//  .targetParameter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge.property.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#source DataAwsGlueScript#source}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge.property.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#target DataAwsGlueScript#target}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge.property.targetParameter">targetParameter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#target_parameter DataAwsGlueScript#target_parameter}. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#source DataAwsGlueScript#source}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#target DataAwsGlueScript#target}.

---

##### `targetParameter`<sup>Optional</sup> <a name="targetParameter" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge.property.targetParameter"></a>

```java
public java.lang.String getTargetParameter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#target_parameter DataAwsGlueScript#target_parameter}.

---

### DataAwsGlueScriptDagNode <a name="DataAwsGlueScriptDagNode" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_glue_script.DataAwsGlueScriptDagNode;

DataAwsGlueScriptDagNode.builder()
    .args(IResolvable)
    .args(java.util.List<DataAwsGlueScriptDagNodeArgs>)
    .id(java.lang.String)
    .nodeType(java.lang.String)
//  .lineNumber(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode.property.args">args</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs">DataAwsGlueScriptDagNodeArgs</a>></code> | args block. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#id DataAwsGlueScript#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#node_type DataAwsGlueScript#node_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode.property.lineNumber">lineNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#line_number DataAwsGlueScript#line_number}. |

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode.property.args"></a>

```java
public java.lang.Object getArgs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs">DataAwsGlueScriptDagNodeArgs</a>>

args block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#args DataAwsGlueScript#args}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#id DataAwsGlueScript#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#node_type DataAwsGlueScript#node_type}.

---

##### `lineNumber`<sup>Optional</sup> <a name="lineNumber" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode.property.lineNumber"></a>

```java
public java.lang.Number getLineNumber();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#line_number DataAwsGlueScript#line_number}.

---

### DataAwsGlueScriptDagNodeArgs <a name="DataAwsGlueScriptDagNodeArgs" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_glue_script.DataAwsGlueScriptDagNodeArgs;

DataAwsGlueScriptDagNodeArgs.builder()
    .name(java.lang.String)
    .value(java.lang.String)
//  .param(java.lang.Boolean)
//  .param(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#name DataAwsGlueScript#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#value DataAwsGlueScript#value}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs.property.param">param</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#param DataAwsGlueScript#param}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#name DataAwsGlueScript#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#value DataAwsGlueScript#value}.

---

##### `param`<sup>Optional</sup> <a name="param" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs.property.param"></a>

```java
public java.lang.Object getParam();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#param DataAwsGlueScript#param}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsGlueScriptDagEdgeList <a name="DataAwsGlueScriptDagEdgeList" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_glue_script.DataAwsGlueScriptDagEdgeList;

new DataAwsGlueScriptDagEdgeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.get"></a>

```java
public DataAwsGlueScriptDagEdgeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge">DataAwsGlueScriptDagEdge</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge">DataAwsGlueScriptDagEdge</a>>

---


### DataAwsGlueScriptDagEdgeOutputReference <a name="DataAwsGlueScriptDagEdgeOutputReference" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_glue_script.DataAwsGlueScriptDagEdgeOutputReference;

new DataAwsGlueScriptDagEdgeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.resetTargetParameter">resetTargetParameter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTargetParameter` <a name="resetTargetParameter" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.resetTargetParameter"></a>

```java
public void resetTargetParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.targetParameterInput">targetParameterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.targetParameter">targetParameter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge">DataAwsGlueScriptDagEdge</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `targetParameterInput`<sup>Optional</sup> <a name="targetParameterInput" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.targetParameterInput"></a>

```java
public java.lang.String getTargetParameterInput();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `targetParameter`<sup>Required</sup> <a name="targetParameter" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.targetParameter"></a>

```java
public java.lang.String getTargetParameter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge">DataAwsGlueScriptDagEdge</a> OR com.hashicorp.cdktf.IResolvable

---


### DataAwsGlueScriptDagNodeArgsList <a name="DataAwsGlueScriptDagNodeArgsList" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_glue_script.DataAwsGlueScriptDagNodeArgsList;

new DataAwsGlueScriptDagNodeArgsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.get"></a>

```java
public DataAwsGlueScriptDagNodeArgsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs">DataAwsGlueScriptDagNodeArgs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs">DataAwsGlueScriptDagNodeArgs</a>>

---


### DataAwsGlueScriptDagNodeArgsOutputReference <a name="DataAwsGlueScriptDagNodeArgsOutputReference" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_glue_script.DataAwsGlueScriptDagNodeArgsOutputReference;

new DataAwsGlueScriptDagNodeArgsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.resetParam">resetParam</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParam` <a name="resetParam" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.resetParam"></a>

```java
public void resetParam()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.paramInput">paramInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.param">param</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs">DataAwsGlueScriptDagNodeArgs</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `paramInput`<sup>Optional</sup> <a name="paramInput" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.paramInput"></a>

```java
public java.lang.Object getParamInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `param`<sup>Required</sup> <a name="param" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.param"></a>

```java
public java.lang.Object getParam();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs">DataAwsGlueScriptDagNodeArgs</a> OR com.hashicorp.cdktf.IResolvable

---


### DataAwsGlueScriptDagNodeList <a name="DataAwsGlueScriptDagNodeList" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_glue_script.DataAwsGlueScriptDagNodeList;

new DataAwsGlueScriptDagNodeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.get"></a>

```java
public DataAwsGlueScriptDagNodeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode">DataAwsGlueScriptDagNode</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode">DataAwsGlueScriptDagNode</a>>

---


### DataAwsGlueScriptDagNodeOutputReference <a name="DataAwsGlueScriptDagNodeOutputReference" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_glue_script.DataAwsGlueScriptDagNodeOutputReference;

new DataAwsGlueScriptDagNodeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.putArgs">putArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.resetLineNumber">resetLineNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putArgs` <a name="putArgs" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.putArgs"></a>

```java
public void putArgs(IResolvable OR java.util.List<DataAwsGlueScriptDagNodeArgs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.putArgs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs">DataAwsGlueScriptDagNodeArgs</a>>

---

##### `resetLineNumber` <a name="resetLineNumber" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.resetLineNumber"></a>

```java
public void resetLineNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.args">args</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList">DataAwsGlueScriptDagNodeArgsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.argsInput">argsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs">DataAwsGlueScriptDagNodeArgs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.lineNumberInput">lineNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.nodeTypeInput">nodeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.lineNumber">lineNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode">DataAwsGlueScriptDagNode</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.args"></a>

```java
public DataAwsGlueScriptDagNodeArgsList getArgs();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList">DataAwsGlueScriptDagNodeArgsList</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.argsInput"></a>

```java
public java.lang.Object getArgsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs">DataAwsGlueScriptDagNodeArgs</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `lineNumberInput`<sup>Optional</sup> <a name="lineNumberInput" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.lineNumberInput"></a>

```java
public java.lang.Number getLineNumberInput();
```

- *Type:* java.lang.Number

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.nodeTypeInput"></a>

```java
public java.lang.String getNodeTypeInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lineNumber`<sup>Required</sup> <a name="lineNumber" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.lineNumber"></a>

```java
public java.lang.Number getLineNumber();
```

- *Type:* java.lang.Number

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode">DataAwsGlueScriptDagNode</a> OR com.hashicorp.cdktf.IResolvable

---



