# `s3AccountPublicAccessBlock` Submodule <a name="`s3AccountPublicAccessBlock` Submodule" id="@cdktf/provider-aws.s3AccountPublicAccessBlock"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3AccountPublicAccessBlock <a name="S3AccountPublicAccessBlock" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block aws_s3_account_public_access_block}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.Initializer"></a>

```typescript
import { s3AccountPublicAccessBlock } from '@cdktf/provider-aws'

new s3AccountPublicAccessBlock.S3AccountPublicAccessBlock(scope: Construct, id: string, config?: S3AccountPublicAccessBlockConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig">S3AccountPublicAccessBlockConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig">S3AccountPublicAccessBlockConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetBlockPublicAcls">resetBlockPublicAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetBlockPublicPolicy">resetBlockPublicPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetIgnorePublicAcls">resetIgnorePublicAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetRestrictPublicBuckets">resetRestrictPublicBuckets</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetBlockPublicAcls` <a name="resetBlockPublicAcls" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetBlockPublicAcls"></a>

```typescript
public resetBlockPublicAcls(): void
```

##### `resetBlockPublicPolicy` <a name="resetBlockPublicPolicy" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetBlockPublicPolicy"></a>

```typescript
public resetBlockPublicPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnorePublicAcls` <a name="resetIgnorePublicAcls" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetIgnorePublicAcls"></a>

```typescript
public resetIgnorePublicAcls(): void
```

##### `resetRestrictPublicBuckets` <a name="resetRestrictPublicBuckets" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.resetRestrictPublicBuckets"></a>

```typescript
public resetRestrictPublicBuckets(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.isConstruct"></a>

```typescript
import { s3AccountPublicAccessBlock } from '@cdktf/provider-aws'

s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.isTerraformElement"></a>

```typescript
import { s3AccountPublicAccessBlock } from '@cdktf/provider-aws'

s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.isTerraformResource"></a>

```typescript
import { s3AccountPublicAccessBlock } from '@cdktf/provider-aws'

s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.blockPublicAclsInput">blockPublicAclsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.blockPublicPolicyInput">blockPublicPolicyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.ignorePublicAclsInput">ignorePublicAclsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.restrictPublicBucketsInput">restrictPublicBucketsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.blockPublicAcls">blockPublicAcls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.blockPublicPolicy">blockPublicPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.ignorePublicAcls">ignorePublicAcls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.restrictPublicBuckets">restrictPublicBuckets</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `blockPublicAclsInput`<sup>Optional</sup> <a name="blockPublicAclsInput" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.blockPublicAclsInput"></a>

```typescript
public readonly blockPublicAclsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `blockPublicPolicyInput`<sup>Optional</sup> <a name="blockPublicPolicyInput" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.blockPublicPolicyInput"></a>

```typescript
public readonly blockPublicPolicyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignorePublicAclsInput`<sup>Optional</sup> <a name="ignorePublicAclsInput" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.ignorePublicAclsInput"></a>

```typescript
public readonly ignorePublicAclsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `restrictPublicBucketsInput`<sup>Optional</sup> <a name="restrictPublicBucketsInput" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.restrictPublicBucketsInput"></a>

```typescript
public readonly restrictPublicBucketsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `blockPublicAcls`<sup>Required</sup> <a name="blockPublicAcls" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.blockPublicAcls"></a>

```typescript
public readonly blockPublicAcls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `blockPublicPolicy`<sup>Required</sup> <a name="blockPublicPolicy" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.blockPublicPolicy"></a>

```typescript
public readonly blockPublicPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignorePublicAcls`<sup>Required</sup> <a name="ignorePublicAcls" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.ignorePublicAcls"></a>

```typescript
public readonly ignorePublicAcls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `restrictPublicBuckets`<sup>Required</sup> <a name="restrictPublicBuckets" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.restrictPublicBuckets"></a>

```typescript
public readonly restrictPublicBuckets: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlock.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3AccountPublicAccessBlockConfig <a name="S3AccountPublicAccessBlockConfig" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.Initializer"></a>

```typescript
import { s3AccountPublicAccessBlock } from '@cdktf/provider-aws'

const s3AccountPublicAccessBlockConfig: s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block#account_id S3AccountPublicAccessBlock#account_id}. |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.blockPublicAcls">blockPublicAcls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block#block_public_acls S3AccountPublicAccessBlock#block_public_acls}. |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.blockPublicPolicy">blockPublicPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block#block_public_policy S3AccountPublicAccessBlock#block_public_policy}. |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block#id S3AccountPublicAccessBlock#id}. |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.ignorePublicAcls">ignorePublicAcls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block#ignore_public_acls S3AccountPublicAccessBlock#ignore_public_acls}. |
| <code><a href="#@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.restrictPublicBuckets">restrictPublicBuckets</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block#restrict_public_buckets S3AccountPublicAccessBlock#restrict_public_buckets}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block#account_id S3AccountPublicAccessBlock#account_id}.

---

##### `blockPublicAcls`<sup>Optional</sup> <a name="blockPublicAcls" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.blockPublicAcls"></a>

```typescript
public readonly blockPublicAcls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block#block_public_acls S3AccountPublicAccessBlock#block_public_acls}.

---

##### `blockPublicPolicy`<sup>Optional</sup> <a name="blockPublicPolicy" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.blockPublicPolicy"></a>

```typescript
public readonly blockPublicPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block#block_public_policy S3AccountPublicAccessBlock#block_public_policy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block#id S3AccountPublicAccessBlock#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignorePublicAcls`<sup>Optional</sup> <a name="ignorePublicAcls" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.ignorePublicAcls"></a>

```typescript
public readonly ignorePublicAcls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block#ignore_public_acls S3AccountPublicAccessBlock#ignore_public_acls}.

---

##### `restrictPublicBuckets`<sup>Optional</sup> <a name="restrictPublicBuckets" id="@cdktf/provider-aws.s3AccountPublicAccessBlock.S3AccountPublicAccessBlockConfig.property.restrictPublicBuckets"></a>

```typescript
public readonly restrictPublicBuckets: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block#restrict_public_buckets S3AccountPublicAccessBlock#restrict_public_buckets}.

---



