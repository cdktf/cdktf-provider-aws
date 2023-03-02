# `dataAwsOrganizationsDelegatedAdministrators` Submodule <a name="`dataAwsOrganizationsDelegatedAdministrators` Submodule" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOrganizationsDelegatedAdministrators <a name="DataAwsOrganizationsDelegatedAdministrators" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/organizations_delegated_administrators aws_organizations_delegated_administrators}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.Initializer"></a>

```typescript
import { dataAwsOrganizationsDelegatedAdministrators } from '@cdktf/provider-aws'

new dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators(scope: Construct, id: string, config?: DataAwsOrganizationsDelegatedAdministratorsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig">DataAwsOrganizationsDelegatedAdministratorsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig">DataAwsOrganizationsDelegatedAdministratorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.resetServicePrincipal">resetServicePrincipal</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.resetId"></a>

```typescript
public resetId(): void
```

##### `resetServicePrincipal` <a name="resetServicePrincipal" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.resetServicePrincipal"></a>

```typescript
public resetServicePrincipal(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.isConstruct"></a>

```typescript
import { dataAwsOrganizationsDelegatedAdministrators } from '@cdktf/provider-aws'

dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.isTerraformElement"></a>

```typescript
import { dataAwsOrganizationsDelegatedAdministrators } from '@cdktf/provider-aws'

dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.isTerraformDataSource"></a>

```typescript
import { dataAwsOrganizationsDelegatedAdministrators } from '@cdktf/provider-aws'

dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.delegatedAdministrators">delegatedAdministrators</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList">DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.servicePrincipalInput">servicePrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.servicePrincipal">servicePrincipal</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `delegatedAdministrators`<sup>Required</sup> <a name="delegatedAdministrators" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.delegatedAdministrators"></a>

```typescript
public readonly delegatedAdministrators: DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList">DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `servicePrincipalInput`<sup>Optional</sup> <a name="servicePrincipalInput" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.servicePrincipalInput"></a>

```typescript
public readonly servicePrincipalInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `servicePrincipal`<sup>Required</sup> <a name="servicePrincipal" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.servicePrincipal"></a>

```typescript
public readonly servicePrincipal: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministrators.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOrganizationsDelegatedAdministratorsConfig <a name="DataAwsOrganizationsDelegatedAdministratorsConfig" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.Initializer"></a>

```typescript
import { dataAwsOrganizationsDelegatedAdministrators } from '@cdktf/provider-aws'

const dataAwsOrganizationsDelegatedAdministratorsConfig: dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_delegated_administrators#id DataAwsOrganizationsDelegatedAdministrators#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.servicePrincipal">servicePrincipal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_delegated_administrators#service_principal DataAwsOrganizationsDelegatedAdministrators#service_principal}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_delegated_administrators#id DataAwsOrganizationsDelegatedAdministrators#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `servicePrincipal`<sup>Optional</sup> <a name="servicePrincipal" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsConfig.property.servicePrincipal"></a>

```typescript
public readonly servicePrincipal: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_delegated_administrators#service_principal DataAwsOrganizationsDelegatedAdministrators#service_principal}.

---

### DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators <a name="DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators.Initializer"></a>

```typescript
import { dataAwsOrganizationsDelegatedAdministrators } from '@cdktf/provider-aws'

const dataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators: dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList <a name="DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.Initializer"></a>

```typescript
import { dataAwsOrganizationsDelegatedAdministrators } from '@cdktf/provider-aws'

new dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.get"></a>

```typescript
public get(index: number): DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference <a name="DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.Initializer"></a>

```typescript
import { dataAwsOrganizationsDelegatedAdministrators } from '@cdktf/provider-aws'

new dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.delegationEnabledDate">delegationEnabledDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.joinedMethod">joinedMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.joinedTimestamp">joinedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators">DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `delegationEnabledDate`<sup>Required</sup> <a name="delegationEnabledDate" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.delegationEnabledDate"></a>

```typescript
public readonly delegationEnabledDate: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `joinedMethod`<sup>Required</sup> <a name="joinedMethod" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.joinedMethod"></a>

```typescript
public readonly joinedMethod: string;
```

- *Type:* string

---

##### `joinedTimestamp`<sup>Required</sup> <a name="joinedTimestamp" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.joinedTimestamp"></a>

```typescript
public readonly joinedTimestamp: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsDelegatedAdministrators.DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators">DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators</a>

---



