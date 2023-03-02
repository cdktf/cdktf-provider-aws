# `macieS3BucketAssociation` Submodule <a name="`macieS3BucketAssociation` Submodule" id="@cdktf/provider-aws.macieS3BucketAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MacieS3BucketAssociation <a name="MacieS3BucketAssociation" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association aws_macie_s3_bucket_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer"></a>

```typescript
import { macieS3BucketAssociation } from '@cdktf/provider-aws'

new macieS3BucketAssociation.MacieS3BucketAssociation(scope: Construct, id: string, config: MacieS3BucketAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig">MacieS3BucketAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig">MacieS3BucketAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.putClassificationType">putClassificationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetClassificationType">resetClassificationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetMemberAccountId">resetMemberAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putClassificationType` <a name="putClassificationType" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.putClassificationType"></a>

```typescript
public putClassificationType(value: MacieS3BucketAssociationClassificationType): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.putClassificationType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType">MacieS3BucketAssociationClassificationType</a>

---

##### `resetClassificationType` <a name="resetClassificationType" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetClassificationType"></a>

```typescript
public resetClassificationType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMemberAccountId` <a name="resetMemberAccountId" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetMemberAccountId"></a>

```typescript
public resetMemberAccountId(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetPrefix"></a>

```typescript
public resetPrefix(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isConstruct"></a>

```typescript
import { macieS3BucketAssociation } from '@cdktf/provider-aws'

macieS3BucketAssociation.MacieS3BucketAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isTerraformElement"></a>

```typescript
import { macieS3BucketAssociation } from '@cdktf/provider-aws'

macieS3BucketAssociation.MacieS3BucketAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isTerraformResource"></a>

```typescript
import { macieS3BucketAssociation } from '@cdktf/provider-aws'

macieS3BucketAssociation.MacieS3BucketAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.classificationType">classificationType</a></code> | <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference">MacieS3BucketAssociationClassificationTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.classificationTypeInput">classificationTypeInput</a></code> | <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType">MacieS3BucketAssociationClassificationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.memberAccountIdInput">memberAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.memberAccountId">memberAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `classificationType`<sup>Required</sup> <a name="classificationType" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.classificationType"></a>

```typescript
public readonly classificationType: MacieS3BucketAssociationClassificationTypeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference">MacieS3BucketAssociationClassificationTypeOutputReference</a>

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `classificationTypeInput`<sup>Optional</sup> <a name="classificationTypeInput" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.classificationTypeInput"></a>

```typescript
public readonly classificationTypeInput: MacieS3BucketAssociationClassificationType;
```

- *Type:* <a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType">MacieS3BucketAssociationClassificationType</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memberAccountIdInput`<sup>Optional</sup> <a name="memberAccountIdInput" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.memberAccountIdInput"></a>

```typescript
public readonly memberAccountIdInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `memberAccountId`<sup>Required</sup> <a name="memberAccountId" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.memberAccountId"></a>

```typescript
public readonly memberAccountId: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MacieS3BucketAssociationClassificationType <a name="MacieS3BucketAssociationClassificationType" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType.Initializer"></a>

```typescript
import { macieS3BucketAssociation } from '@cdktf/provider-aws'

const macieS3BucketAssociationClassificationType: macieS3BucketAssociation.MacieS3BucketAssociationClassificationType = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType.property.continuous">continuous</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#continuous MacieS3BucketAssociation#continuous}. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType.property.oneTime">oneTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#one_time MacieS3BucketAssociation#one_time}. |

---

##### `continuous`<sup>Optional</sup> <a name="continuous" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType.property.continuous"></a>

```typescript
public readonly continuous: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#continuous MacieS3BucketAssociation#continuous}.

---

##### `oneTime`<sup>Optional</sup> <a name="oneTime" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType.property.oneTime"></a>

```typescript
public readonly oneTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#one_time MacieS3BucketAssociation#one_time}.

---

### MacieS3BucketAssociationConfig <a name="MacieS3BucketAssociationConfig" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.Initializer"></a>

```typescript
import { macieS3BucketAssociation } from '@cdktf/provider-aws'

const macieS3BucketAssociationConfig: macieS3BucketAssociation.MacieS3BucketAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.bucketName">bucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#bucket_name MacieS3BucketAssociation#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.classificationType">classificationType</a></code> | <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType">MacieS3BucketAssociationClassificationType</a></code> | classification_type block. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#id MacieS3BucketAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.memberAccountId">memberAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#member_account_id MacieS3BucketAssociation#member_account_id}. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#prefix MacieS3BucketAssociation#prefix}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#bucket_name MacieS3BucketAssociation#bucket_name}.

---

##### `classificationType`<sup>Optional</sup> <a name="classificationType" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.classificationType"></a>

```typescript
public readonly classificationType: MacieS3BucketAssociationClassificationType;
```

- *Type:* <a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType">MacieS3BucketAssociationClassificationType</a>

classification_type block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#classification_type MacieS3BucketAssociation#classification_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#id MacieS3BucketAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `memberAccountId`<sup>Optional</sup> <a name="memberAccountId" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.memberAccountId"></a>

```typescript
public readonly memberAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#member_account_id MacieS3BucketAssociation#member_account_id}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#prefix MacieS3BucketAssociation#prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### MacieS3BucketAssociationClassificationTypeOutputReference <a name="MacieS3BucketAssociationClassificationTypeOutputReference" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.Initializer"></a>

```typescript
import { macieS3BucketAssociation } from '@cdktf/provider-aws'

new macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.resetContinuous">resetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.resetOneTime">resetOneTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContinuous` <a name="resetContinuous" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.resetContinuous"></a>

```typescript
public resetContinuous(): void
```

##### `resetOneTime` <a name="resetOneTime" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.resetOneTime"></a>

```typescript
public resetOneTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.continuousInput">continuousInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.oneTimeInput">oneTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.continuous">continuous</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.oneTime">oneTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType">MacieS3BucketAssociationClassificationType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `continuousInput`<sup>Optional</sup> <a name="continuousInput" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.continuousInput"></a>

```typescript
public readonly continuousInput: string;
```

- *Type:* string

---

##### `oneTimeInput`<sup>Optional</sup> <a name="oneTimeInput" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.oneTimeInput"></a>

```typescript
public readonly oneTimeInput: string;
```

- *Type:* string

---

##### `continuous`<sup>Required</sup> <a name="continuous" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.continuous"></a>

```typescript
public readonly continuous: string;
```

- *Type:* string

---

##### `oneTime`<sup>Required</sup> <a name="oneTime" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.oneTime"></a>

```typescript
public readonly oneTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MacieS3BucketAssociationClassificationType;
```

- *Type:* <a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType">MacieS3BucketAssociationClassificationType</a>

---



