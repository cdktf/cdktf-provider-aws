# `s3BucketOwnershipControls` Submodule <a name="`s3BucketOwnershipControls` Submodule" id="@cdktf/provider-aws.s3BucketOwnershipControls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketOwnershipControls <a name="S3BucketOwnershipControls" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls aws_s3_bucket_ownership_controls}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer"></a>

```typescript
import { s3BucketOwnershipControls } from '@cdktf/provider-aws'

new s3BucketOwnershipControls.S3BucketOwnershipControls(scope: Construct, id: string, config: S3BucketOwnershipControlsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig">S3BucketOwnershipControlsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig">S3BucketOwnershipControlsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRule` <a name="putRule" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.putRule"></a>

```typescript
public putRule(value: S3BucketOwnershipControlsRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRule">S3BucketOwnershipControlsRule</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.isConstruct"></a>

```typescript
import { s3BucketOwnershipControls } from '@cdktf/provider-aws'

s3BucketOwnershipControls.S3BucketOwnershipControls.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.isTerraformElement"></a>

```typescript
import { s3BucketOwnershipControls } from '@cdktf/provider-aws'

s3BucketOwnershipControls.S3BucketOwnershipControls.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.isTerraformResource"></a>

```typescript
import { s3BucketOwnershipControls } from '@cdktf/provider-aws'

s3BucketOwnershipControls.S3BucketOwnershipControls.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference">S3BucketOwnershipControlsRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.ruleInput">ruleInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRule">S3BucketOwnershipControlsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.rule"></a>

```typescript
public readonly rule: S3BucketOwnershipControlsRuleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference">S3BucketOwnershipControlsRuleOutputReference</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.ruleInput"></a>

```typescript
public readonly ruleInput: S3BucketOwnershipControlsRule;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRule">S3BucketOwnershipControlsRule</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControls.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketOwnershipControlsConfig <a name="S3BucketOwnershipControlsConfig" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.Initializer"></a>

```typescript
import { s3BucketOwnershipControls } from '@cdktf/provider-aws'

const s3BucketOwnershipControlsConfig: s3BucketOwnershipControls.S3BucketOwnershipControlsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls#bucket S3BucketOwnershipControls#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRule">S3BucketOwnershipControlsRule</a></code> | rule block. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls#id S3BucketOwnershipControls#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls#bucket S3BucketOwnershipControls#bucket}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.rule"></a>

```typescript
public readonly rule: S3BucketOwnershipControlsRule;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRule">S3BucketOwnershipControlsRule</a>

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls#rule S3BucketOwnershipControls#rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls#id S3BucketOwnershipControls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### S3BucketOwnershipControlsRule <a name="S3BucketOwnershipControlsRule" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRule.Initializer"></a>

```typescript
import { s3BucketOwnershipControls } from '@cdktf/provider-aws'

const s3BucketOwnershipControlsRule: s3BucketOwnershipControls.S3BucketOwnershipControlsRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRule.property.objectOwnership">objectOwnership</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls#object_ownership S3BucketOwnershipControls#object_ownership}. |

---

##### `objectOwnership`<sup>Required</sup> <a name="objectOwnership" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRule.property.objectOwnership"></a>

```typescript
public readonly objectOwnership: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls#object_ownership S3BucketOwnershipControls#object_ownership}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketOwnershipControlsRuleOutputReference <a name="S3BucketOwnershipControlsRuleOutputReference" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.Initializer"></a>

```typescript
import { s3BucketOwnershipControls } from '@cdktf/provider-aws'

new s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.property.objectOwnershipInput">objectOwnershipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.property.objectOwnership">objectOwnership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRule">S3BucketOwnershipControlsRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectOwnershipInput`<sup>Optional</sup> <a name="objectOwnershipInput" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.property.objectOwnershipInput"></a>

```typescript
public readonly objectOwnershipInput: string;
```

- *Type:* string

---

##### `objectOwnership`<sup>Required</sup> <a name="objectOwnership" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.property.objectOwnership"></a>

```typescript
public readonly objectOwnership: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketOwnershipControlsRule;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketOwnershipControls.S3BucketOwnershipControlsRule">S3BucketOwnershipControlsRule</a>

---



