# `codecommitApprovalRuleTemplateAssociation` Submodule <a name="`codecommitApprovalRuleTemplateAssociation` Submodule" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodecommitApprovalRuleTemplateAssociation <a name="CodecommitApprovalRuleTemplateAssociation" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template_association aws_codecommit_approval_rule_template_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codecommit_approval_rule_template_association.CodecommitApprovalRuleTemplateAssociation;

CodecommitApprovalRuleTemplateAssociation.Builder.create(Construct scope, java.lang.String id)
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
    .approvalRuleTemplateName(java.lang.String)
    .repositoryName(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.approvalRuleTemplateName">approvalRuleTemplateName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template_association#approval_rule_template_name CodecommitApprovalRuleTemplateAssociation#approval_rule_template_name}. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.repositoryName">repositoryName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template_association#repository_name CodecommitApprovalRuleTemplateAssociation#repository_name}. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template_association#id CodecommitApprovalRuleTemplateAssociation#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `approvalRuleTemplateName`<sup>Required</sup> <a name="approvalRuleTemplateName" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.approvalRuleTemplateName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template_association#approval_rule_template_name CodecommitApprovalRuleTemplateAssociation#approval_rule_template_name}.

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.repositoryName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template_association#repository_name CodecommitApprovalRuleTemplateAssociation#repository_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template_association#id CodecommitApprovalRuleTemplateAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.codecommit_approval_rule_template_association.CodecommitApprovalRuleTemplateAssociation;

CodecommitApprovalRuleTemplateAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.codecommit_approval_rule_template_association.CodecommitApprovalRuleTemplateAssociation;

CodecommitApprovalRuleTemplateAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.codecommit_approval_rule_template_association.CodecommitApprovalRuleTemplateAssociation;

CodecommitApprovalRuleTemplateAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.approvalRuleTemplateNameInput">approvalRuleTemplateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.repositoryNameInput">repositoryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.approvalRuleTemplateName">approvalRuleTemplateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.repositoryName">repositoryName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `approvalRuleTemplateNameInput`<sup>Optional</sup> <a name="approvalRuleTemplateNameInput" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.approvalRuleTemplateNameInput"></a>

```java
public java.lang.String getApprovalRuleTemplateNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `repositoryNameInput`<sup>Optional</sup> <a name="repositoryNameInput" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.repositoryNameInput"></a>

```java
public java.lang.String getRepositoryNameInput();
```

- *Type:* java.lang.String

---

##### `approvalRuleTemplateName`<sup>Required</sup> <a name="approvalRuleTemplateName" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.approvalRuleTemplateName"></a>

```java
public java.lang.String getApprovalRuleTemplateName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.repositoryName"></a>

```java
public java.lang.String getRepositoryName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CodecommitApprovalRuleTemplateAssociationConfig <a name="CodecommitApprovalRuleTemplateAssociationConfig" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codecommit_approval_rule_template_association.CodecommitApprovalRuleTemplateAssociationConfig;

CodecommitApprovalRuleTemplateAssociationConfig.builder()
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
    .approvalRuleTemplateName(java.lang.String)
    .repositoryName(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.approvalRuleTemplateName">approvalRuleTemplateName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template_association#approval_rule_template_name CodecommitApprovalRuleTemplateAssociation#approval_rule_template_name}. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.repositoryName">repositoryName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template_association#repository_name CodecommitApprovalRuleTemplateAssociation#repository_name}. |
| <code><a href="#@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template_association#id CodecommitApprovalRuleTemplateAssociation#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `approvalRuleTemplateName`<sup>Required</sup> <a name="approvalRuleTemplateName" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.approvalRuleTemplateName"></a>

```java
public java.lang.String getApprovalRuleTemplateName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template_association#approval_rule_template_name CodecommitApprovalRuleTemplateAssociation#approval_rule_template_name}.

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.repositoryName"></a>

```java
public java.lang.String getRepositoryName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template_association#repository_name CodecommitApprovalRuleTemplateAssociation#repository_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codecommitApprovalRuleTemplateAssociation.CodecommitApprovalRuleTemplateAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template_association#id CodecommitApprovalRuleTemplateAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



