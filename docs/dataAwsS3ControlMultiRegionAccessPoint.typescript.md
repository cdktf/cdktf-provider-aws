# `dataAwsS3ControlMultiRegionAccessPoint` Submodule <a name="`dataAwsS3ControlMultiRegionAccessPoint` Submodule" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsS3ControlMultiRegionAccessPoint <a name="DataAwsS3ControlMultiRegionAccessPoint" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/s3control_multi_region_access_point aws_s3control_multi_region_access_point}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer"></a>

```typescript
import { dataAwsS3ControlMultiRegionAccessPoint } from '@cdktf/provider-aws'

new dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint(scope: Construct, id: string, config: DataAwsS3ControlMultiRegionAccessPointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig">DataAwsS3ControlMultiRegionAccessPointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig">DataAwsS3ControlMultiRegionAccessPointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isConstruct"></a>

```typescript
import { dataAwsS3ControlMultiRegionAccessPoint } from '@cdktf/provider-aws'

dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isTerraformElement"></a>

```typescript
import { dataAwsS3ControlMultiRegionAccessPoint } from '@cdktf/provider-aws'

dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isTerraformDataSource"></a>

```typescript
import { dataAwsS3ControlMultiRegionAccessPoint } from '@cdktf/provider-aws'

dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.publicAccessBlock">publicAccessBlock</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList">DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.regions">regions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList">DataAwsS3ControlMultiRegionAccessPointRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `publicAccessBlock`<sup>Required</sup> <a name="publicAccessBlock" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.publicAccessBlock"></a>

```typescript
public readonly publicAccessBlock: DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList">DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList</a>

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.regions"></a>

```typescript
public readonly regions: DataAwsS3ControlMultiRegionAccessPointRegionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList">DataAwsS3ControlMultiRegionAccessPointRegionsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsS3ControlMultiRegionAccessPointConfig <a name="DataAwsS3ControlMultiRegionAccessPointConfig" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.Initializer"></a>

```typescript
import { dataAwsS3ControlMultiRegionAccessPoint } from '@cdktf/provider-aws'

const dataAwsS3ControlMultiRegionAccessPointConfig: dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3control_multi_region_access_point#name DataAwsS3ControlMultiRegionAccessPoint#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3control_multi_region_access_point#account_id DataAwsS3ControlMultiRegionAccessPoint#account_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3control_multi_region_access_point#id DataAwsS3ControlMultiRegionAccessPoint#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3control_multi_region_access_point#name DataAwsS3ControlMultiRegionAccessPoint#name}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3control_multi_region_access_point#account_id DataAwsS3ControlMultiRegionAccessPoint#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3control_multi_region_access_point#id DataAwsS3ControlMultiRegionAccessPoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock <a name="DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock.Initializer"></a>

```typescript
import { dataAwsS3ControlMultiRegionAccessPoint } from '@cdktf/provider-aws'

const dataAwsS3ControlMultiRegionAccessPointPublicAccessBlock: dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock = { ... }
```


### DataAwsS3ControlMultiRegionAccessPointRegions <a name="DataAwsS3ControlMultiRegionAccessPointRegions" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegions.Initializer"></a>

```typescript
import { dataAwsS3ControlMultiRegionAccessPoint } from '@cdktf/provider-aws'

const dataAwsS3ControlMultiRegionAccessPointRegions: dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList <a name="DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.Initializer"></a>

```typescript
import { dataAwsS3ControlMultiRegionAccessPoint } from '@cdktf/provider-aws'

new dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.get"></a>

```typescript
public get(index: number): DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference <a name="DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer"></a>

```typescript
import { dataAwsS3ControlMultiRegionAccessPoint } from '@cdktf/provider-aws'

new dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.blockPublicAcls">blockPublicAcls</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.blockPublicPolicy">blockPublicPolicy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.ignorePublicAcls">ignorePublicAcls</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.restrictPublicBuckets">restrictPublicBuckets</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock">DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blockPublicAcls`<sup>Required</sup> <a name="blockPublicAcls" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.blockPublicAcls"></a>

```typescript
public readonly blockPublicAcls: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `blockPublicPolicy`<sup>Required</sup> <a name="blockPublicPolicy" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.blockPublicPolicy"></a>

```typescript
public readonly blockPublicPolicy: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ignorePublicAcls`<sup>Required</sup> <a name="ignorePublicAcls" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.ignorePublicAcls"></a>

```typescript
public readonly ignorePublicAcls: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `restrictPublicBuckets`<sup>Required</sup> <a name="restrictPublicBuckets" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.restrictPublicBuckets"></a>

```typescript
public readonly restrictPublicBuckets: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock">DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock</a>

---


### DataAwsS3ControlMultiRegionAccessPointRegionsList <a name="DataAwsS3ControlMultiRegionAccessPointRegionsList" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.Initializer"></a>

```typescript
import { dataAwsS3ControlMultiRegionAccessPoint } from '@cdktf/provider-aws'

new dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.get"></a>

```typescript
public get(index: number): DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference <a name="DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer"></a>

```typescript
import { dataAwsS3ControlMultiRegionAccessPoint } from '@cdktf/provider-aws'

new dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegions">DataAwsS3ControlMultiRegionAccessPointRegions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsS3ControlMultiRegionAccessPointRegions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsS3ControlMultiRegionAccessPoint.DataAwsS3ControlMultiRegionAccessPointRegions">DataAwsS3ControlMultiRegionAccessPointRegions</a>

---



